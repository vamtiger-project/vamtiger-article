"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const { ceil: roundUp } = Math;
const { visible } = types_1.Visibility;
async function default_1({ article }) {
    const { documentElement } = document;
    const { scrollTop, parentElement: element } = article;
    const articleContainer = article.querySelector(types_1.Selector.articleContainer);
    const coverCaption = element && element.querySelector(types_1.Selector.coverCaption);
    const closeBar = element && element.querySelector(types_1.Selector.closeBar);
    const { top: articleContainerTop } = articleContainer && articleContainer.getBoundingClientRect() || {};
    const { top: coverCaptionTop, bottom: coverCaptionBottom, height: coverCaptionHeight } = coverCaption && coverCaption.getBoundingClientRect() || {};
    const { bottom: closeBarBottom, height: closeBarHeight } = closeBar && closeBar.getBoundingClientRect() || {};
    const coverCaptionOpacity = !scrollTop && 1
        || coverCaptionBottom >= articleContainerTop
            && coverCaptionTop <= articleContainerTop
            && ((articleContainerTop - coverCaptionTop) / coverCaptionHeight);
    const currentCloseBarBottom = Number(documentElement.style.getPropertyValue(types_1.CustomProperty.closeBarBottom));
    const closeBarTranslateY = (roundUp(articleContainerTop) >= currentCloseBarBottom && (-1 * closeBarHeight)
        || 0).toString();
    const scrollOffset = `${scrollTop * -1}`;
    if (coverCaptionOpacity) {
        documentElement.style.setProperty(types_1.CustomProperty.coverCaptionOpacity, coverCaptionOpacity.toFixed(2));
    }
    if (closeBarTranslateY) {
        documentElement.style.setProperty(types_1.CustomProperty.closeBarVisibility, visible);
        documentElement.style.setProperty(types_1.CustomProperty.closeBarTranslateY, closeBarTranslateY.toString());
    }
    if (scrollOffset) {
        documentElement.style.setProperty(types_1.CustomProperty.scrollOffset, scrollOffset);
    }
}
exports.default = default_1;
//# sourceMappingURL=handle-article-scroll.js.map