import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    Selector
} from './types';
import getTemplate from './get-template';
import { name as namePrefix } from './element';

export default async function () {
    const customPropertyStyle = getTemplate({
        selector: Selector.customPropertyStyle
    });
    const name = `${namePrefix}-custom-property-style`
    const css = customPropertyStyle && customPropertyStyle.innerHTML;

    name && css && await loadScript({ name, css });
}