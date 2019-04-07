import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    Selector,
    ObservedAttribute,
    SlotName
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import loadArticle from './load-article';
import loadCustomPropertyStyle from './load-custom-property-style';

export const name = 'vamtiger-article';

loadScript({ name, css })
    .then(loadCustomPropertyStyle)
    .catch(console.error);

export default class VamtigerArticle extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.shadowStyle
        });
        const slot = getTemplate({
            selector: Selector.slot,
            properties: {
                name
            }
        });
        const coverSlot = getTemplate({
            selector: Selector.slot,
            properties: {
                name: SlotName.cover
            }
        });
        const closeBarSlot = getTemplate({
            selector: Selector.slot,
            properties: {
                name: SlotName.closeBar
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
        return observedAttributes;
    }

    async connectedCallback() {
        const element = this;

        await loadArticle({ element });
    }

    async disconnectedCallback() {

    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}