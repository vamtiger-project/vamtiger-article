import {
    IHandleArticleScroll,
    CustomProperty,
    Selector,
    Visibility
} from './types';

const { ceil: roundUp } = Math;
const { visible } = Visibility;

export default async function ({ article }: IHandleArticleScroll) {
    const { documentElement } = document;
    const {
        scrollTop,
        parentElement: element
    } = article;
    const articleContainer = article.querySelector<HTMLElement>(Selector.articleContainer);
    const coverCaption = element && element.querySelector<HTMLElement>(Selector.coverCaption);
    const closeBar = element && element.querySelector<HTMLElement>(Selector.closeBar);
    const {
        top: articleContainerTop
    } = articleContainer && articleContainer.getBoundingClientRect() || {} as DOMRect;
    const {
        top: coverCaptionTop,
        bottom: coverCaptionBottom,
        height: coverCaptionHeight
    } = coverCaption && coverCaption.getBoundingClientRect() || {} as DOMRect;
    const {
        bottom: closeBarBottom,
        height: closeBarHeight
    } = closeBar && closeBar.getBoundingClientRect() || {} as DOMRect;
    const coverCaptionOpacity = !scrollTop  && 1
        || coverCaptionBottom >= articleContainerTop
           && coverCaptionTop <= articleContainerTop
           && ((articleContainerTop - coverCaptionTop)/coverCaptionHeight);
    const currentCloseBarBottom = Number(documentElement.style.getPropertyValue(CustomProperty.closeBarBottom));
    const closeBarTranslateY = (roundUp(articleContainerTop) >= currentCloseBarBottom  && (-1 * closeBarHeight)
        || 0).toString();
    const scrollOffset = `${scrollTop * -1}`;

    if (coverCaptionOpacity) {
        documentElement.style.setProperty(CustomProperty.coverCaptionOpacity, coverCaptionOpacity.toFixed(2));
    }

    if (closeBarTranslateY) {
        documentElement.style.setProperty(CustomProperty.closeBarVisibility, visible);

        documentElement.style.setProperty(CustomProperty.closeBarTranslateY, closeBarTranslateY.toString());
    }

    if (scrollOffset) {
        documentElement.style.setProperty(CustomProperty.scrollOffset, scrollOffset);
    }
}