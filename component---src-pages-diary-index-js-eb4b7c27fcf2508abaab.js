(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"pageQuery",function(){return p});var r=t(8),a=t.n(r),i=t(0),o=t.n(i),s=t(165),l=t(168),c=t(172),u=function(e){function n(){return e.apply(this,arguments)||this}return a()(n,e),n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement(c.a,null,"Diary"),e.map(function(e,n){var t=e.node;return o.a.createElement("div",{key:n},o.a.createElement(s.a,{to:t.fields.slug},t.frontmatter.title))}))},n}(o.a.Component),p="136067"},164:function(e,n,t){var r;e.exports=(r=t(167))&&r.default||r},165:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(5),o=t.n(i),s=t(40),l=t.n(s);t.d(n,"a",function(){return l.a});t(164),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},166:function(e,n,t){"use strict";var r=t(169),a=t.n(r),i=t(8),o=t.n(i),s=t(5),l=t.n(s),c=t(0),u=t.n(c),p=t(170),m=t.n(p),d=t(163);function f(){var e=a()(["\n      html, body {\n        padding: 0;\n        margin: 0;\n        font-size: 10px;\n      }\n      body {\n        font-family: 'PT Serif', serif;\n      }\n\n      h1 {\n        font-family: 'PT Sans', serif;\n        font-size: 3.5rem;\n      }\n\n      h2 {\n        font-family: 'PT Sans', serif;\n        font-size: 2.6rem;\n      }\n\n      h3 {\n        font-family: 'PT Sans', serif;\n        font-size: 2rem;\n      }\n\n      a {\n        color: blue;\n        text-decoration: none;\n      }\n\n      a:visited {\n        color: blue;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      p {\n        font-size: 2rem;\n        line-height: 1.4;\n      }\n\n      blockquote {\n        margin: 0;\n        padding-left: 1.2em;\n        padding-top: 0.3em;\n        padding-bottom: 0.3em;\n        border-left: 5px solid grey;\n        color: #666666;\n      }\n\n      blockquote p {\n        margin: 0;\n      }\n    "]);return f=function(){return e},e}t(171);var h=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){var e=this.renderBaseStyles();return u.a.createElement("div",null,this.renderHead(),u.a.createElement(e,null),this.props.children)},t.renderHead=function(){return u.a.createElement(m.a,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,"Andrey Azov: Personal Website"),u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Sans",rel:"stylesheet"}),u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=PT+Serif",rel:"stylesheet"}))},t.renderBaseStyles=function(){return Object(d.a)(f())},n}(u.a.Component);h.propTypes={children:l.a.any},n.a=h},167:function(e,n,t){"use strict";t.r(n);t(41);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),s=t(64),l=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(s.a,Object.assign({location:n,pageResources:t},t.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},168:function(e,n,t){"use strict";var r=t(42),a=t.n(r),i=t(8),o=t.n(i),s=t(0),l=t.n(s),c=t(163),u=t(166),p=Object(c.d)(["16.65%{-webkit-transform:translateY(8px);transform:translateY(3px);}33.3%{-webkit-transform:translateY(-6px);transform:translateY(-2px);}49.95%{-webkit-transform:translateY(4px);transform:translateY(2px);}66.6%{-webkit-transform:translateY(-2px);transform:translateY(-1px);}83.25%{-webkit-transform:translateY(1px);transform:translateY(1px);}100%{-webkit-transform:translateY(0);transform:translateY(0);}"]),m=Object(c.b)([""," 1s ease-in-out"],p),d=c.c.div.withConfig({displayName:"menu-button__HamburgerButton",componentId:"uovo3g-0"})(["display:flex;align-items:center;justify-content:center;position:absolute;top:20px;left:90px;width:40px;height:40px;border 1px solid black;border-radius:50%;box-shadow:1px 2px 1px #888888;cursor:pointer;user-select:none;&:hover{animation:","}@media screen and (max-width:1000px){left:2rem;}"],m),f=c.c.svg.withConfig({displayName:"menu-button__Hamburger",componentId:"uovo3g-1"})(["height:20px;width:28px;"]);function h(e){return l.a.createElement(d,{onClick:e.openMenu},l.a.createElement(f,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 20",version:"1.1"},l.a.createElement("g",null,l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"0",x:"0"}),l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"8",x:"0"}),l.a.createElement("rect",{ry:"2",height:"4",width:"28",y:"16",x:"0"}))))}var g=t(165),x=Object(c.d)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]),b=Object(c.d)(["from{transform:translateX(0);}to{transform:translateX(-100%);}"]),y=c.c.div.withConfig({displayName:"side-menu__SideMenuContainer",componentId:"sc-1t4nr90-0"})(["position:fixed;top:0;left:0;width:300px;height:100vh;display:flex;background:#262626;transform:translateX(-100%);z-index:5;@media screen and (max-width:767px){width:100%;}"]),v=Object(c.c)(y).withConfig({displayName:"side-menu__SideMenuContainerOpening",componentId:"sc-1t4nr90-1"})(["transform:translateX(0);animation:"," 0.5s ease-in-out"],x),w=Object(c.c)(y).withConfig({displayName:"side-menu__SideMenuContainerClosing",componentId:"sc-1t4nr90-2"})(["animation:"," 0.5s ease-in-out"],b),C=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isOpening:!1,isClosing:!1},t}o()(n,e);var t=n.prototype;return t.componentWillReceiveProps=function(e){this.isOpening(this.props,e)?this.setState({isOpening:!0,isClosing:!1}):this.isClosing(this.props,e)?this.setState({isOpening:!1,isClosing:!0}):(this.state.isOpening||this.state.isClosing)&&this.setState({isOpening:!1,isClosing:!1})},t.isOpening=function(e,n){return!e.isOpen&&n.isOpen},t.isClosing=function(e,n){return e.isOpen&&!n.isOpen},t.getContainer=function(){return this.state.isOpening?v:this.state.isClosing?w:y},t.render=function(){var e=this.getContainer();return l.a.createElement(e,null,this.renderCloseButton(),this.renderMenuItems())},t.renderMenuItems=function(){var e=c.c.ul.withConfig({displayName:"side-menu__MenuItemsContainer",componentId:"sc-1t4nr90-3"})(["position:absolute;top:50vh;left:50%;list-style:none;padding:0;transform:translateX(-90%) translateY(-90%);"]),n=c.c.li.withConfig({displayName:"side-menu__MenuItem",componentId:"sc-1t4nr90-4"})(["color:white;font-size:30px;margin-bottom:1.6rem;a{color:white;}"]);return l.a.createElement(e,null,l.a.createElement(n,null,l.a.createElement(g.a,{to:"/about/",activeStyle:{color:"#b88b58"},exact:!1},"about")),l.a.createElement(n,null,l.a.createElement(g.a,{to:"/blog/",activeStyle:{color:"#b88b58"},exact:!1},"blog")),l.a.createElement(n,null,l.a.createElement(g.a,{to:"/diary/",activeStyle:{color:"#b88b58"},exact:!1},"diary")))},t.renderCloseButton=function(){var e=this,n=c.c.div.withConfig({displayName:"side-menu__CloseButton",componentId:"sc-1t4nr90-5"})(["position:absolute;right:20px;top:20px;cursor:pointer;"]);return l.a.createElement(n,{onClick:function(){return e.props.close()}},this.renderCloseIcon())},t.renderCloseIcon=function(){var e=c.c.svg.withConfig({displayName:"side-menu__CloseIcon",componentId:"sc-1t4nr90-6"})(["width:20px;height:20px;fill:white;"]);return l.a.createElement(e,{viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M13.4 12l9.3-9.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 2.7 1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l9.3 9.3-9.3 9.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l9.3-9.3 9.3 9.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"}))},n}(s.Component);t.d(n,"a",function(){return E});var E=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={menuOpen:!1},t.openMenu=t.openMenu.bind(a()(t)),t.closeMenu=t.closeMenu.bind(a()(t)),t}o()(n,e);var t=n.prototype;return t.openMenu=function(){this.state.menuOpen||this.setState({menuOpen:!0})},t.closeMenu=function(){this.state.menuOpen&&this.setState({menuOpen:!1})},t.render=function(){var e=this.renderMainContainer();return l.a.createElement(u.a,null,l.a.createElement(h,{openMenu:this.openMenu}),this.renderMenu(),l.a.createElement(e,null,this.props.children))},t.renderMainContainer=function(){return c.c.main.withConfig({displayName:"page-container",componentId:"sc-1mgw8t6-0"})(["max-width:960px;margin:20px auto;padding:0 2rem 4rem;font-size:2rem;@media screen and (max-width:1000px){margin-top:90px;}img{max-width:100%;}"])},t.renderMenu=function(){return l.a.createElement(C,{isOpen:this.state.menuOpen,close:this.closeMenu})},n}(s.Component)},172:function(e,n,t){"use strict";var r=t(163).c.h1.withConfig({displayName:"page-title__Title",componentId:"sc-1kqm3zm-0"})([""]);n.a=r}}]);
//# sourceMappingURL=component---src-pages-diary-index-js-eb4b7c27fcf2508abaab.js.map