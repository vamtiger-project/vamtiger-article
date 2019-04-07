import defineCustomElement from '../node_modules/vamtiger-browser-method/source/define-custom-element';
import VamtigerCoverFigure, { name as VamtigerCoverFigureName } from '../node_modules/vamtiger-cover-figure/source/element';
import VamtigerSocialMediaButton, { name as VamtigerSocialMediaButtonName } from '../node_modules/vamtiger-social-media-button/source/element';
import VamtigerSocialMediaIcon, { name as VamtigerSocialMediaIconName} from '../node_modules/vamtiger-social-media-icon/source/element';
import constructor, { name } from './element';

const params = [
    {
        name: VamtigerCoverFigureName,
        constructor: VamtigerCoverFigure
    },
    {
        name: VamtigerSocialMediaIconName,
        constructor: VamtigerSocialMediaIcon
    },
    {
        name: VamtigerSocialMediaButtonName,
        constructor: VamtigerSocialMediaButton
    },
    {
        name,
        constructor
    }
];

params.forEach(currentParams => defineCustomElement(currentParams));