(self.webpackChunkvmbo2022=self.webpackChunkvmbo2022||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,l="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var o,c,s,u;if(Array.isArray(e)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(!a(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((o=e.length)!=i.length)return!1;for(c=o;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((o=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=o;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=o;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!a(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,l=n(7294),a=(r=l)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function l(){return e.apply(this,arguments)||this}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,l.peek=function(){return c},l.rewind=function(){if(l.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=l.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},l}(l.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",o),f}}},2450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=f;var r=o(n(7294)),l=n(5444),a=o(n(5697)),i=n(9650);function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){var t=e.to,n=e.title,a=e.children,o=e.className,c=e.stripHash,u=void 0!==c&&c,f=e.gatsbyLinkProps,m=void 0===f?{}:f,p=e.onAnchorLinkClick,d=u?i.handleStrippedLinkClick:i.handleLinkClick,h=s(s({},m),{},{to:u?(0,i.stripHashedLocation)(t):t,onClick:function(e){return d(t,e,p)}});return n&&(h.title=n),o&&(h.className=o),r.default.createElement(l.Link,h,a||n)}f.propTypes={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,gatsbyLinkProps:a.default.object,onAnchorLinkClick:a.default.func,children:a.default.node}},9869:function(e,t,n){"use strict";Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n(2450)},5881:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),l=n(5444),a=n(9869);function i(){return r.createElement("header",null,r.createElement("div",{className:"navbar"},r.createElement(l.Link,{to:"/",className:"logo"},"VMBO 2022"),r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(a.P,{to:"/#proceedings",title:"Proceedings",className:"stripped",stripHash:!0})),r.createElement("li",null,r.createElement(a.P,{to:"/#program",title:"Program",className:"stripped",stripHash:!0})),r.createElement("li",null,r.createElement(a.P,{to:"/#organization",title:"Organization",className:"stripped",stripHash:!0})),r.createElement("li",null,r.createElement(a.P,{to:"/#previous",title:"Previous Editions",className:"stripped",stripHash:!0}))))))}var o=n(6125);function c(e){var t=e.children;return r.createElement("div",{className:"layout"},r.createElement(i,null),r.createElement(o.S,{className:"banner",src:"../images/banner.jpeg",alt:"Banner",layout:"fullWidth",placeholder:"blurred",aspectRatio:3.2,__imageData:n(2315)}),r.createElement("div",{className:"content"},t),r.createElement("footer",null,r.createElement("p",null,"Website created by Dr. Tiago Prince Sales.")))}},1545:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var r,l,a,i,o=n(7294),c=n(5697),s=n.n(c),u=n(4839),f=n.n(u),m=n(2993),p=n.n(m),d=n(6494),h=n.n(d),A="bodyAttributes",E="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(b).map((function(e){return b[e]})),"charset"),v="cssText",w="href",T="http-equiv",O="innerHTML",C="itemprop",S="name",k="property",B="rel",j="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",L="defer",I="encodeSpecialCharacters",x="onChangeClientState",R="titleTemplate",D=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),V=[b.NOSCRIPT,b.SCRIPT,b.STYLE],U="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,b.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,N);return t||r||void 0},J=function(e){return X(e,x)||function(){}},q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),l=0;l<r.length;l++){var a=r[l].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var l={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var o=a[i],c=o.toLowerCase();-1===t.indexOf(c)||n===B&&"canonical"===e[n].toLowerCase()||c===B&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(o)||o!==O&&o!==v&&o!==C||(n=o)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),l[n]||(l[n]={}),!r[n][s]&&(l[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(l),i=0;i<a.length;i++){var o=a[i],c=h()({},r[o],l[o]);r[o]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},le=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,l=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;ce(b.BODY,r),ce(b.HTML,l),oe(f,m);var p={baseTag:se(b.BASE,n),linkTags:se(b.LINK,a),metaTags:se(b.META,i),noscriptTags:se(b.NOSCRIPT,o),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(b.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),l=r?r.split(","):[],a=[].concat(l),i=Object.keys(t),o=0;o<i.length;o++){var c=i[o],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===l.indexOf(c)&&l.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);l.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),l=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var o=void 0===t[r]?"":t[r];n.setAttribute(r,o)}n.setAttribute(U,"true"),l.some((function(e,t){return i=t,n.isEqualNode(e)}))?l.splice(i,1):a.push(n)})),l.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:l,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,l=fe(n,r),[o.createElement(b.TITLE,l,e)];var e,n,r,l},toString:function(){return function(e,t,n,r){var l=ue(n),a=ie(t);return l?"<"+e+' data-react-helmet="true" '+l+">"+F(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case E:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,l=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===O||n===v){var r=t.innerHTML||t.cssText;l.dangerouslySetInnerHTML={__html:r}}else l[n]=t[e]})),o.createElement(e,l)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var l=Object.keys(r).filter((function(e){return!(e===O||e===v)})).reduce((function(e,t){var l=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+l:l}),""),a=r.innerHTML||r.cssText||"",i=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+l+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,l=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(b.BASE,t,r),bodyAttributes:me(A,n,r),htmlAttributes:me(E,l,r),link:me(b.LINK,a,r),meta:me(b.META,i,r),noscript:me(b.NOSCRIPT,o,r),script:me(b.SCRIPT,c,r),style:me(b.STYLE,s,r),title:me(b.TITLE,{title:f,titleAttributes:m},r)}},de=f()((function(e){return{baseTag:K([w,P],e),bodyAttributes:q(A,e),defer:X(e,L),encode:X(e,I),htmlAttributes:q(E,e),linkTags:Z(b.LINK,[B,w],e),metaTags:Z(b.META,[S,y,T,k,C],e),noscriptTags:Z(b.NOSCRIPT,[O],e),onChangeClientState:J(e),scriptTags:Z(b.SCRIPT,[j,O],e),styleTags:Z(b.STYLE,[v],e),title:W(e),titleAttributes:q(g,e)}}),(function(e){le&&ne(le),e.defer?le=te((function(){ae(e,(function(){le=null}))})):(ae(e),le=null)}),pe)((function(){return null})),he=(l=de,i=a=function(e){function t(){return _(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,l=e.newChildProps,a=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},l,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,l=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return Y({},l,((t={})[r.type]=i,t.titleAttributes=Y({},a),t));case b.BODY:return Y({},l,{bodyAttributes:Y({},a)});case b.HTML:return Y({},l,{htmlAttributes:Y({},a)})}return Y({},l,((n={})[r.type]=Y({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var l=e.props,a=l.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(l,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(l,r)},H(t,null,[{key:"canUseDOM",set:function(e){l.canUseDOM=e}}]),t}(o.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=l.peek,a.rewind=function(){var e=l.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var Ae=n(5881);function Ee(){return o.createElement(Ae.Z,null,o.createElement(he,null,o.createElement("meta",{charSet:"utf-8"}),o.createElement("title",null,"VMBO 2022"),o.createElement("meta",{name:"description",content:"16th International Workshop on Value Modelling and Business Ontologies"}),o.createElement("link",{rel:"canonical",href:"http://vmbo2022.github.io"})),o.createElement("section",null,o.createElement("div",null,o.createElement("h1",null,"16th International Workshop on Value Modelling and Business Ontologies"),o.createElement("p",{className:"subtitle"},"In conjunction with the"," ",o.createElement("a",{href:"https://caise22.ugent.be/"},"34th International Conference on Advanced Information Systems Engineering (CAiSE 2022)"),", Leuven, Belgium, 06-10 June, 2022."),o.createElement("h2",{id:"proceedings"},"Proceedings"),o.createElement("p",null,"Proceedings are openly available at ",o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/"},"http://ceur-ws.org/Vol-3155/")," "),o.createElement("h2",{id:"venue"},"Venue"),o.createElement("p",null,"The workshop will be held at:"),o.createElement("a",{href:"https://goo.gl/maps/Foywh4bfuxkqapGQ8"},"Room 1.15",o.createElement("br",null),"Maria-Theresiacollege, Leuven Campus, KU Leuven",o.createElement("br",null),"Sint-Michielsstraat 6, 3000 Leuven, Belgium"),o.createElement("h2",{id:"registration"},"Registration"),o.createElement("p",null,"You can register for VMBO 2022 at the ",o.createElement("a",{href:"https://caise22.ugent.be/register/"},"registration page")," of the 34th International Conference on Advanced Information Systems Engineering (CAiSE 2022)."),o.createElement("h2",{id:"program"},"Program"),o.createElement("div",null,o.createElement("h4",null,"Session 1 "),o.createElement("p",null,"09:30-10:30"),o.createElement("ul",null,o.createElement("li",null,"Opening"),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,"Accounting Contracts in Collaboration Space")),o.createElement("div",null,"Jonas Sveistrup Søgaard, William E. McCarthy, Lasse Herskind, and G. Ken Holman")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/poster1.pdf",target:"_blank",rel:"noreferrer"},"Object oriented REA using DBQUITY"))),o.createElement("div",null,"Jesper Kiehn and Lars Hammer")))),o.createElement("div",null,o.createElement("h4",null,"Session 2: Ontologies"),o.createElement("p",null,"11:00-12:30"),o.createElement("ul",null,o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/paper1.pdf",target:"_blank",rel:"noreferrer"},"An Ontological Analysis of Justice"))),o.createElement("div",null,"Paul Johannesson, Helena Zhemchugova, and Susanne Hanger-Kopp")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/short4.pdf",target:"_blank",rel:"noreferrer"},"A Preliminary Comment on Amaral’s, Sales’s, and Guizzardi’s “Towards an Ontology Network in Finance and Economics”"))),o.createElement("div",null,"Ivars Blums and Hans Weigand")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/short5.pdf",target:"_blank",rel:"noreferrer"},"Information Entities and Artifact Ontology"))),o.createElement("div",null,"Hans Weigand and Paul Johannesson")))),o.createElement("div",null,o.createElement("h4",null,"Session 3: Accounting Concepts"),o.createElement("p",null,"14:00-15:30"),o.createElement("ul",null,o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/short1.pdf",target:"_blank",rel:"noreferrer"},"Claims Debt and Equity in REA with FIBO Extensions"))),o.createElement("div",null,"Robert Nehmer, Michael Bennett, and Maxwell Gillmore")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/short2.pdf",target:"_blank",rel:"noreferrer"},"The Metaphysics of Internal Controls"))),o.createElement("div",null,"Graham Gal")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/short3.pdf",target:"_blank",rel:"noreferrer"},"Inferences: Integrals and Derivatives"))),o.createElement("div",null,"Graham Gal ")))),o.createElement("div",null,o.createElement("h4",null,"Session 4: Applications"),o.createElement("p",null,"16:00-17:30"),o.createElement("ul",null,o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/paper2.pdf",target:"_blank",rel:"noreferrer"},"Practically Applicable Enterprise Models: A Research Project Toward a User-oriented Design Method"))),o.createElement("div",null,"Merijn van den Oever, Ben Roelens, and Dominik Bork")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/paper3.pdf",target:"_blank",rel:"noreferrer"},"Evaluating Clinical-Care Metadata Share and its FAIRification using the REA Ontology"))),o.createElement("div",null,"Syeda A. Sohail, Faiza A. Bukhsh, Maurice van Keulen, Johannes G. Krabbe, and Pavel Hruby")),o.createElement("li",null,o.createElement("div",null,o.createElement("b",null,o.createElement("a",{href:"http://ceur-ws.org/Vol-3155/poster2.pdf",target:"_blank",rel:"noreferrer"},"No-Code Application Development Using Ontology Weaver"))),o.createElement("div",null,"Christian Vibe Scheller and Pavel Hruby")))),o.createElement("h2",null,"Call for papers"),o.createElement("h3",null,"About"),o.createElement("p",null,"The importance of modeling the essence of enterprises on a level that abstracts from operational details is increasingly recognized. Two established enterprise modeling approaches are value modeling and business ontology. Value modeling is a business modeling approach that focuses on the value objects exchanged in business networks. Business ontology provides abstract descriptions of enterprises in their business context, focusing on what is needed to create and transfer value. Research in these fields is conducted using instruments like the REA Ontology (Resources, Events, Agents), the Unified Foundational Ontology (UFO), the Business Model Canvas, the e3value toolset, the Value Delivery Modeling Language (VDML), and the Enterprise Engineering framework."),o.createElement("p",null,"The goal of the VMBO workshop series is two-fold:"),o.createElement("ul",null,o.createElement("li",null,"to bring together researchers with an interest in value modeling and business ontology to present and discuss the current state of the art"),o.createElement("li",null,"to identify key areas for further research")),o.createElement("h3",null,"Topics"),o.createElement("p",null,"Topics of interest include, but are not limited to:"),o.createElement("ul",null,o.createElement("li",null,"Service ontology for business"),o.createElement("li",null,"Service-oriented view of business ontology"),o.createElement("li",null,"Enterprise Engineering"),o.createElement("li",null,"Business modeling of service exchanges"),o.createElement("li",null,"Value modeling fundamentals"),o.createElement("li",null,"Value modeling applications and experiences"),o.createElement("li",null,"Business ontology fundamentals"),o.createElement("li",null,"Business ontology applications and experiences"),o.createElement("li",null,"Role of value modeling in enterprise architecture"),o.createElement("li",null,"Ontology-driven enterprise system development"),o.createElement("li",null,"Ontology-aware enterprise systems"),o.createElement("li",null,"Pragmatic Web – theory and applications"),o.createElement("li",null,"Ontological representations of aggregated data"),o.createElement("li",null,"Business ontology / value models for auditing"),o.createElement("li",null,"Business ontology / value models for managerial decision making"),o.createElement("li",null,"Business ontology / value models for strategy exploration"),o.createElement("li",null,"Business ontology / value models for business process management")),o.createElement("h3",{id:"dates"},"Important Dates"),o.createElement("ul",null,o.createElement("li",null,"Abstract submission: 22 March 2022 AoE"),o.createElement("li",null,"Paper submission: ",o.createElement("s",null,"8 March")," ",o.createElement("s",null,"15 March")," 25 March 2022 AoE"),o.createElement("li",null,"Author notification: ",o.createElement("s",null,"8 April")," 19 April 2022"),o.createElement("li",null,"Camera-ready: ",o.createElement("s",null,"18 April")," 04 May 2022"),o.createElement("li",null,"Workshop: 6 June 2022")),o.createElement("h3",{id:"guidelines"},"Submission Guidelines"),o.createElement("p",null,"Submissions should describe original research ideas or contributions, present problems or challenges encountered in practice, or report on industrial cases and practices."),o.createElement("p",null,"We encourage authors to submit papers for which they would like feedback from other participants of the workshop."),o.createElement("p",null,"Submissions should:"),o.createElement("ul",null,o.createElement("li",null,"Respect the 8-page limit (excluding references)"),o.createElement("li",null,"Be submitted in PDF"),o.createElement("li",null,"Comply with the"," ",o.createElement("a",{href:"https://ceurws.wordpress.com/2020/03/31/ceurws-publishes-ceurart-paper-style/"},"1-column CEUR-ART Style"))),o.createElement("p",null,"When submitting your paper, please select the track"," ",o.createElement("b",null,'"Value Modeling and Business Ontologies"'),"."),o.createElement("div",null,o.createElement("a",{href:"https://easychair.org/conferences/?conf=caise22",class:"button",target:"_blank",rel:"noreferrer"},"Submit a paper")),o.createElement("h3",null,"Publication"),o.createElement("p",null,"Accepted papers will be published with CEUR-WS.org online proceedings, if desired by the authors."),o.createElement("p",null,"We support the submission of VMBO papers afterward to a special issue of a journal, e.g., Journal of Applied Ontology (JAO) or Journal of Emerging Technologies in Accounting (JETA), if possible."),o.createElement("p",null,"Note that submitted papers will be reviewed only marginally. The program committee will use the papers to put together a final program; the aim is to accommodate all relevant papers with sufficient quality."),o.createElement("h3",{id:"organization"},"Organization"),o.createElement("ul",null,o.createElement("li",null,o.createElement("div",null,o.createElement("a",{href:"https://research.tilburguniversity.edu/en/persons/hans-weigand"},"Paul Johannesson"),", KTH Royal Institute of Technology, Sweden"),o.createElement("div",null,"pajo [at] dsv.su.se")),o.createElement("li",null,o.createElement("div",null,o.createElement("a",{href:"https://research.tilburguniversity.edu/en/persons/hans-weigand"},"Hans Weigand"),", Tilburg University, The Netherlands"),o.createElement("div",null,"h.weigand [at] tilburguniversity.edu")),o.createElement("li",null,o.createElement("div",null,o.createElement("a",{href:"https://inf.unibz.it/~tpsales"},"Tiago Prince Sales"),", Free University of Bozen-Bolzano, Italy"),o.createElement("div",null,"tiago.princesales [at] unibz.it"))),o.createElement("h3",null,"Program Committee"),o.createElement("ul",null,o.createElement("li",null,"Ben Roelens – Open University, The Netherlands"),o.createElement("li",null,"Bill McCarthy – Michigan State University, USA"),o.createElement("li",null,"Christian Huemer – TU Wien, Austria"),o.createElement("li",null,"Cristine Griffo – Free University of Bozen-Bolzano, Italy"),o.createElement("li",null,"Daniele Porello – Laboratory for Applied Ontology – ISTC-CNR, Italy"),o.createElement("li",null,"Erik Proper – Luxembourg Institute of Science and Technology, Luxembourg"),o.createElement("li",null,"Frederik Gailly – Ghent University, Belgium"),o.createElement("li",null,"Faiza A. Bukhsh – University of Twente, The Netherlands"),o.createElement("li",null,"Geert Poels – Ghent University, Belgium"),o.createElement("li",null,"Giancarlo Guizzardi – University of Twente, The Netherlands"),o.createElement("li",null,"Graham Gal – University of Massachusetts, USA"),o.createElement("li",null,"Iván Razo-Zapata – Instituto Tecnológico Autónomo de México (ITAM), Mexico"),o.createElement("li",null,"Jaap Gordijn – Vrije Universiteit Amsterdam, The Netherlands"),o.createElement("li",null,"João Paulo A. Almeida – Federal University of Espírito Santo, Brazil"),o.createElement("li",null,"Joris Hulstijn – Tilburg University, The Netherlands"),o.createElement("li",null,"Mike Bennett – Hypercube Limited, UK"),o.createElement("li",null,"Nicola Guarino – Laboratory for Applied Ontology – ISTC-CNR, Italy"),o.createElement("li",null,"Patricio de Alencar Silva – Federal Rural University of the Semi-arid Region, Brazil"),o.createElement("li",null,"Pavel Hruby – DXC Technology, Denmark"),o.createElement("li",null,"Renata S. S. Guizzardi – University of Twente, The Netherlands"),o.createElement("li",null,"Walter Schwaiger – TU Wien, Austria"),o.createElement("li",null,"Wim Laurier – Université Saint-Louis, Belgium"),o.createElement("li",null,"Yao-Hua Tan – Delft University of Technology, The Netherlands")),o.createElement("h3",{id:"previous"},"Previous Editions"),o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{href:"https://vmbo2021.events.unibz.it/",target:"_blank",rel:"noreferrer"},"VMBO 2021"),", Bolzano, IT (Virtual)"),o.createElement("li",null,o.createElement("a",{href:"https://vmbo2020.ugent.be/",target:"_blank",rel:"noreferrer"},"VMBO 2020"),", Brussels, BE"),o.createElement("li",null,o.createElement("a",{href:"https://vmbo2019.blogs.dsv.su.se/",target:"_blank",rel:"noreferrer"},"VMBO 2019"),", Stockholm, SE"),o.createElement("li",null,o.createElement("a",{href:"https://vmbo2018.e3value.com/",target:"_blank",rel:"noreferrer"},"VMBO 2018"),", Amsterdam, NL"),o.createElement("li",null,o.createElement("a",{href:"https://www.list.lu/en/conference/vmbo2017/",target:"_blank",rel:"noreferrer"},"VMBO 2017"),", Belvaux, LU"),o.createElement("li",null,"VMBO 2016, Trento, IT"),o.createElement("li",null,o.createElement("a",{href:"https://vmbo2015.blogs.dsv.su.se/",target:"_blank",rel:"noreferrer"},"VMBO 2015"),", Tilburg, NL"),o.createElement("li",null,"VMBO 2014, Berlin, DE"),o.createElement("li",null,"VMBO 2013, Delft, NL"),o.createElement("li",null,"VMBO 2012, Vienna, AT"),o.createElement("li",null,"VMBO 2011, Ghent, BE"),o.createElement("li",null,"VMBO 2009, Amsterdam, NL")))))}},2315:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABhQlQEf/EABkQAAMAAwAAAAAAAAAAAAAAAAABAhETIf/aAAgBAQABBQKK2nEYR//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AWf/xAAYEAACAwAAAAAAAAAAAAAAAAABEQAQMf/aAAgBAQAGPwJoCZX/xAAYEAADAQEAAAAAAAAAAAAAAAAAASERMf/aAAgBAQABPyHQ8xOGRcD6Wn//2gAMAwEAAgADAAAAEAQ//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERMf/aAAgBAwEBPxCMW//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAgEBPxDUBf/EABkQAQEAAwEAAAAAAAAAAAAAAAERACExQf/aAAgBAQABPxDxQQlR7cVIGNobXtxDE9Qc/9k="},"images":{"fallback":{"src":"/static/988ee0eca67af32f0b1602881d0b34b4/33355/banner.jpg","srcSet":"/static/988ee0eca67af32f0b1602881d0b34b4/19e5a/banner.jpg 750w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/5c354/banner.jpg 1080w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/c7a30/banner.jpg 1366w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/33355/banner.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/988ee0eca67af32f0b1602881d0b34b4/b19ed/banner.webp 750w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/02909/banner.webp 1080w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/5981b/banner.webp 1366w,\\n/static/988ee0eca67af32f0b1602881d0b34b4/707e4/banner.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.3125}')}}]);
//# sourceMappingURL=component---src-pages-index-js-d7ec26346203a6d0274c.js.map