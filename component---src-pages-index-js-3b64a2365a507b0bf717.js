(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),r=n(0),o=n.n(r),s=n(155),c=n(191),l=n.n(c),u=n(170),m=(n(4),n(154),n(175),n(176),n(177),function(e){return o.a.createElement("section",{className:"interests"},o.a.createElement("div",{className:"container grid-3 center"},o.a.createElement("div",{className:"box boxshadow"},o.a.createElement("a",{href:"https://github.com/DanShai"},"GitHub"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!")),o.a.createElement("div",{className:"box boxshadow"},o.a.createElement(s.Link,{className:"alink",to:"/blog"},"Blog"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!")),o.a.createElement("div",{className:"box boxshadow"},o.a.createElement(s.Link,{className:"alink",to:"/mnistpred"},"Projects"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!"))))}),d=function(e){return o.a.createElement("section",{className:"about bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"grid-2"},o.a.createElement("div",{className:"box boxshadow"},o.a.createElement("h3",null,"Hobbies"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur maiores ea magni exercitationem similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur consequatur non nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.")),o.a.createElement("div",{className:"box boxshadow"},o.a.createElement("h3",null,"About Me"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur maiores ea magni exercitationem similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur consequatur non nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.")))))},h=n(160),p=n.n(h),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(u.a,null,o.a.createElement(l.a,{title:"Dan - Shai",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"shortcut icon",type:"image/png",href:""+p.a}]}),o.a.createElement(m,null),o.a.createElement(d,null))},t}(o.a.Component);t.default=f},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(148),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(26);n.d(t,"waitForRouteChange",function(){return l.c});var u=n(157),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(37);n.d(t,"parsePath",function(){return d.a});var h=i.a.createContext({}),p=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},160:function(e,t,n){e.exports=n.p+"static/omega-af1c1859ddb4517d35947043794fe64d.png"},164:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(53),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},168:function(e,t,n){},170:function(e,t,n){"use strict";var a=n(8),i=n.n(a),r=n(0),o=n.n(r),s=(n(4),n(154),n(160)),c=n.n(s),l=n(155),u=(n(168),n(175)),m=n(176),d=n(177),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showmenu:!1,open:!1},n.scrolly=0,n.curscrolly=0,n.autotimeout=null,n.start=null,n._isMounted=!1,n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.start=null,this.scrolly=0,window.addEventListener("scroll",function(){return e.handlescroll()})},n.componentWillUnmount=function(){var e=this;this._isMounted=!1,clearTimeout(this.autotimeout),window.removeEventListener("scroll",function(){return e.handlescroll()})},n.hidemenu=function(){this._isMounted&&this.setState({showmenu:!1,open:!1},function(){})},n.btnClicked=function(){var e=this;this._isMounted&&this.setState({open:!this.state.open},function(){e.autoclose()})},n.autoclose=function(){if(this.state.showmenu&&!this.state.open){var e=(new Date).getSeconds();null!==this.start&&e-this.start>5&&this.hidemenu()}},n.handlescroll=function(){var e=this;this.curscrolly=window.scrollY,this.scrolly!==this.curscrolly&&this._isMounted&&this.setState({showmenu:!0,open:!1},function(){return e.scrolly=e.curscrolly}),this.start=(new Date).getSeconds(),clearTimeout(this.autotimeout),this.autotimeout=setTimeout(function(){e.autoclose()},6e3)},n.render=function(){var e=this;return o.a.createElement("nav",{className:"menu "+(this.state.showmenu?"visible":"hidden")},o.a.createElement("div",{onClick:function(){return e.btnClicked()},className:"menu-btn "+(this.state.open?"menu-btn-open":" ")},o.a.createElement("span",{className:"lines "+(this.state.open?"line-1-clicked":"line-1")}),o.a.createElement("span",{className:"lines "+(this.state.open?"line-2-clicked":"line-2")}),o.a.createElement("span",{className:"lines "+(this.state.open?"line-3-clicked":"line-3")})),o.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item blue",to:"/mnistpred"},o.a.createElement("i",{className:"icon"},o.a.createElement(u.a,{icon:m.a}))),o.a.createElement("a",{onClick:function(){return e.hidemenu()},href:"https://github.com/DanShai",className:"alink menu-item green"},o.a.createElement("i",{className:"icon"},o.a.createElement(u.a,{icon:d.a})," ")),o.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item red",to:"/"},o.a.createElement("i",{className:"icon"},o.a.createElement(u.a,{icon:m.b}))),o.a.createElement(l.Link,{onClick:function(){return e.hidemenu()},className:"alink menu-item pumpkin",to:"/blog"},o.a.createElement("i",{className:"icon"},o.a.createElement(u.a,{icon:m.c}))))},t}(o.a.Component),p=function(e){return o.a.createElement("section",{className:"banner"},o.a.createElement(h,null),o.a.createElement("div",{className:"banner-content"},o.a.createElement("img",{src:c.a,className:"logo",alt:"Dan Shai"}),o.a.createElement("div",{className:"title"},"Dan Shai")))},f=function(e){return o.a.createElement("section",{className:"footer center bg-dark"},o.a.createElement("p",null," ",o.a.createElement("span",null," Dan shai © 2018 ")," "))},E=function(e){function t(t){return e.call(this,t)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(p,null),e,o.a.createElement(f,null))},t}(o.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-index-js-3b64a2365a507b0bf717.js.map