"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const handle_close_1 = require("./handle-close");
const closeBarZIndex = 3;
function default_1({ element }) {
    const { documentElement } = document;
    const articleContainer = element.querySelector(types_1.Selector.articleContainer);
    const closeBar = element && element.querySelector(types_1.Selector.closeBar);
    const { top: articleContainerTop } = articleContainer && articleContainer.getBoundingClientRect() || {};
    const { bottom: closeBarBottom, height: closeBarHeight } = closeBar && closeBar.getBoundingClientRect() || {};
    const closeBarTranslateY = (articleContainerTop > closeBarBottom && (-1 * closeBarHeight)
        || 0).toString();
    if (closeBarTranslateY) {
        documentElement.style.setProperty(types_1.CustomProperty.closeBarTranslateY, closeBarTranslateY.toString());
    }
    if (closeBar) {
        closeBar.addEventListener('click', event => handle_close_1.default({ element }));
    }
    documentElement.style.setProperty(types_1.CustomProperty.closeBarZIndex, closeBarZIndex.toString());
    documentElement.style.setProperty(types_1.CustomProperty.closeBarBottom, closeBarBottom.toString());
}
exports.default = default_1;
//# sourceMappingURL=setup-article.js.map