"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["space"] = " ";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var Selector;
(function (Selector) {
    Selector["shadowStyle"] = "style[data-shadow-style]";
    Selector["customPropertyStyle"] = "style[data-custom-property-style]";
    Selector["slot"] = "slot";
    Selector["div"] = "div";
    Selector["span"] = "span";
    Selector["article"] = "article";
    Selector["section"] = "section";
    Selector["header"] = "header";
    Selector["footer"] = "footer";
    Selector["closeBar"] = "[data-close-bar]";
    Selector["cover"] = "article > vamtiger-cover-figure";
    Selector["coverCaption"] = "vamtiger-cover-figure [data-image-caption]";
    Selector["articleContainer"] = "[data-article-container]";
    Selector["headingTitle"] = "article > header > h1";
    Selector["headingSubtitle"] = "article > header > h2";
    Selector["paragraph"] = "article > p";
    Selector["backIcon"] = "svg[data-back-button-icon]";
    Selector["backButtonCaption"] = "[data-back-button-caption]";
    Selector["socialMediaButton"] = "vamtiger-social-media-button";
})(Selector = exports.Selector || (exports.Selector = {}));
var DataAttribute;
(function (DataAttribute) {
    DataAttribute["hiddenCover"] = "hiddenCover";
    DataAttribute["articleContainer"] = "articleContainer";
    DataAttribute["heading"] = "heading";
    DataAttribute["paragraphs"] = "paragraphs";
    DataAttribute["backButton"] = "backButton";
    DataAttribute["backButtonContainer"] = "backButtonContainer";
    DataAttribute["socialMedia"] = "socialMedia";
})(DataAttribute = exports.DataAttribute || (exports.DataAttribute = {}));
var SlotName;
(function (SlotName) {
    SlotName["cover"] = "cover";
    SlotName["closeBar"] = "close-bar";
    SlotName["socialMediaButton"] = "social-media-button";
})(SlotName = exports.SlotName || (exports.SlotName = {}));
var CustomProperty;
(function (CustomProperty) {
    CustomProperty["scrollOffset"] = "--vamtiger-article-scroll-offset";
    CustomProperty["coverCaptionOpacity"] = "--vamtiger-article-scroll-offset-cover-caption-opacity";
    CustomProperty["closeBarVisibility"] = "--vamtiger-article-close-bar-visibility";
    CustomProperty["closeBarTranslateY"] = "--vamtiger-article-close-bar-translate-y";
    CustomProperty["closeBarBottom"] = "--vamtiger-close-bar-bottom";
    CustomProperty["closeBarZIndex"] = "--vamtiger-article-close-bar-z-index";
    CustomProperty["socialMediaGridTemplateAreas"] = "--vamtiger-article-social-media-grid-template-areas";
})(CustomProperty = exports.CustomProperty || (exports.CustomProperty = {}));
var GridTemplateArea;
(function (GridTemplateArea) {
    GridTemplateArea["socialMediaButton"] = "socialMediaButton";
})(GridTemplateArea = exports.GridTemplateArea || (exports.GridTemplateArea = {}));
var Caption;
(function (Caption) {
    Caption["back"] = "back";
})(Caption = exports.Caption || (exports.Caption = {}));
var Visibility;
(function (Visibility) {
    Visibility["visible"] = "visible";
    Visibility["hidden"] = "hidden";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
var ObservedAttributes;
(function (ObservedAttributes) {
})(ObservedAttributes = exports.ObservedAttributes || (exports.ObservedAttributes = {}));
//# sourceMappingURL=types.js.map