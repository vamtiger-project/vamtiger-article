import {
    ISetupArticle,
    Selector,
    CustomProperty,
    Visibility
} from './types';
import handleClose from './handle-close';

const closeBarZIndex = 3;

export default function ({ element }: ISetupArticle) {
    const { documentElement } = document;
    const articleContainer = element.querySelector<HTMLElement>(Selector.articleContainer);
    const closeBar = element && element.querySelector<HTMLElement>(Selector.closeBar);
    const {
        top: articleContainerTop
    } = articleContainer && articleContainer.getBoundingClientRect() || {} as DOMRect;
    const {
        bottom: closeBarBottom,
        height: closeBarHeight
    } = closeBar && closeBar.getBoundingClientRect() || {} as DOMRect;
    const closeBarTranslateY = (articleContainerTop > closeBarBottom && (-1 * closeBarHeight)
        || 0).toString();

    if (closeBarTranslateY) {
        documentElement.style.setProperty(CustomProperty.closeBarTranslateY, closeBarTranslateY.toString());
    }

    if (closeBar) {
        closeBar.addEventListener('click', event => handleClose({ element }));
    }

    documentElement.style.setProperty(CustomProperty.closeBarZIndex, closeBarZIndex.toString());
    documentElement.style.setProperty(CustomProperty.closeBarBottom, closeBarBottom.toString());
}