"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_script_1 = require("../node_modules/vamtiger-browser-method/source/load-script");
const types_1 = require("./types");
const config_1 = require("./config");
const document_index_1 = require("./css/document-index");
const get_template_1 = require("./get-template");
const load_article_1 = require("./load-article");
const load_custom_property_style_1 = require("./load-custom-property-style");
exports.name = 'vamtiger-article';
load_script_1.default({ name: exports.name, css: document_index_1.default })
    .then(load_custom_property_style_1.default)
    .catch(console.error);
class VamtigerArticle extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow(config_1.shadowRoot);
        const stylesheet = get_template_1.default({
            selector: types_1.Selector.shadowStyle
        });
        const slot = get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: exports.name
            }
        });
        const coverSlot = get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: types_1.SlotName.cover
            }
        });
        const closeBarSlot = get_template_1.default({
            selector: types_1.Selector.slot,
            properties: {
                name: types_1.SlotName.closeBar
            }
        });
        const elements = [
            stylesheet,
            closeBarSlot,
            coverSlot,
            slot
        ];
        elements.forEach(element => element && shadowRoot.appendChild(element));
    }
    static get observedAttributes() {
        return config_1.observedAttributes;
    }
    async connectedCallback() {
        const element = this;
        await load_article_1.default({ element });
    }
    async disconnectedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
}
exports.default = VamtigerArticle;
//# sourceMappingURL=element.js.map