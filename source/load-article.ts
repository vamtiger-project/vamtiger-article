import getElement from '../node_modules/vamtiger-browser-method/source/get-element';
import VamtigerCoverFigure from '../node_modules/vamtiger-cover-figure/source/element';
import VamtigerSocialMediaButton from '../node_modules/vamtiger-social-media-button/source/element';
import {
    Selector,
    SlotName,
    DataAttribute,
    StringConstant,
    ILoadArticle,
    IDataset,
    CustomProperty,
    GridTemplateArea
} from './types';
import getTemplate from './get-template';
import { name as slotName } from './element';
import handleArticleScroll from './handle-article-scroll';
import setupArticle from './setup-article';

const { nothing, space } = StringConstant;

export default async function ({ element }: ILoadArticle) {
    const { documentElement } = document;
    const dataset = element.dataset as IDataset;
    const {
        article: url
    } = dataset;
    const articleTemplate = url && await getElement({
        url,
        name: url,
        selector: Selector.article
    });
    const article = articleTemplate && getTemplate({
        selector: Selector.article,
        attributes: {
            slot: slotName
        }
    });
    const articleContainer = articleTemplate && getTemplate({
        selector: Selector.div
    });
    const closeBar = articleTemplate && articleTemplate.querySelector<HTMLElement>(Selector.closeBar);
    const closeBarBackButtonContainer = closeBar && closeBar.dataset.hasOwnProperty(DataAttribute.backButton) && getTemplate({
        selector: Selector.div
    });
    const closeBarBackButtonIcon = closeBarBackButtonContainer && getTemplate({
        selector: Selector.backIcon
    });
    const closeBarBackButtonCaption = closeBarBackButtonContainer && getTemplate({
        selector: Selector.backButtonCaption
    });
    const closeBarBackButtonContainerElements = [
        closeBarBackButtonIcon,
        closeBarBackButtonCaption
    ];
    const cover = articleTemplate && articleTemplate.querySelector<VamtigerCoverFigure>(Selector.cover);
    const hiddenCover = articleTemplate && getTemplate({
        selector: Selector.div
    });
    const title = articleTemplate && articleTemplate.querySelector<HTMLHeadingElement>(Selector.headingTitle);
    const subtitle = articleTemplate && articleTemplate.querySelector<HTMLHeadingElement>(Selector.headingSubtitle);
    const heading = title && getTemplate({
        selector: Selector.header
    });
    const paragraphs = articleTemplate && dataset.hasOwnProperty(DataAttribute.paragraphs) && Array.from(articleTemplate.querySelectorAll<HTMLParagraphElement>(Selector.paragraph)) || [];
    const paragraphSection = paragraphs.length && getTemplate({
        selector: Selector.section
    });
    const socialMediaButtons = articleTemplate && Array.from(articleTemplate.querySelectorAll<VamtigerSocialMediaButton>(Selector.socialMediaButton));
    const footer = socialMediaButtons && socialMediaButtons.length && getTemplate({
        selector: Selector.footer
    });
    const headingElements = [
        title,
        subtitle
    ];
    const articleElements = [
        hiddenCover,
        articleContainer
    ];
    const articleContainerElements = [
        heading,
        paragraphSection,
        footer
    ];
    const elements = [
        closeBar,
        cover,
        article
    ];

    if (closeBar) {
        if (closeBarBackButtonContainer) {
            closeBarBackButtonContainer.dataset[DataAttribute.backButtonContainer] = nothing;

            closeBarBackButtonContainerElements.forEach(currentElement => currentElement && closeBarBackButtonContainer.appendChild(currentElement));

            closeBarBackButtonContainer.children.length && closeBar.appendChild(closeBarBackButtonContainer);
        }

        closeBar.slot = SlotName.closeBar;
    }

    if (cover) {
        cover.slot = SlotName.cover;
    }

    if (hiddenCover) {
        hiddenCover.dataset[DataAttribute.hiddenCover] = nothing;
    }

    if (articleContainer) {
        articleContainer.dataset[DataAttribute.articleContainer] = nothing;
    }

    if (heading) {
        heading.dataset[DataAttribute.heading] = nothing;
    }

    if (paragraphSection) {
        paragraphSection.dataset[DataAttribute.paragraphs] = nothing;

        paragraphs.forEach(paragraph => paragraphSection.appendChild(paragraph));
    }

    if (footer && socialMediaButtons) {
        footer.dataset.socialMedia = nothing;

        socialMediaButtons.forEach(socialMediaButton => socialMediaButton && footer.appendChild(socialMediaButton));
    }

    headingElements.forEach(headingElement => headingElement && heading && heading.appendChild(headingElement));

    articleContainer && articleContainerElements.forEach(articleContainerElement => articleContainerElement && articleContainer.appendChild(articleContainerElement));

    socialMediaButtons && socialMediaButtons.forEach(socialMediaButton => socialMediaButton.slot = SlotName.socialMediaButton);

    if (article) {
        article.addEventListener('scroll', event => handleArticleScroll({ article }));

        articleElements.forEach(articleElement => articleElement && article.appendChild(articleElement));
    }

    elements.forEach(currentElement => currentElement && element.appendChild(currentElement as HTMLElement));

    setupArticle({ element });
}