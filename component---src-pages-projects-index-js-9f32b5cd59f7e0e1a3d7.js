webpackJsonp([0xb851aee280d6],{302:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0,n(458);var l=n(1),u=r(l),f=n(34),c=r(f),s=function(e){var t=e.to,n=e.title,r=e.description;return u.default.createElement("div",{className:"projects__item"},u.default.createElement(c.default,{to:t},u.default.createElement("h1",null,n),u.default.createElement("p",null,r)))},d=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=e.filter(function(e){return e.node.fields.slug.indexOf("viz")!==-1})[0];return u.default.createElement("div",{className:"page projects container"},u.default.createElement(s,{to:t.node.fields.slug,title:"WebGL Experiments",description:"Ongoing experiments using Three.js and PIXI.js"}),e.filter(function(e){return e.node.fields.slug.indexOf("viz")===-1}).map(function(e,t){return u.default.createElement(s,{key:t,to:e.node.fields.slug,title:e.node.frontmatter.title,description:e.node.frontmatter.description})}))},t}(u.default.Component);t.default=d;t.pageQuery="** extracted graphql fragment **"},458:function(e,t){}});
//# sourceMappingURL=component---src-pages-projects-index-js-9f32b5cd59f7e0e1a3d7.js.map