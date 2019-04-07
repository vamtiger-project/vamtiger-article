import VamtigerArticle from './element';
export declare enum StringConstant {
    nothing = "",
    space = " "
}
export declare enum Selector {
    shadowStyle = "style[data-shadow-style]",
    customPropertyStyle = "style[data-custom-property-style]",
    slot = "slot",
    div = "div",
    span = "span",
    article = "article",
    section = "section",
    header = "header",
    footer = "footer",
    closeBar = "[data-close-bar]",
    cover = "article > vamtiger-cover-figure",
    coverCaption = "vamtiger-cover-figure [data-image-caption]",
    articleContainer = "[data-article-container]",
    headingTitle = "article > header > h1",
    headingSubtitle = "article > header > h2",
    paragraph = "article > p",
    backIcon = "svg[data-back-button-icon]",
    backButtonCaption = "[data-back-button-caption]",
    socialMediaButton = "vamtiger-social-media-button"
}
export declare enum DataAttribute {
    hiddenCover = "hiddenCover",
    articleContainer = "articleContainer",
    heading = "heading",
    paragraphs = "paragraphs",
    backButton = "backButton",
    backButtonContainer = "backButtonContainer",
    socialMedia = "socialMedia"
}
export declare enum SlotName {
    cover = "cover",
    closeBar = "close-bar",
    socialMediaButton = "social-media-button"
}
export declare enum CustomProperty {
    scrollOffset = "--vamtiger-article-scroll-offset",
    coverCaptionOpacity = "--vamtiger-article-scroll-offset-cover-caption-opacity",
    closeBarVisibility = "--vamtiger-article-close-bar-visibility",
    closeBarTranslateY = "--vamtiger-article-close-bar-translate-y",
    closeBarBottom = "--vamtiger-close-bar-bottom",
    closeBarZIndex = "--vamtiger-article-close-bar-z-index",
    socialMediaGridTemplateAreas = "--vamtiger-article-social-media-grid-template-areas"
}
export declare enum GridTemplateArea {
    socialMediaButton = "socialMediaButton"
}
export declare enum Caption {
    back = "back"
}
export declare enum Visibility {
    visible = "visible",
    hidden = "hidden"
}
export declare enum ObservedAttributes {
}
export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}
export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
}
export interface IProperties {
    innerHTML?: string;
    name?: string;
}
export interface ILoadArticle {
    element: VamtigerArticle;
}
export interface IDataset extends DOMStringMap {
    article: string;
    articleParagraphs?: string;
}
export interface IHandleArticleScroll {
    article: HTMLElement;
}
export interface ISetupArticle {
    element: VamtigerArticle;
}
export interface IHandleClose {
    element: VamtigerArticle;
}
export declare type AttributesKey = keyof IAttributes;
export declare type ObservedAttribute = keyof typeof ObservedAttributes;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.shadowStyle | Selector.customPropertyStyle ? HTMLStyleElement : P['selector'] extends Selector.slot ? HTMLSlotElement : P['selector'] extends Selector.div ? HTMLDivElement : P['selector'] extends Selector.backButtonCaption ? HTMLSpanElement : P['selector'] extends Selector.article | Selector.section | Selector.header | Selector.footer ? HTMLElement : P['selector'] extends Selector.backIcon ? SVGElement : null;
