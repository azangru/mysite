(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var r=t(166),a=t.n(r),i=t(13),o=t.n(i),u=t(0),l=t.n(u),c=t(156),s=t(154),f=t(158),d=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){return l.a.createElement(f.a,null,this.title,this.subheader,this.menu)},a()(n,[{key:"title",get:function(){var e=s.a.h1.withConfig({displayName:"pages__Title"})(["text-align:center;color:#606060;font:7em 'PT Serif',serif;"]);return l.a.createElement(e,null,"Andrey Azov")}},{key:"subheader",get:function(){var e=s.a.h2.withConfig({displayName:"pages__Subheader"})(["text-align:center;color:#606060;font:4em 'PT Serif',serif;"]);return l.a.createElement(e,null,"personal site")}},{key:"menu",get:function(){var e=s.a.div.withConfig({displayName:"pages__Menu"})(["display:flex;flex-direction:column;align-items:center;@media screen and (max-width:767px){flex-direction:column;align-items:center;}"]),n=s.a.span.withConfig({displayName:"pages__MenuItem"})(["font-size:2.5rem;margin-bottom:1rem;"]);return l.a.createElement(e,null,l.a.createElement(n,null,l.a.createElement(c.Link,{to:"/about/"},"about me")),l.a.createElement(n,null,l.a.createElement(c.Link,{to:"/blog/"},"blog")),l.a.createElement(n,null,l.a.createElement(c.Link,{to:"/diary/"},"diary")))}}]),n}(u.Component)},155:function(e,n,t){var r;e.exports=(r=t(159))&&r.default||r},156:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var r=t(0),a=t.n(r),i=t(8),o=t.n(i),u=t(153),l=t.n(u);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return u.withPrefix}),t.d(n,"navigate",function(){return u.navigate}),t.d(n,"push",function(){return u.push}),t.d(n,"replace",function(){return u.replace}),t.d(n,"navigateTo",function(){return u.navigateTo});var c=t(49);t.d(n,"waitForRouteChange",function(){return c.a});var s=t(155),f=t.n(s);t.d(n,"PageRenderer",function(){return f.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var m=a.a.createContext({}),p=function(e){return a.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,n,t){"use strict";var r=t(157),a=t.n(r),i=t(13),o=t.n(i),u=t(8),l=t.n(u),c=t(0),s=t.n(c),f=t(163),d=t.n(f),m=t(154);function p(){var e=a()(["\n      html, body {\n        padding: 0;\n        margin: 0;\n        font-size: 10px;\n      }\n      body {\n        font-family: 'PT Serif', serif;\n      }\n\n      h1 {\n        font-family: 'PT Sans', serif;\n        font-size: 3.5rem;\n      }\n\n      h2 {\n        font-family: 'PT Sans', serif;\n        font-size: 2.6rem;\n      }\n\n      h3 {\n        font-family: 'PT Sans', serif;\n        font-size: 2rem;\n      }\n\n      a {\n        color: blue;\n        text-decoration: none;\n      }\n\n      a:visited {\n        color: blue;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      p {\n        font-size: 2rem;\n        line-height: 1.4;\n      }\n\n      blockquote {\n        margin: 0;\n        padding-left: 1.2em;\n        padding-top: 0.3em;\n        padding-bottom: 0.3em;\n        border-left: 5px solid grey;\n        color: #666666;\n      }\n\n      blockquote p {\n        margin: 0;\n      }\n    "]);return p=function(){return e},e}t(164);var h=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return s.a.createElement("div",null,this.renderHead(),this.renderBaseStyles(),this.props.children)},t.renderHead=function(){return s.a.createElement(d.a,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"Andrey Azov: Personal Website"),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans",rel:"stylesheet"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif",rel:"stylesheet"}))},t.renderBaseStyles=function(){return Object(m.b)(p())},n}(s.a.Component);h.propTypes={children:l.a.any},n.a=h},159:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),u=t(34),l=t(1),c=function(e){var n=e.location,t=l.a.getResourcesForPathname(n.pathname);return a.a.createElement(u.a,{location:n,pageResources:t})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},166:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}}]);
//# sourceMappingURL=component---src-pages-index-js-aa2cb786165259de3832.js.map