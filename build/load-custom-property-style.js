"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_script_1 = require("../node_modules/vamtiger-browser-method/source/load-script");
const types_1 = require("./types");
const get_template_1 = require("./get-template");
const element_1 = require("./element");
async function default_1() {
    const customPropertyStyle = get_template_1.default({
        selector: types_1.Selector.customPropertyStyle
    });
    const name = `${element_1.name}-custom-property-style`;
    const css = customPropertyStyle && customPropertyStyle.innerHTML;
    name && css && await load_script_1.default({ name, css });
}
exports.default = default_1;
//# sourceMappingURL=load-custom-property-style.js.map