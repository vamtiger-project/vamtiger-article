import { ObservedAttribute } from './types';
export declare const name = "vamtiger-article";
export default class VamtigerArticle extends HTMLElement {
    constructor();
    static readonly observedAttributes: never[];
    connectedCallback(): Promise<void>;
    disconnectedCallback(): Promise<void>;
    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string): void;
}
