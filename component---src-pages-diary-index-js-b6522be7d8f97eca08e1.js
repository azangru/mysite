(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c}),t.d(n,"pageQuery",function(){return p}),t(81);var r=t(13),a=t.n(r),i=t(0),o=t.n(i),s=t(156),l=t(162),u=t(165),c=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement(u.a,null,"Diary"),e.map(function(e,n){var t=e.node;return o.a.createElement("div",{key:n},o.a.createElement(s.Link,{to:t.fields.slug},t.frontmatter.title))}))},n}(o.a.Component),p="136067"},155:function(e,n,t){var r;e.exports=(r=t(159))&&r.default||r},156:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return m});var r=t(0),a=t.n(r),i=t(8),o=t.n(i),s=t(153),l=t.n(s);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return s.withPrefix}),t.d(n,"navigate",function(){return s.navigate}),t.d(n,"push",function(){return s.push}),t.d(n,"replace",function(){return s.replace}),t.d(n,"navigateTo",function(){return s.navigateTo});var u=t(49);t.d(n,"waitForRouteChange",function(){return u.a});var c=t(155),p=t.n(c);t.d(n,"PageRenderer",function(){return p.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,n,t){"use strict";var r=t(157),a=t.n(r),i=t(13),o=t.n(i),s=t(8),l=t.n(s),u=t(0),c=t.n(u),p=t(163),d=t.n(p),f=t(154);function m(){var e=a()(["\n      html, body {\n        padding: 0;\n        margin: 0;\n        font-size: 10px;\n      }\n      body {\n        font-family: 'PT Serif', serif;\n      }\n\n      h1 {\n        font-family: 'PT Sans', serif;\n        font-size: 3.5rem;\n      }\n\n      h2 {\n        font-family: 'PT Sans', serif;\n        font-size: 2.6rem;\n      }\n\n      h3 {\n        font-family: 'PT Sans', serif;\n        font-size: 2rem;\n      }\n\n      a {\n        color: blue;\n        text-decoration: none;\n      }\n\n      a:visited {\n        color: blue;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      p {\n        font-size: 2rem;\n        line-height: 1.4;\n      }\n\n      blockquote {\n        margin: 0;\n        padding-left: 1.2em;\n        padding-top: 0.3em;\n        padding-bottom: 0.3em;\n        border-left: 5px solid grey;\n        color: #666666;\n      }\n\n      blockquote p {\n        margin: 0;\n      }\n    "]);return m=function(){return e},e}t(164);var h=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return c.a.createElement("div",null,this.renderHead(),this.renderBaseStyles(),this.props.children)},t.renderHead=function(){return c.a.createElement(d.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"Andrey Azov: Personal Website"),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans",rel:"stylesheet",type:"text/css"}),c.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=PT+Serif&subset=latin,cyrillic,cyrillic-ext,latin-ext",rel:"stylesheet",type:"text/css"}))},t.renderBaseStyles=function(){return Object(f.b)(m())},n}(c.a.Component);h.propTypes={children:l.a.any},n.a=h},159:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),s=t(34),l=t(1),u=function(e){var n=e.location,t=l.a.getResourcesForPathname(n.pathname);return a.a.createElement(s.a,{location:n,pageResources:t})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},160:function(e,n,t){var r=t(4);r(r.P,"Function",{bind:t(161)})},161:function(e,n,t){"use strict";var r=t(14),a=t(9),i=t(80),o=[].slice,s={};e.exports=Function.bind||function(e){var n=r(this),t=o.call(arguments,1),l=function(){var r=t.concat(o.call(arguments));return this instanceof l?function(e,n,t){if(!(n in s)){for(var r=[],a=0;a<n;a++)r[a]="a["+a+"]";s[n]=Function("F,a","return new F("+r.join(",")+")")}return s[n](e,t)}(n,r.length,r):i(n,r,e)};return a(n.prototype)&&(l.prototype=n.prototype),l}},162:function(e,n,t){"use strict";t(160);var r=t(13),a=t.n(r),i=t(50),o=t.n(i),s=t(0),l=t.n(s),u=t(154),c=t(158),p=Object(u.c)(["16.65%{-webkit-transform:translateY(8px);transform:translateY(3px);}33.3%{-webkit-transform:translateY(-6px);transform:translateY(-2px);}49.95%{-webkit-transform:translateY(4px);transform:translateY(2px);}66.6%{-webkit-transform:translateY(-2px);transform:translateY(-1px);}83.25%{-webkit-transform:translateY(1px);transform:translateY(1px);}100%{-webkit-transform:translateY(0);transform:translateY(0);}"]),d=u.a.div.withConfig({displayName:"menu-button__HamburgerButton"})(["display:flex;align-items:center;justify-content:center;position:absolute;top:20px;left:90px;width:40px;height:40px;border 1px solid black;border-radius:50%;box-shadow:1px 2px 1px #888888;cursor:pointer;user-select:none;&:hover{animation:"," 1s ease-in-out}@media screen and (max-width:1000px){left:2rem;}"],p),f=u.a.svg.withConfig({displayName:"menu-button__Hamburger"})(["height:20px;width:28px;"]);function m(e){return l.a.createElement(d,{onClick:e.openMenu},l.a.createElement(f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 20",version:"1.1"},l.a.createElement("g",null,l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"0",x:"0"}),l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"8",x:"0"}),l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"16",x:"0"}))))}var h=t(157),g=t.n(h),y=t(156);function x(){var e=g()(["\n  animation: "," 0.5s ease-in-out\n"]);return x=function(){return e},e}function v(){var e=g()(["\n  transform: translateX(0);\n  animation: "," 0.5s ease-in-out\n"]);return v=function(){return e},e}var b=Object(u.c)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]),w=Object(u.c)(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]),C=u.a.div.withConfig({displayName:"side-menu__SideMenuContainer"})(["position:fixed;top:0;left:0;width:300px;height:100vh;display:flex;background:#262626;transform:translateX(-100%);z-index:5;@media screen and (max-width:767px){width:100%;}"]),E=C.extend(v(),b),k=C.extend(x(),w),O=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isOpening:!1,isClosing:!1},t}a()(n,e);var t=n.prototype;return t.componentWillReceiveProps=function(e){this.isOpening(this.props,e)?this.setState({isOpening:!0,isClosing:!1}):this.isClosing(this.props,e)?this.setState({isOpening:!1,isClosing:!0}):(this.state.isOpening||this.state.isClosing)&&this.setState({isOpening:!1,isClosing:!1})},t.isOpening=function(e,n){return!e.isOpen&&n.isOpen},t.isClosing=function(e,n){return e.isOpen&&!n.isOpen},t.getContainer=function(){return this.state.isOpening?E:this.state.isClosing?k:C},t.render=function(){var e=this.getContainer();return l.a.createElement(e,null,this.renderCloseButton(),this.renderMenuItems())},t.renderMenuItems=function(){var e=u.a.ul.withConfig({displayName:"side-menu__MenuItemsContainer"})(["position:absolute;top:50vh;left:50%;list-style:none;padding:0;transform:translateX(-90%) translateY(-90%);"]),n=u.a.li.withConfig({displayName:"side-menu__MenuItem"})(["color:white;font-size:30px;margin-bottom:1.6rem;a{color:white;}"]);return l.a.createElement(e,null,l.a.createElement(n,null,l.a.createElement(y.Link,{to:"/about/",activeStyle:{color:"#b88b58"},exact:!1},"about")),l.a.createElement(n,null,l.a.createElement(y.Link,{to:"/blog/",activeStyle:{color:"#b88b58"},exact:!1},"blog")),l.a.createElement(n,null,l.a.createElement(y.Link,{to:"/diary/",activeStyle:{color:"#b88b58"},exact:!1},"diary")))},t.renderCloseButton=function(){var e=this,n=u.a.div.withConfig({displayName:"side-menu__CloseButton"})(["position:absolute;right:20px;top:20px;cursor:pointer;"]);return l.a.createElement(n,{onClick:function(){return e.props.close()}},this.renderCloseIcon())},t.renderCloseIcon=function(){var e=u.a.svg.withConfig({displayName:"side-menu__CloseIcon"})(["width:20px;height:20px;fill:white;"]);return l.a.createElement(e,{viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M13.4 12l9.3-9.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 2.7 1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l9.3 9.3-9.3 9.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l9.3-9.3 9.3 9.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"}))},n}(s.Component);t.d(n,"a",function(){return M});var M=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={menuOpen:!1},t.openMenu=t.openMenu.bind(o()(o()(t))),t.closeMenu=t.closeMenu.bind(o()(o()(t))),t}a()(n,e);var t=n.prototype;return t.openMenu=function(){this.state.menuOpen||this.setState({menuOpen:!0})},t.closeMenu=function(){this.state.menuOpen&&this.setState({menuOpen:!1})},t.render=function(){var e=this.renderMainContainer();return l.a.createElement(c.a,null,l.a.createElement(m,{openMenu:this.openMenu}),this.renderMenu(),l.a.createElement(e,null,this.props.children))},t.renderMainContainer=function(){return u.a.main.withConfig({displayName:"page-container"})(["max-width:960px;margin:20px auto;padding:0 2rem 4rem;font-size:2rem;@media screen and (max-width:1000px){margin-top:90px;}img{max-width:100%;}"])},t.renderMenu=function(){return l.a.createElement(O,{isOpen:this.state.menuOpen,close:this.closeMenu})},n}(s.Component)},165:function(e,n,t){"use strict";var r=t(154).a.h1.withConfig({displayName:"page-title__Title"})([""]);n.a=r}}]);
//# sourceMappingURL=component---src-pages-diary-index-js-b6522be7d8f97eca08e1.js.map