(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return c});var r=n(0),o=n.n(r),a=n(197),i=n(202),s=n(205);var l=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=r.prototype;return l.render=function(){var e=this.props.data.markdownRemark;return o.a.createElement(i.a,null,this.renderTitle(e.frontmatter.title),this.renderDate(e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))},l.renderTitle=function(e){return o.a.createElement(s.a,null,e)},l.renderDate=function(e){var t=a.c.p.withConfig({displayName:"blog-post__DateElement",componentId:"sc-9t6qfp-0"})(["font-style:italic;font-size:2.3rem;"]);return o.a.createElement(t,null,e)},r}(o.a.Component);t.default=l;var c="3184876859"},198:function(e,t,n){var r;e.exports=(r=n(201))&&r.default||r},199:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(66),i=n.n(a);n.d(t,"a",function(){return i.a});n(198),n(9).default.enqueue,o.a.createContext({})},200:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(203),i=n.n(a),s=n(197);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      html, body {\n        padding: 0;\n        margin: 0;\n        font-size: 10px;\n      }\n      body {\n        font-family: 'PT Serif', serif;\n      }\n\n      h1 {\n        font-family: 'PT Sans', serif;\n        font-size: 3.5rem;\n      }\n\n      h2 {\n        font-family: 'PT Sans', serif;\n        font-size: 2.6rem;\n      }\n\n      h3 {\n        font-family: 'PT Sans', serif;\n        font-size: 2rem;\n      }\n\n      a {\n        color: blue;\n        text-decoration: none;\n      }\n\n      a:visited {\n        color: blue;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      p {\n        font-size: 2rem;\n        line-height: 1.4;\n      }\n\n      blockquote {\n        margin: 0;\n        padding-left: 1.2em;\n        padding-top: 0.3em;\n        padding-bottom: 0.3em;\n        border-left: 5px solid grey;\n        color: #666666;\n      }\n\n      blockquote p {\n        margin: 0;\n      }\n    "]);return l=function(){return e},e}n(204);var c=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.render=function(){var e=this.renderBaseStyles();return o.a.createElement("div",null,this.renderHead(),o.a.createElement(e,null),this.props.children)},a.renderHead=function(){return o.a.createElement(i.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Andrey Azov: Personal Website"),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif",rel:"stylesheet"}))},a.renderBaseStyles=function(){return Object(s.a)(l())},r}(o.a.Component);t.a=c},201:function(e,t,n){"use strict";n.r(t);n(18);var r=n(0),o=n.n(r),a=n(89);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},202:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(197),i=n(200),s=Object(a.d)(["16.65%{-webkit-transform:translateY(8px);transform:translateY(3px);}33.3%{-webkit-transform:translateY(-6px);transform:translateY(-2px);}49.95%{-webkit-transform:translateY(4px);transform:translateY(2px);}66.6%{-webkit-transform:translateY(-2px);transform:translateY(-1px);}83.25%{-webkit-transform:translateY(1px);transform:translateY(1px);}100%{-webkit-transform:translateY(0);transform:translateY(0);}"]),l=Object(a.b)([""," 1s ease-in-out"],s),c=a.c.div.withConfig({displayName:"menu-button__HamburgerButton",componentId:"uovo3g-0"})(["display:flex;align-items:center;justify-content:center;position:absolute;top:20px;left:90px;width:40px;height:40px;border 1px solid black;border-radius:50%;box-shadow:1px 2px 1px #888888;cursor:pointer;user-select:none;&:hover{animation:","}@media screen and (max-width:1000px){left:2rem;}"],l),p=a.c.svg.withConfig({displayName:"menu-button__Hamburger",componentId:"uovo3g-1"})(["height:20px;width:28px;"]);function u(e){return o.a.createElement(c,{onClick:e.openMenu},o.a.createElement(p,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 20",version:"1.1"},o.a.createElement("g",null,o.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"0",x:"0"}),o.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"8",x:"0"}),o.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"16",x:"0"}))))}var m=n(199);var d=Object(a.d)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]),f=Object(a.d)(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]),h=a.c.div.withConfig({displayName:"side-menu__SideMenuContainer",componentId:"sc-1t4nr90-0"})(["position:fixed;top:0;left:0;width:300px;height:100vh;display:flex;background:#262626;transform:translateX(-100%);z-index:5;@media screen and (max-width:767px){width:100%;}"]),g=Object(a.c)(h).withConfig({displayName:"side-menu__SideMenuContainerOpening",componentId:"sc-1t4nr90-1"})(["transform:translateX(0);animation:"," 0.5s ease-in-out"],d),y=Object(a.c)(h).withConfig({displayName:"side-menu__SideMenuContainerClosing",componentId:"sc-1t4nr90-2"})(["animation:"," 0.5s ease-in-out"],f),b=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={isOpening:!1,isClosing:!1},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentWillReceiveProps=function(e){this.isOpening(this.props,e)?this.setState({isOpening:!0,isClosing:!1}):this.isClosing(this.props,e)?this.setState({isOpening:!1,isClosing:!0}):(this.state.isOpening||this.state.isClosing)&&this.setState({isOpening:!1,isClosing:!1})},i.isOpening=function(e,t){return!e.isOpen&&t.isOpen},i.isClosing=function(e,t){return e.isOpen&&!t.isOpen},i.getContainer=function(){return this.state.isOpening?g:this.state.isClosing?y:h},i.render=function(){var e=this.getContainer();return o.a.createElement(e,null,this.renderCloseButton(),this.renderMenuItems())},i.renderMenuItems=function(){var e=a.c.ul.withConfig({displayName:"side-menu__MenuItemsContainer",componentId:"sc-1t4nr90-3"})(["position:absolute;top:50vh;left:50%;list-style:none;padding:0;transform:translateX(-90%) translateY(-90%);"]),t=a.c.li.withConfig({displayName:"side-menu__MenuItem",componentId:"sc-1t4nr90-4"})(["color:white;font-size:30px;margin-bottom:1.6rem;a{color:white;}"]);return o.a.createElement(e,null,o.a.createElement(t,null,o.a.createElement(m.a,{to:"/about/",activeStyle:{color:"#b88b58"},exact:!1},"about")),o.a.createElement(t,null,o.a.createElement(m.a,{to:"/blog/",activeStyle:{color:"#b88b58"},exact:!1},"blog")),o.a.createElement(t,null,o.a.createElement(m.a,{to:"/diary/",activeStyle:{color:"#b88b58"},exact:!1},"diary")))},i.renderCloseButton=function(){var e=this,t=a.c.div.withConfig({displayName:"side-menu__CloseButton",componentId:"sc-1t4nr90-5"})(["position:absolute;right:20px;top:20px;cursor:pointer;"]);return o.a.createElement(t,{onClick:function(){return e.props.close()}},this.renderCloseIcon())},i.renderCloseIcon=function(){var e=a.c.svg.withConfig({displayName:"side-menu__CloseIcon",componentId:"sc-1t4nr90-6"})(["width:20px;height:20px;fill:white;"]);return o.a.createElement(e,{viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M13.4 12l9.3-9.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 2.7 1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l9.3 9.3-9.3 9.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l9.3-9.3 9.3 9.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"}))},r}(r.Component);function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return x});var x=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={menuOpen:!1},n.openMenu=n.openMenu.bind(v(n)),n.closeMenu=n.closeMenu.bind(v(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=r.prototype;return s.openMenu=function(){this.state.menuOpen||this.setState({menuOpen:!0})},s.closeMenu=function(){this.state.menuOpen&&this.setState({menuOpen:!1})},s.render=function(){var e=this.renderMainContainer();return o.a.createElement(i.a,null,o.a.createElement(u,{openMenu:this.openMenu}),this.renderMenu(),o.a.createElement(e,null,this.props.children))},s.renderMainContainer=function(){return a.c.main.withConfig({displayName:"page-container",componentId:"sc-1mgw8t6-0"})(["max-width:960px;margin:20px auto;padding:0 2rem 4rem;font-size:2rem;@media screen and (max-width:1000px){margin-top:90px;}img{max-width:100%;}"])},s.renderMenu=function(){return o.a.createElement(b,{isOpen:this.state.menuOpen,close:this.closeMenu})},r}(r.Component)},205:function(e,t,n){"use strict";var r=n(197).c.h1.withConfig({displayName:"page-title__Title",componentId:"sc-1kqm3zm-0"})([""]);t.a=r}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f8250113557e8bda291b.js.map