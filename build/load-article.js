"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_element_1 = require("../node_modules/vamtiger-browser-method/source/get-element");
const types_1 = require("./types");
const get_template_1 = require("./get-template");
const element_1 = require("./element");
const handle_article_scroll_1 = require("./handle-article-scroll");
const setup_article_1 = require("./setup-article");
const { nothing, space } = types_1.StringConstant;
async function default_1({ element }) {
    const { documentElement } = document;
    const dataset = element.dataset;
    const { article: url } = dataset;
    const articleTemplate = url && await get_element_1.default({
        url,
        name: url,
        selector: types_1.Selector.article
    });
    const article = articleTemplate && get_template_1.default({
        selector: types_1.Selector.article,
        attributes: {
            slot: element_1.name
        }
    });
    const articleContainer = articleTemplate && get_template_1.default({
        selector: types_1.Selector.div
    });
    const closeBar = articleTemplate && articleTemplate.querySelector(types_1.Selector.closeBar);
    const closeBarBackButtonContainer = closeBar && closeBar.dataset.hasOwnProperty(types_1.DataAttribute.backButton) && get_template_1.default({
        selector: types_1.Selector.div
    });
    const closeBarBackButtonIcon = closeBarBackButtonContainer && get_template_1.default({
        selector: types_1.Selector.backIcon
    });
    const closeBarBackButtonCaption = closeBarBackButtonContainer && get_template_1.default({
        selector: types_1.Selector.backButtonCaption
    });
    const closeBarBackButtonContainerElements = [
        closeBarBackButtonIcon,
        closeBarBackButtonCaption
    ];
    const cover = articleTemplate && articleTemplate.querySelector(types_1.Selector.cover);
    const hiddenCover = articleTemplate && get_template_1.default({
        selector: types_1.Selector.div
    });
    const title = articleTemplate && articleTemplate.querySelector(types_1.Selector.headingTitle);
    const subtitle = articleTemplate && articleTemplate.querySelector(types_1.Selector.headingSubtitle);
    const heading = title && get_template_1.default({
        selector: types_1.Selector.header
    });
    const paragraphs = articleTemplate && dataset.hasOwnProperty(types_1.DataAttribute.paragraphs) && Array.from(articleTemplate.querySelectorAll(types_1.Selector.paragraph)) || [];
    const paragraphSection = paragraphs.length && get_template_1.default({
        selector: types_1.Selector.section
    });
    const socialMediaButtons = articleTemplate && Array.from(articleTemplate.querySelectorAll(types_1.Selector.socialMediaButton));
    const footer = socialMediaButtons && socialMediaButtons.length && get_template_1.default({
        selector: types_1.Selector.footer
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
            closeBarBackButtonContainer.dataset[types_1.DataAttribute.backButtonContainer] = nothing;
            closeBarBackButtonContainerElements.forEach(currentElement => currentElement && closeBarBackButtonContainer.appendChild(currentElement));
            closeBarBackButtonContainer.children.length && closeBar.appendChild(closeBarBackButtonContainer);
        }
        closeBar.slot = types_1.SlotName.closeBar;
    }
    if (cover) {
        cover.slot = types_1.SlotName.cover;
    }
    if (hiddenCover) {
        hiddenCover.dataset[types_1.DataAttribute.hiddenCover] = nothing;
    }
    if (articleContainer) {
        articleContainer.dataset[types_1.DataAttribute.articleContainer] = nothing;
    }
    if (heading) {
        heading.dataset[types_1.DataAttribute.heading] = nothing;
    }
    if (paragraphSection) {
        paragraphSection.dataset[types_1.DataAttribute.paragraphs] = nothing;
        paragraphs.forEach(paragraph => paragraphSection.appendChild(paragraph));
    }
    if (footer && socialMediaButtons) {
        footer.dataset.socialMedia = nothing;
        socialMediaButtons.forEach(socialMediaButton => socialMediaButton && footer.appendChild(socialMediaButton));
    }
    headingElements.forEach(headingElement => headingElement && heading && heading.appendChild(headingElement));
    articleContainer && articleContainerElements.forEach(articleContainerElement => articleContainerElement && articleContainer.appendChild(articleContainerElement));
    socialMediaButtons && socialMediaButtons.forEach(socialMediaButton => socialMediaButton.slot = types_1.SlotName.socialMediaButton);
    if (article) {
        article.addEventListener('scroll', event => handle_article_scroll_1.default({ article }));
        articleElements.forEach(articleElement => articleElement && article.appendChild(articleElement));
    }
    elements.forEach(currentElement => currentElement && element.appendChild(currentElement));
    setup_article_1.default({ element });
}
exports.default = default_1;
//# sourceMappingURL=load-article.js.map