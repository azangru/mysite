(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t(142),a=t.n(r),i=t(6),o=t.n(i),l=t(0),u=t.n(l),c=t(134),s=t(132),d=t(135),f=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){return u.a.createElement(d.a,null,this.title,this.subheader,this.menu)},a()(n,[{key:"title",get:function(){var e=s.b.h1.withConfig({displayName:"pages__Title",componentId:"sc-8q7338-0"})(["text-align:center;color:#606060;font:7em 'PT Serif',serif;"]);return u.a.createElement(e,null,"Andrey Azov")}},{key:"subheader",get:function(){var e=s.b.h2.withConfig({displayName:"pages__Subheader",componentId:"sc-8q7338-1"})(["text-align:center;color:#606060;font:4em 'PT Serif',serif;"]);return u.a.createElement(e,null,"personal site")}},{key:"menu",get:function(){var e=s.b.div.withConfig({displayName:"pages__Menu",componentId:"sc-8q7338-2"})(["display:flex;flex-direction:column;align-items:center;@media screen and (max-width:767px){flex-direction:column;align-items:center;}"]),n=s.b.span.withConfig({displayName:"pages__MenuItem",componentId:"sc-8q7338-3"})(["font-size:2.5rem;margin-bottom:1rem;"]);return u.a.createElement(e,null,u.a.createElement(n,null,u.a.createElement(c.Link,{to:"/about/"},"about me")),u.a.createElement(n,null,u.a.createElement(c.Link,{to:"/blog/"},"blog")),u.a.createElement(n,null,u.a.createElement(c.Link,{to:"/diary/"},"diary")))}}]),n}(l.Component)},133:function(e,n,t){var r;e.exports=(r=t(136))&&r.default||r},134:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return m});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),l=t(131),u=t.n(l);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var c=t(133),s=t.n(c);t.d(n,"PageRenderer",function(){return s.a});var d=t(29);t.d(n,"parsePath",function(){return d.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,n,t){"use strict";var r=t(138),a=t.n(r),i=t(6),o=t.n(i),l=t(4),u=t.n(l),c=t(0),s=t.n(c),d=t(139),f=t.n(d),m=t(132);function p(){var e=a()(["\n      html, body {\n        padding: 0;\n        margin: 0;\n        font-size: 10px;\n      }\n      body {\n        font-family: 'PT Serif', serif;\n      }\n\n      h1 {\n        font-family: 'PT Sans', serif;\n        font-size: 3.5rem;\n      }\n\n      h2 {\n        font-family: 'PT Sans', serif;\n        font-size: 2.6rem;\n      }\n\n      h3 {\n        font-family: 'PT Sans', serif;\n        font-size: 2rem;\n      }\n\n      a {\n        color: blue;\n        text-decoration: none;\n      }\n\n      a:visited {\n        color: blue;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      p {\n        font-size: 2rem;\n        line-height: 1.4;\n      }\n\n      blockquote {\n        margin: 0;\n        padding-left: 1.2em;\n        padding-top: 0.3em;\n        padding-bottom: 0.3em;\n        border-left: 5px solid grey;\n        color: #666666;\n      }\n\n      blockquote p {\n        margin: 0;\n      }\n    "]);return p=function(){return e},e}t(140);var h=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return s.a.createElement("div",null,this.renderHead(),this.renderBaseStyles(),this.props.children)},t.renderHead=function(){return s.a.createElement(f.a,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"Andrey Azov: Personal Website"),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif",rel:"stylesheet"}))},t.renderBaseStyles=function(){return Object(m.a)(p())},n}(s.a.Component);h.propTypes={children:u.a.any},n.a=h},136:function(e,n,t){"use strict";t.r(n);t(30);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),l=t(46),u=t(2),c=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},142:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}}]);
//# sourceMappingURL=component---src-pages-index-js-86fa6489451ed9c1b8e9.js.map