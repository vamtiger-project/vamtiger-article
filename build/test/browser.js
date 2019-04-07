!function(e,t){"use strict";var n,o,s,r,a,i,c,l,d,m;!function(e){e.jsonld="application/ld+json"}(n||(n={})),function(e){e.type="type"}(o||(o={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(s||(s={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector"}(r||(r={})),function(e){e.nothing="",e.slash="/",e.dash="-"}(a||(a={})),function(e){e.div="div"}(i||(i={})),function(e){e.stylesheet="stylesheet"}(c||(c={})),function(e){e.script="script",e.link="link",e.style="style"}(l||(l={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]'}(d||(d={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(m||(m={}));const p={showRootHost:/:{1,2}host/gm,dash:new RegExp(a.dash,"g"),space:/\s/g,nonWord:/\W+/g},{nothing:u}=a;const{nothing:y}=a,{nonWord:f}=p;var h=e=>e.split(f).map((e,t)=>!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()).join(y);const{showRootHost:E}=p,{nothing:w}=a;function g({css:e,stylesheetName:t=w,hostName:n=w}){const o=function({selector:e=u,properties:t={},dataset:n={},attributes:o={}}){const{id:s}=t,{head:r}=document,a=r.querySelector(d.lastMetaElement),i=Object.keys(o),c=s&&(window[s]||e&&r.querySelector(e)),l=!c&&document.createElement("meta"),m=c||l;return l&&(Object.assign(l,t),Object.assign(l.dataset,n),a&&a.nextElementSibling?r.insertBefore(l,a.nextElementSibling):r.appendChild(l)),i.forEach(e=>!m.hasAttribute(e)&&m.setAttribute(void 0,o[e])),m}({properties:{id:m.loadElementQueryCss}}),s=h(t),{dataset:r}=o,a=!r.hasOwnProperty(n)&&n&&e.replace(E,n)||e,{EQCSS:i}=window;a&&i&&(i.register(i.parse(a)),s?r[s]=w:n&&(r[n]=w))}const{failedToLoadScript:L}=r,{stylesheet:S}=c,{script:v,link:b,style:T}=l;t.setup("bdd"),(()=>describe("vamtiger-article",function(){before(async function(){await(e=>new Promise((t,s)=>{const{head:r,body:a}=document,{js:i,name:c,jsonld:l,removeFromDom:d}=e,{src:m}=e,{css:p,name:u}=e,{href:y}=e,f=e.hasOwnProperty("src")||e.hasOwnProperty("href"),h=(i||m)&&v||p&&T||y&&b,E=m&&`script[src="${m}"]`||y&&`link[href="${y}"]`||i&&c&&`script[data-name="${c}"]`||p&&u&&`style[data-name="${u}"]`,w=r.querySelector(E)||a.querySelector(E),j=E&&h&&document.createElement(h);function C(){j&&(H(),d&&r.removeChild(j),t(j))}function N(e){H(),console.error(e),s(new Error(`${L}`))}function H(){j&&(j.removeEventListener("load",C),j.removeEventListener("error",N))}j instanceof HTMLScriptElement?m?j.src=m:i&&(j.innerHTML=i,j.dataset.name=c,l&&j.setAttribute(o.type,n.jsonld)):j instanceof HTMLLinkElement?(j.rel=S,j.href=y):j instanceof HTMLStyleElement&&(j.innerHTML=p,j.dataset.name=u,g({css:p,stylesheetName:u})),w?t(w):j&&(j.addEventListener("load",C),j.addEventListener("error",N),r.appendChild(j),f||C())}))({src:"vamtiger-article.js"})}),it("load script",async function(){const t=document.head.querySelector('[src="vamtiger-article.js"]');e.expect(t instanceof HTMLScriptElement).to.be.true})}))(),t.run()}(chai,mocha);
//# sourceMappingURL=browser.js.map
