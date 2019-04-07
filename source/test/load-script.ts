import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

export default () => describe('vamtiger-article', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-article.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-article.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});