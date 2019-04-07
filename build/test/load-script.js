"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_script_1 = require("../../node_modules/vamtiger-browser-method/source/load-script");
const chai_1 = require("chai");
exports.default = () => describe('vamtiger-article', function () {
    before(async function () {
        await load_script_1.default({
            src: 'vamtiger-article.js'
        });
    });
    it('load script', async function () {
        const script = document.head.querySelector('[src="vamtiger-article.js"]');
        chai_1.expect(script instanceof HTMLScriptElement).to.be.true;
    });
});
//# sourceMappingURL=load-script.js.map