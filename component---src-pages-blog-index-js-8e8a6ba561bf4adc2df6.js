(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c}),t.d(n,"pageQuery",function(){return p});var r=t(6),a=t.n(r),i=t(0),o=t.n(i),s=t(134),l=t(137),u=t(141),c=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return e=e.filter(function(e){return e.node.frontmatter.published}),o.a.createElement(l.a,null,o.a.createElement(u.a,null,"Blog"),e.map(function(e,n){var t=e.node;return o.a.createElement("div",{key:n},o.a.createElement(s.Link,{to:t.fields.slug},t.frontmatter.title))}))},n}(o.a.Component),p="3222840661"},133:function(e,n,t){var r;e.exports=(r=t(136))&&r.default||r},134:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return f}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return m});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),s=t(131),l=t.n(s);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return s.withPrefix}),t.d(n,"navigate",function(){return s.navigate}),t.d(n,"push",function(){return s.push}),t.d(n,"replace",function(){return s.replace}),t.d(n,"navigateTo",function(){return s.navigateTo});var u=t(133),c=t.n(u);t.d(n,"PageRenderer",function(){return c.a});var p=t(29);t.d(n,"parsePath",function(){return p.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,n,t){"use strict";var r=t(138),a=t.n(r),i=t(6),o=t.n(i),s=t(4),l=t.n(s),u=t(0),c=t.n(u),p=t(139),d=t.n(p),m=t(132);function f(){var e=a()(["\n      html, body {\n        padding: 0;\n        margin: 0;\n        font-size: 10px;\n      }\n      body {\n        font-family: 'PT Serif', serif;\n      }\n\n      h1 {\n        font-family: 'PT Sans', serif;\n        font-size: 3.5rem;\n      }\n\n      h2 {\n        font-family: 'PT Sans', serif;\n        font-size: 2.6rem;\n      }\n\n      h3 {\n        font-family: 'PT Sans', serif;\n        font-size: 2rem;\n      }\n\n      a {\n        color: blue;\n        text-decoration: none;\n      }\n\n      a:visited {\n        color: blue;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      p {\n        font-size: 2rem;\n        line-height: 1.4;\n      }\n\n      blockquote {\n        margin: 0;\n        padding-left: 1.2em;\n        padding-top: 0.3em;\n        padding-bottom: 0.3em;\n        border-left: 5px solid grey;\n        color: #666666;\n      }\n\n      blockquote p {\n        margin: 0;\n      }\n    "]);return f=function(){return e},e}t(140);var h=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return c.a.createElement("div",null,this.renderHead(),this.renderBaseStyles(),this.props.children)},t.renderHead=function(){return c.a.createElement(d.a,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"Andrey Azov: Personal Website"),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans",rel:"stylesheet"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif",rel:"stylesheet"}))},t.renderBaseStyles=function(){return Object(m.a)(f())},n}(c.a.Component);h.propTypes={children:l.a.any},n.a=h},136:function(e,n,t){"use strict";t.r(n);t(30);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),s=t(46),l=t(2),u=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(s.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},137:function(e,n,t){"use strict";var r=t(6),a=t.n(r),i=t(45),o=t.n(i),s=t(0),l=t.n(s),u=t(132),c=t(135),p=Object(u.c)(["16.65%{-webkit-transform:translateY(8px);transform:translateY(3px);}33.3%{-webkit-transform:translateY(-6px);transform:translateY(-2px);}49.95%{-webkit-transform:translateY(4px);transform:translateY(2px);}66.6%{-webkit-transform:translateY(-2px);transform:translateY(-1px);}83.25%{-webkit-transform:translateY(1px);transform:translateY(1px);}100%{-webkit-transform:translateY(0);transform:translateY(0);}"]),d=u.b.div.withConfig({displayName:"menu-button__HamburgerButton",componentId:"uovo3g-0"})(["display:flex;align-items:center;justify-content:center;position:absolute;top:20px;left:90px;width:40px;height:40px;border 1px solid black;border-radius:50%;box-shadow:1px 2px 1px #888888;cursor:pointer;user-select:none;&:hover{animation:"," 1s ease-in-out}@media screen and (max-width:1000px){left:2rem;}"],p),m=u.b.svg.withConfig({displayName:"menu-button__Hamburger",componentId:"uovo3g-1"})(["height:20px;width:28px;"]);function f(e){return l.a.createElement(d,{onClick:e.openMenu},l.a.createElement(m,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 20",version:"1.1"},l.a.createElement("g",null,l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"0",x:"0"}),l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"8",x:"0"}),l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"16",x:"0"}))))}var h=t(134),g=Object(u.c)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]),b=Object(u.c)(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]),y=u.b.div.withConfig({displayName:"side-menu__SideMenuContainer",componentId:"sc-1t4nr90-0"})(["position:fixed;top:0;left:0;width:300px;height:100vh;display:flex;background:#262626;transform:translateX(-100%);z-index:5;@media screen and (max-width:767px){width:100%;}"]),x=Object(u.b)(y).withConfig({displayName:"side-menu__SideMenuContainerOpening",componentId:"sc-1t4nr90-1"})(["transform:translateX(0);animation:"," 0.5s ease-in-out"],g),v=Object(u.b)(y).withConfig({displayName:"side-menu__SideMenuContainerClosing",componentId:"sc-1t4nr90-2"})(["animation:"," 0.5s ease-in-out"],b),w=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isOpening:!1,isClosing:!1},t}a()(n,e);var t=n.prototype;return t.componentWillReceiveProps=function(e){this.isOpening(this.props,e)?this.setState({isOpening:!0,isClosing:!1}):this.isClosing(this.props,e)?this.setState({isOpening:!1,isClosing:!0}):(this.state.isOpening||this.state.isClosing)&&this.setState({isOpening:!1,isClosing:!1})},t.isOpening=function(e,n){return!e.isOpen&&n.isOpen},t.isClosing=function(e,n){return e.isOpen&&!n.isOpen},t.getContainer=function(){return this.state.isOpening?x:this.state.isClosing?v:y},t.render=function(){var e=this.getContainer();return l.a.createElement(e,null,this.renderCloseButton(),this.renderMenuItems())},t.renderMenuItems=function(){var e=u.b.ul.withConfig({displayName:"side-menu__MenuItemsContainer",componentId:"sc-1t4nr90-3"})(["position:absolute;top:50vh;left:50%;list-style:none;padding:0;transform:translateX(-90%) translateY(-90%);"]),n=u.b.li.withConfig({displayName:"side-menu__MenuItem",componentId:"sc-1t4nr90-4"})(["color:white;font-size:30px;margin-bottom:1.6rem;a{color:white;}"]);return l.a.createElement(e,null,l.a.createElement(n,null,l.a.createElement(h.Link,{to:"/about/",activeStyle:{color:"#b88b58"},exact:!1},"about")),l.a.createElement(n,null,l.a.createElement(h.Link,{to:"/blog/",activeStyle:{color:"#b88b58"},exact:!1},"blog")),l.a.createElement(n,null,l.a.createElement(h.Link,{to:"/diary/",activeStyle:{color:"#b88b58"},exact:!1},"diary")))},t.renderCloseButton=function(){var e=this,n=u.b.div.withConfig({displayName:"side-menu__CloseButton",componentId:"sc-1t4nr90-5"})(["position:absolute;right:20px;top:20px;cursor:pointer;"]);return l.a.createElement(n,{onClick:function(){return e.props.close()}},this.renderCloseIcon())},t.renderCloseIcon=function(){var e=u.b.svg.withConfig({displayName:"side-menu__CloseIcon",componentId:"sc-1t4nr90-6"})(["width:20px;height:20px;fill:white;"]);return l.a.createElement(e,{viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M13.4 12l9.3-9.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 2.7 1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l9.3 9.3-9.3 9.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l9.3-9.3 9.3 9.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"}))},n}(s.Component);t.d(n,"a",function(){return C});var C=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={menuOpen:!1},t.openMenu=t.openMenu.bind(o()(o()(t))),t.closeMenu=t.closeMenu.bind(o()(o()(t))),t}a()(n,e);var t=n.prototype;return t.openMenu=function(){this.state.menuOpen||this.setState({menuOpen:!0})},t.closeMenu=function(){this.state.menuOpen&&this.setState({menuOpen:!1})},t.render=function(){var e=this.renderMainContainer();return l.a.createElement(c.a,null,l.a.createElement(f,{openMenu:this.openMenu}),this.renderMenu(),l.a.createElement(e,null,this.props.children))},t.renderMainContainer=function(){return u.b.main.withConfig({displayName:"page-container",componentId:"sc-1mgw8t6-0"})(["max-width:960px;margin:20px auto;padding:0 2rem 4rem;font-size:2rem;@media screen and (max-width:1000px){margin-top:90px;}img{max-width:100%;}"])},t.renderMenu=function(){return l.a.createElement(w,{isOpen:this.state.menuOpen,close:this.closeMenu})},n}(s.Component)},141:function(e,n,t){"use strict";var r=t(132).b.h1.withConfig({displayName:"page-title__Title",componentId:"sc-1kqm3zm-0"})([""]);n.a=r}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-8e8a6ba561bf4adc2df6.js.map