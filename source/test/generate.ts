import { resolve as resolvePath, basename } from 'path';
import { expect } from 'chai';
import copyFile from 'vamtiger-copy-file';
import getFolderContent from 'vamtiger-get-directory-content';

const buildFolder = resolvePath(
    __dirname,
    '..'
);
const testHtmlSource = resolvePath(
    __dirname,
    '../../source/test/html/test.html'
);
const testHtmlDestination = resolvePath(
    __dirname,
    '../index.html'
);
const testCssSource = resolvePath(
    __dirname,
    '../../source/test/html/test.css'
);
const testCssDestination = resolvePath(
    __dirname,
    '../test.css'
);
const articleSource = resolvePath(
    __dirname,
    '../../source/test/html/article.html'
);
const articleDestination = resolvePath(
    __dirname,
    '../article.html'
);
const backSource = resolvePath(
    __dirname,
    '../../source/test/html/back.svg'
);
const backDestination = resolvePath(
    __dirname,
    '../back.svg'
);

describe('Generate', function () {
    before(async function () {
        await Promise.all([
            copyFile({
                source: testHtmlSource,
                destination: testHtmlDestination
            }),
            copyFile({
                source: testCssSource,
                destination: testCssDestination
            }),
            copyFile({
                source: articleSource,
                destination: articleDestination
            }),
            copyFile({
                source: backSource,
                destination: backDestination
            })
        ]);
    });

    it('Test Preview', async function() {
        const folderContent = await getFolderContent(buildFolder)
            .then(result => new Set(result));

        expect(folderContent.has(basename(testHtmlDestination))).to.be.true;
    })
});