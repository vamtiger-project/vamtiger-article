"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const chai_1 = require("chai");
const vamtiger_copy_file_1 = require("vamtiger-copy-file");
const vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
const buildFolder = path_1.resolve(__dirname, '..');
const testHtmlSource = path_1.resolve(__dirname, '../../source/test/html/test.html');
const testHtmlDestination = path_1.resolve(__dirname, '../index.html');
const testCssSource = path_1.resolve(__dirname, '../../source/test/html/test.css');
const testCssDestination = path_1.resolve(__dirname, '../test.css');
const articleSource = path_1.resolve(__dirname, '../../source/test/html/article.html');
const articleDestination = path_1.resolve(__dirname, '../article.html');
const backSource = path_1.resolve(__dirname, '../../source/test/html/back.svg');
const backDestination = path_1.resolve(__dirname, '../back.svg');
describe('Generate', function () {
    before(async function () {
        await Promise.all([
            vamtiger_copy_file_1.default({
                source: testHtmlSource,
                destination: testHtmlDestination
            }),
            vamtiger_copy_file_1.default({
                source: testCssSource,
                destination: testCssDestination
            }),
            vamtiger_copy_file_1.default({
                source: articleSource,
                destination: articleDestination
            }),
            vamtiger_copy_file_1.default({
                source: backSource,
                destination: backDestination
            })
        ]);
    });
    it('Test Preview', async function () {
        const folderContent = await vamtiger_get_directory_content_1.default(buildFolder)
            .then(result => new Set(result));
        chai_1.expect(folderContent.has(path_1.basename(testHtmlDestination))).to.be.true;
    });
});
//# sourceMappingURL=generate.js.map