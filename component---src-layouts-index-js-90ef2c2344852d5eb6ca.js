webpackJsonp([0x67ef26645b2a,60335399758886],{138:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Andrew Lomax"}}},layoutContext:{}}},293:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),i=r(u),a=n(301),c=r(a),M=n(138),l=r(M);t.default=function(e){return i.default.createElement(c.default,o({},e,l.default))},e.exports=t.default},59:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function u(e,t,n){var u,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=i.call(e),t=i.call(t),M(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(u=0;u<e.length;u++)if(e[u]!==t[u])return!1;return!0}try{var T=a(e),s=a(t)}catch(e){return!1}if(T.length!=s.length)return!1;for(T.sort(),s.sort(),u=T.length-1;u>=0;u--)if(T[u]!=s[u])return!1;for(u=T.length-1;u>=0;u--)if(l=T[u],!M(e[l],t[l],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,a=n(61),c=n(60),M=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:u(e,t,n))}},60:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},61:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},62:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),u={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return u}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},49:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),T=r(l),s=n(11),f=r(s),E=n(74),N=r(E),d=n(59),p=r(d),y=n(73),A=n(30),L=function(e){var t,n;return n=t=function(t){function n(){return u(this,n),i(this,t.apply(this,arguments))}return a(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,p.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,u=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,u))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,u=e.newChildProps,i=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=i,t.titleAttributes=c({},u),t));case A.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},u)});case A.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},u)})}return c({},o,(n={},n[r.type]=c({},u),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return T.default.Children.forEach(e,function(e){if(e&&e.props){var u=e.props,i=u.children,a=o(u,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),u=c({},r);return n&&(u=this.mapChildrenToProps(n,u)),T.default.createElement(e,u)},M(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(T.default.Component),t.propTypes={base:f.default.object,bodyAttributes:f.default.object,children:f.default.oneOfType([f.default.arrayOf(f.default.node),f.default.node]),defaultTitle:f.default.string,defer:f.default.bool,encodeSpecialCharacters:f.default.bool,htmlAttributes:f.default.object,link:f.default.arrayOf(f.default.object),meta:f.default.arrayOf(f.default.object),noscript:f.default.arrayOf(f.default.object),onChangeClientState:f.default.func,script:f.default.arrayOf(f.default.object),style:f.default.arrayOf(f.default.object),title:f.default.string,titleAttributes:f.default.object,titleTemplate:f.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},j=function(){return null},I=(0,N.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(j),w=L(I);w.renderStatic=w.rewind,t.Helmet=w,t.default=w},30:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},73:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),c=n(8),M=r(c),l=n(30),T=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},s=function(e){var t=p(e,l.TAG_NAMES.TITLE),n=p(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=p(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return p(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return u({},e,t)},{})},N=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var u=r[o],i=u.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},d=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&w("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,u=Object.keys(e),i=0;i<u.length;i++){var a=u[i],c=a.toLowerCase();t.indexOf(c)===-1||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(a)===-1||a!==l.TAG_PROPERTIES.INNER_HTML&&a!==l.TAG_PROPERTIES.CSS_TEXT&&a!==l.TAG_PROPERTIES.ITEM_PROP||(n=a)}if(!n||!e[n])return!1;var M=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][M]&&(o[n][M]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var u=Object.keys(o),i=0;i<u.length;i++){var a=u[i],c=(0,M.default)({},r[a],o[a]);r[a]=c}return e},[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:N([l.TAG_PROPERTIES.HREF],e),bodyAttributes:E(l.ATTRIBUTE_NAMES.BODY,e),defer:p(e,l.HELMET_PROPS.DEFER),encode:p(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(l.ATTRIBUTE_NAMES.HTML,e),linkTags:d(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:d(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:d(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:s(e),titleAttributes:E(l.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),L=function(e){return clearTimeout(e)},j="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,I="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||L:e.cancelAnimationFrame||L,w=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},m=null,g=function(e){m&&I(m),e.defer?m=j(function(){S(e,function(){m=null})}):(S(e),m=null)},S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,u=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,M=e.scriptTags,T=e.styleTags,s=e.title,f=e.titleAttributes;h(l.TAG_NAMES.BODY,r),h(l.TAG_NAMES.HTML,o),O(s,f);var E={baseTag:C(l.TAG_NAMES.BASE,n),linkTags:C(l.TAG_NAMES.LINK,u),metaTags:C(l.TAG_NAMES.META,i),noscriptTags:C(l.TAG_NAMES.NOSCRIPT,a),scriptTags:C(l.TAG_NAMES.SCRIPT,M),styleTags:C(l.TAG_NAMES.STYLE,T)},N={},d={};Object.keys(E).forEach(function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(N[e]=n),r.length&&(d[e]=E[e].oldTags)}),t&&t(),c(e,N,d)},D=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=D(e)),h(l.TAG_NAMES.TITLE,t)},h=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],u=[].concat(o),i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],M=t[c]||"";n.getAttribute(c)!==M&&n.setAttribute(c,M),o.indexOf(c)===-1&&o.push(c);var T=u.indexOf(c);T!==-1&&u.splice(T,1)}for(var s=u.length-1;s>=0;s--)n.removeAttribute(u[s]);o.length===u.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),u=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):u.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),u.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:u}},b=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},x=function(e,t,n,r){var o=b(n),u=D(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+T(u,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+T(u,r)+"</"+e+">"},z=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+T(r[t],n)+'"';return e?e+" "+o:o},""),u=r.innerHTML||r.cssText||"",i=l.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+u+"</"+e+">")},"")},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},P=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),u=v(n,o);return[a.default.createElement(l.TAG_NAMES.TITLE,u,t)]},R=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),a.default.createElement(e,o)})},U=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return P(e,t.title,t.titleAttributes,n)},toString:function(){return x(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return v(t)},toString:function(){return b(t)}};default:return{toComponent:function(){return R(e,t)},toString:function(){return z(e,t,n)}}}},k=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,u=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.scriptTags,M=e.styleTags,T=e.title,s=void 0===T?"":T,f=e.titleAttributes;return{base:U(l.TAG_NAMES.BASE,t,r),bodyAttributes:U(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:U(l.ATTRIBUTE_NAMES.HTML,o,r),link:U(l.TAG_NAMES.LINK,u,r),meta:U(l.TAG_NAMES.META,i,r),noscript:U(l.TAG_NAMES.NOSCRIPT,a,r),script:U(l.TAG_NAMES.SCRIPT,c,r),style:U(l.TAG_NAMES.STYLE,M,r),title:U(l.TAG_NAMES.TITLE,{title:s,titleAttributes:f},r)}};t.convertReactPropstoHtmlAttributes=_,t.handleClientStateChange=g,t.mapStateOnServer=k,t.reducePropsToState=y,t.requestAnimationFrame=j,t.warn=w}).call(t,function(){return this}())},74:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){function s(){E=e(f.map(function(e){return e.props})),N.canUseDOM?t(E):n&&(E=n(E))}if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var f=[],E=void 0,N=function(e){function t(){return o(this,t),u(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return E},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=E;return E=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!T(e,this.props)},t.prototype.componentWillMount=function(){f.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),s()},t.prototype.render=function(){return M.createElement(a,this.props)},t}(c.Component);return N.displayName="SideEffect("+r(a)+")",N.canUseDOM=l.canUseDOM,N}}var c=n(1),M=r(c),l=r(n(62)),T=r(n(77));e.exports=a},77:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var u=Object.keys(e),i=Object.keys(t);if(u.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<u.length;c++){var M=u[c];if(!a(M))return!1;var l=e[M],T=t[M];if(o=n?n.call(r,l,T,M):void 0,o===!1||void 0===o&&l!==T)return!1}return!0}},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,n(459);var a=n(1),c=r(a),M=n(21),l=r(M),T=n(300),s=r(T),f=function(e){function t(){return o(this,t),u(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("footer",null,c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-6"},c.default.createElement(l.default,{to:"/"},c.default.createElement("h4",null,"ANDREW LOMAX")),c.default.createElement(s.default,null),c.default.createElement("ul",{className:"site-map"},c.default.createElement("li",null,c.default.createElement(l.default,{to:"/about"},"About Me")),c.default.createElement("li",null,c.default.createElement(l.default,{to:"/work"},"Work & Experience")),c.default.createElement("li",null,c.default.createElement(l.default,{to:"/projects"},"Projects")),c.default.createElement("li",null,c.default.createElement(l.default,{to:"/projects/viz"},"Creative Coding")),c.default.createElement("li",null,c.default.createElement(l.default,{to:"/#contact"},"Contact")))),c.default.createElement("div",{className:"col-6",style:{textAlign:"right"}},c.default.createElement("p",null,"Made with ",c.default.createElement("a",{href:"https://www.gatsbyjs.org/"},c.default.createElement("img",{width:"100px",src:"https://s3.amazonaws.com/media-p.slid.es/uploads/674824/images/4628521/GatsbyLogo.png",alt:"gatsb logo"})))))))},t}(c.default.Component);t.default=f,e.exports=t.default},459:function(e,t){},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,n(460);var a=n(1),c=r(a),M=n(21),l=r(M),T=n(299),s=r(T),f=function(e){function t(){var n,r,i;o(this,t);for(var a=arguments.length,M=Array(a),T=0;T<a;T++)M[T]=arguments[T];return n=r=u(this,e.call.apply(e,[this].concat(M))),r.skills=[c.default.createElement("h5",null,"javascript"),c.default.createElement("h5",null,"react"),c.default.createElement("h5",null,"d3"),c.default.createElement("h5",null,"html5/css3"),c.default.createElement("h5",null,"python"),c.default.createElement("h5",null,"django"),c.default.createElement("h5",null,"salesforce/apex")],r.getPageTitle=function(){var e=r.props.path,t=e.split("/")[1];switch(t){case"about":return c.default.createElement(l.default,{to:"/about"},c.default.createElement("p",null,"About Me"));case"projects":return c.default.createElement(l.default,{to:"/projects"},c.default.createElement("p",null,"Projects & Experiments"));case"work":return c.default.createElement(l.default,{to:"/work"},c.default.createElement("p",null,"Work & Experience"));default:return!1}},i=n,u(r,i)}return i(t,e),t.prototype.render=function(){var e=this.getPageTitle();return c.default.createElement("header",{className:"header container"},c.default.createElement("div",{className:"row flex-center"},c.default.createElement("div",{className:"col-6 name-title"},c.default.createElement(l.default,{to:"/"},c.default.createElement("h4",null,c.default.createElement("span",{className:"name"},"ANDREW LOMAX  /  "),c.default.createElement("span",{className:"title"},"software engineer")))),c.default.createElement("div",{className:"col-6 skills"},c.default.createElement(s.default,{items:this.skills,id:"skills"})),c.default.createElement("div",{className:"header__spacer col-6 "+(e?"expanded":"")},c.default.createElement("div",{className:"header__spacer__line"}),e)))},t}(c.default.Component);t.default=f,e.exports=t.default},460:function(e,t){},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a);n(461);var M=function(e){function t(){return o(this,t),u(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.items,n=e.className,r=e.id;return c.default.createElement("ul",{className:"inline-dotted-list "+(n||""),id:r||""},t.map(function(e,t){return c.default.createElement("li",{className:"inline-dotted-list__item",key:"idl-item-"+t},e)}))},t}(c.default.Component);t.default=M,e.exports=t.default},461:function(e,t){},300:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,n(462);var a=n(1),c=r(a),M="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiBoZWlnaHQ9IjU2LjY5M3B4IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSItMTE2MyAxNjU3LjY5NyA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xMTM0LjY1OTgsMTY2Mi45MTYzYy0xMy42MDEsMC0yNC42MywxMS4wMjY3LTI0LjYzLDI0LjYyOTkgICBjMCwxMC44ODIxLDcuMDU3MywyMC4xMTQ0LDE2Ljg0MzUsMjMuMzcxM2MxLjIzMDgsMC4yMjc5LDEuNjgyOS0wLjUzNDUsMS42ODI5LTEuMTg0OWMwLTAuNTg3LTAuMDIyNy0yLjUyNzYtMC4wMzM0LTQuNTg1NyAgIGMtNi44NTIxLDEuNDkwMS04LjI5NzktMi45MDYtOC4yOTc5LTIuOTA2Yy0xLjEyMDUtMi44NDY3LTIuNzM0Ny0zLjYwMzktMi43MzQ3LTMuNjAzOSAgIGMtMi4yMzQ5LTEuNTI4NywwLjE2ODUtMS40OTcyLDAuMTY4NS0xLjQ5NzJjMi40NzMsMC4xNzM3LDMuNzc1NSwyLjUzODUsMy43NzU1LDIuNTM4NWMyLjE5NjcsMy43NjUxLDUuNzYxOCwyLjY3NjUsNy4xNjc1LDIuMDQ3MiAgIGMwLjIyMTEtMS41OTE3LDAuODU5MS0yLjY3ODYsMS41NjM3LTMuMjkzNmMtNS40NzA3LTAuNjIyNi0xMS4yMjE4LTIuNzM0Ny0xMS4yMjE4LTEyLjE3MjJjMC0yLjY4ODgsMC45NjIzLTQuODg2MSwyLjUzOC02LjYxMSAgIGMtMC4yNTU3LTAuNjIwNi0xLjA5ODktMy4xMjU1LDAuMjM4Ni02LjUxODNjMCwwLDIuMDY4NC0wLjY2MTYsNi43NzQ3LDIuNTI1YzEuOTY0OC0wLjU0NTgsNC4wNzE5LTAuODE5NSw2LjE2NS0wLjgyOSAgIGMyLjA5MywwLjAwOTUsNC4yMDE3LDAuMjgzMiw2LjE3LDAuODI5YzQuNzAxMi0zLjE4NjYsNi43NjY1LTIuNTI1LDYuNzY2NS0yLjUyNWMxLjM0MDYsMy4zOTI4LDAuNDk3NCw1Ljg5NzcsMC4yNDE3LDYuNTE4MyAgIGMxLjU3OTMsMS43MjQ5LDIuNTM0OCwzLjkyMjEsMi41MzQ4LDYuNjExYzAsOS40NjAyLTUuNzYxOCwxMS41NDI4LTExLjI0NjUsMTIuMTUyN2MwLjg4MzQsMC43NjQ0LDEuNjcwNCwyLjI2MzIsMS42NzA0LDQuNTYxICAgYzAsMy4yOTU1LTAuMDI4Miw1Ljk0NzktMC4wMjgyLDYuNzU5MmMwLDAuNjU1NiwwLjQ0MzIsMS40MjM2LDEuNjkxNSwxLjE4MThjOS43ODEyLTMuMjYwNSwxNi44Mjk2LTEyLjQ4OTYsMTYuODI5Ni0yMy4zNjgyICAgQy0xMTEwLjAyOTksMTY3My45NDMtMTEyMS4wNTc0LDE2NjIuOTE2My0xMTM0LjY1OTgsMTY2Mi45MTYzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8%2BPHBhdGggZD0iTS0xMTQ5Ljk2MTEsMTY5OC4yNzkzYy0wLjA1NDIsMC4xMjI3LTAuMjQ2OSwwLjE1OTMtMC40MjIyLDAuMDc1M2MtMC4xNzg4LTAuMDgwNC0wLjI3ODgtMC4yNDczLTAuMjIxMS0wLjM3ICAgYzAuMDUzLTAuMTI2LDAuMjQ1Ny0wLjE2MSwwLjQyNDItMC4wNzY5Qy0xMTUwLjAwMTMsMTY5Ny45ODgyLTExNDkuODk5MywxNjk4LjE1NjYtMTE0OS45NjExLDE2OTguMjc5M0wtMTE0OS45NjExLDE2OTguMjc5M3ogICAgTS0xMTUwLjI2NDIsMTY5OC4wNTQ3Ii8%2BPHBhdGggZD0iTS0xMTQ4Ljk2MzQsMTY5OS4zOTIyYy0wLjExNzQsMC4xMDg2LTAuMzQ3MywwLjA1ODEtMC41MDMxLTAuMTEzOWMtMC4xNjEzLTAuMTcxOC0wLjE5MTItMC40MDE2LTAuMDcyLTAuNTExOCAgIGMwLjEyMTEtMC4xMDg4LDAuMzQzOC0wLjA1NzksMC41MDUsMC4xMTM5Qy0xMTQ4Ljg3MjEsMTY5OS4wNTQxLTExNDguODQwNywxNjk5LjI4MTktMTE0OC45NjM0LDE2OTkuMzkyMkwtMTE0OC45NjM0LDE2OTkuMzkyMnogICAgTS0xMTQ5LjE5ODQsMTY5OS4xNCIvPjxwYXRoIGQ9Ik0tMTE0Ny45OTIyLDE3MDAuODEwNWMtMC4xNTEsMC4xMDUxLTAuMzk3OSwwLjAwNjctMC41NTA1LTAuMjEyM2MtMC4xNTEtMC4yMTkxLTAuMTUxLTAuNDgxOSwwLjAwMzUtMC41ODcyICAgYzAuMTUyNi0wLjEwNTEsMC4zOTYtMC4wMTA0LDAuNTUwNSwwLjIwNjhDLTExNDcuODM4MSwxNzAwLjQ0MDYtMTE0Ny44MzgxLDE3MDAuNzAzNC0xMTQ3Ljk5MjIsMTcwMC44MTA1TC0xMTQ3Ljk5MjIsMTcwMC44MTA1eiAgICBNLTExNDcuOTkyMiwxNzAwLjgxMDUiLz48cGF0aCBkPSJNLTExNDYuNjYxOSwxNzAyLjE4MTJjLTAuMTM1MSwwLjE0ODktMC40MjI3LDAuMTA4Ni0wLjYzMjktMC4wOTQ1Yy0wLjIxNTUtMC4xOTg0LTAuMjc1My0wLjQ4MDMtMC4xNDAzLTAuNjI5MyAgIGMwLjEzNzEtMC4xNDksMC40MjYzLTAuMTA3MiwwLjYzODEsMC4wOTQ0Qy0xMTQ2LjU4MzEsMTcwMS43NTAxLTExNDYuNTE4MiwxNzAyLjAzMzctMTE0Ni42NjE5LDE3MDIuMTgxMkwtMTE0Ni42NjE5LDE3MDIuMTgxMnogICAgTS0xMTQ2LjY2MTksMTcwMi4xODEyIi8%2BPHBhdGggZD0iTS0xMTQ0LjgyNjUsMTcwMi45NzY5Yy0wLjA1OTcsMC4xOTI3LTAuMzM2NSwwLjI4MDQtMC42MTU0LDAuMTk4NGMtMC4yNzg4LTAuMDg0NS0wLjQ2MDgtMC4zMTAzLTAuNDA0Ny0wLjUwNTEgICBjMC4wNTc3LTAuMTk0MywwLjMzNjEtMC4yODU1LDAuNjE2OS0wLjE5NzlDLTExNDQuOTUxMiwxNzAyLjU1NjMtMTE0NC43Njg4LDE3MDIuNzgwNS0xMTQ0LjgyNjUsMTcwMi45NzY5TC0xMTQ0LjgyNjUsMTcwMi45NzY5eiAgICBNLTExNDQuODI2NSwxNzAyLjk3NjkiLz48cGF0aCBkPSJNLTExNDIuODEwNywxNzAzLjEyNDNjMC4wMDY3LDAuMjAzMS0wLjIyOTksMC4zNzE2LTAuNTIyNiwwLjM3NTJjLTAuMjk0NCwwLjAwNjctMC41MzMtMC4xNTc3LTAuNTM2MS0wLjM1NzcgICBjMC0wLjIwNTIsMC4yMzEzLTAuMzcxNywwLjUyNTgtMC4zNzY4Qy0xMTQzLjA1MDksMTcwMi43NTk0LTExNDIuODEwNywxNzAyLjkyMjctMTE0Mi44MTA3LDE3MDMuMTI0M0wtMTE0Mi44MTA3LDE3MDMuMTI0M3ogICAgTS0xMTQyLjgxMDcsMTcwMy4xMjQzIi8%2BPHBhdGggZD0iTS0xMTQwLjkzNTEsMTcwMi44MDUyYzAuMDM1LDAuMTk4LTAuMTY4NiwwLjQwMTUtMC40NTk0LDAuNDU1N2MtMC4yODU5LDAuMDUyNi0wLjU1MDQtMC4wNzAxLTAuNTg3LTAuMjY2NSAgIGMtMC4wMzU0LTAuMjAzMSwwLjE3MTYtMC40MDY2LDAuNDU3My0wLjQ1OTJDLTExNDEuMjMzLDE3MDIuNDg0Ni0xMTQwLjk3MjIsMTcwMi42MDM2LTExNDAuOTM1MSwxNzAyLjgwNTJMLTExNDAuOTM1MSwxNzAyLjgwNTJ6ICAgIE0tMTE0MC45MzUxLDE3MDIuODA1MiIvPjwvZz48L3N2Zz4%3D",l="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01Mi44MzcsMTUuMDY1Yy0xLjgxMSwwLjgwNS0zLjc2LDEuMzQ4LTUuODA1LDEuNTkxYzIuMDg4LTEuMjUsMy42ODktMy4yMyw0LjQ0NC01LjU5MmMtMS45NTMsMS4xNTktNC4xMTUsMi02LjQxOCwyLjQ1NCAgYy0xLjg0My0xLjk2NC00LjQ3LTMuMTkyLTcuMzc3LTMuMTkyYy01LjU4MSwwLTEwLjEwNiw0LjUyNS0xMC4xMDYsMTAuMTA3YzAsMC43OTEsMC4wODksMS41NjIsMC4yNjIsMi4zMDMgIGMtOC40LTAuNDIyLTE1Ljg0OC00LjQ0NS0yMC44MzMtMTAuNTZjLTAuODcsMS40OTItMS4zNjgsMy4yMjgtMS4zNjgsNS4wODJjMCwzLjUwNiwxLjc4NCw2LjYsNC40OTYsOC40MTIgIGMtMS42NTYtMC4wNTMtMy4yMTUtMC41MDgtNC41NzgtMS4yNjVjLTAuMDAxLDAuMDQyLTAuMDAxLDAuMDg1LTAuMDAxLDAuMTI4YzAsNC44OTYsMy40ODQsOC45OCw4LjEwOCw5LjkxICBjLTAuODQ4LDAuMjMtMS43NDEsMC4zNTQtMi42NjMsMC4zNTRjLTAuNjUyLDAtMS4yODUtMC4wNjMtMS45MDItMC4xODJjMS4yODcsNC4wMTUsNS4wMTksNi45MzgsOS40NDEsNy4wMTkgIGMtMy40NTksMi43MTEtNy44MTYsNC4zMjctMTIuNTUyLDQuMzI3Yy0wLjgxNSwwLTEuNjItMC4wNDgtMi40MTEtMC4xNDJjNC40NzQsMi44NjksOS43ODYsNC41NDEsMTUuNDkzLDQuNTQxICBjMTguNTkxLDAsMjguNzU2LTE1LjQsMjguNzU2LTI4Ljc1NmMwLTAuNDM4LTAuMDA5LTAuODc1LTAuMDI4LTEuMzA5QzQ5Ljc2OSwxOC44NzMsNTEuNDgzLDE3LjA5Miw1Mi44MzcsMTUuMDY1eiIvPjwvc3ZnPg%3D%3D",T="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPHBvbHlnb24gZmlsbD0ibm9uZSIgcG9pbnRzPSIxMiAyIDIyIDguNSAyMiAxNS41IDEyIDIyIDIgMTUuNSAyIDguNSAxMiAyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8%2BPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgeDE9IjEyIiB4Mj0iMTIiIHkxPSIyMiIgeTI9IjE1LjUiLz48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIyMiA4LjUgMTIgMTUuNSAyIDguNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IjIgMTUuNSAxMiA4LjUgMjIgMTUuNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHgxPSIxMiIgeDI9IjEyIiB5MT0iMiIgeTI9IjguNSIvPjwvc3ZnPg%3D%3D",s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTI5MiA3MDRxMCA2IDEwIDQxIDEwIDI5IDI1IDQ5LjV0NDEgMzQgNDQgMjAgNTUgMTYuNXEzMjUgOTEgMzI1IDMzMiAwIDE0Ni0xMDUuNSAyNDIuNXQtMjU0LjUgOTYuNXEtNTkgMC0xMTEuNS0xOC41dC05MS41LTQ1LjUtNzctNzQuNS02My04Ny41LTUzLjUtMTAzLjUtNDMuNS0xMDMtMzkuNS0xMDYuNS0zNS41LTk1cS0zMi04MS02MS41LTEzMy41dC03My41LTk2LjUtMTA0LTY0LTE0Mi0yMHEtOTYgMC0xODMgNTUuNXQtMTM4IDE0NC41LTUxIDE4NXEwIDE2MCAxMDYuNSAyNzkuNXQyNjMuNSAxMTkuNXExNzcgMCAyNTgtOTUgNTYtNjMgODMtMTE2bDg0IDE1MnEtMTUgMzQtNDQgNzBsMSAxcS0xMzEgMTUyLTM4OCAxNTItMTQ3IDAtMjY5LjUtNzl0LTE5MC41LTIwNy41LTY4LTI3NC41cTAtMTA1IDQzLjUtMjA2dDExNi0xNzYuNSAxNzItMTIxLjUgMjA0LjUtNDZxODcgMCAxNTkgMTl0MTIzLjUgNTAgOTUgODAgNzIuNSA5OSA1OC41IDExNyA1MC41IDEyNC41IDUwIDEzMC41IDU1IDEyN3E5NiAyMDAgMjMzIDIwMCA4MSAwIDEzOC41LTQ4LjV0NTcuNS0xMjguNXEwLTQyLTE5LTcydC01MC41LTQ2LTcyLjUtMzEuNS04NC41LTI3LTg3LjUtMzQtODEtNTItNjUtODItMzktMTIyLjVxLTMtMTYtMy0zMyAwLTExMCA4Ny41LTE5MnQxOTguNS03OHE3OCAzIDEyMC41IDE0LjV0OTAuNSA1My41aC0xcTEyIDExIDIzIDI0LjV0MjYgMzYgMTkgMjcuNWwtMTI5IDk5cS0yNi00OS01NC03MHYtMXEtMjMtMjEtOTctMjEtNDkgMC04NCAzM3QtMzUgODN6Ii8%2BPC9zdmc%2B",f=function(e){
function t(){return o(this,t),u(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"social-media-icons"},c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("a",{href:"https://github.com/LomaxRx/districthousing-lambda"},c.default.createElement("img",{src:M,alt:"github"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://codepen.io/lomaxrx/"},c.default.createElement("img",{src:T,alt:"codepen"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://twitter.com/lomaxap"},c.default.createElement("img",{src:l,alt:"twitter"}))),c.default.createElement("li",null,c.default.createElement("a",{href:"https://www.last.fm/user/alowmax"},c.default.createElement("img",{src:s,alt:"lastfm"})))))},t}(c.default.Component);t.default=f,e.exports=t.default},462:function(e,t){},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(1),M=r(c),l=n(11),T=r(l),s=n(49),f=r(s),E=n(298),N=r(E),d=n(297),p=r(d);n(463);var y=n(173),A=function(e){function t(n){o(this,t);var r=u(this,e.call(this,n));return r.setPageBg=function(e){r.setState({bg:e})},r.state={bg:"white"},r}return i(t,e),t.prototype.componentDidMount=function(){var e=this.props.location;(0,y.init)({addShapes:"/"===e.pathname})},t.prototype.componentWillUpdate=function(e){var t=e.location,n=this.props.location;t.pathname!==n.pathname&&this.setState({bg:"white"})},t.prototype.render=function(){var e=this.props,t=e.data,n=e.children,r=(e.markdownRemark,e.location);return M.default.createElement("main",{id:"site",className:this.state.bg+"-background"},M.default.createElement(f.default,{title:"Andrew Lomax",meta:[{name:"description",content:""},{name:"keywords",content:""}]}),M.default.createElement(N.default,{siteTitle:t.site.siteMetadata.title,path:r.pathname}),M.default.createElement("div",null,n(a({},this.props,{setPageBg:this.setPageBg}))),M.default.createElement(p.default,null))},t}(M.default.Component);A.propTypes={children:T.default.func},t.default=A;t.query="** extracted graphql fragment **"},463:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-90ef2c2344852d5eb6ca.js.map