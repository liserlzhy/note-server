(this.webpackJsonpnote=this.webpackJsonpnote||[]).push([[3],{172:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){var e={};for(var i in n)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}},235:function(n,t,e){"use strict";var i=e(0),o=e.n(i);t.a=function(n){var t=n.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");return"function"!==typeof t.componentWillReceiveProps?n:o.a.Profiler?(t.UNSAFE_componentWillReceiveProps=t.componentWillReceiveProps,delete t.componentWillReceiveProps,n):n}},236:function(n,t){n.exports=function(n,t){if(n.indexOf)return n.indexOf(t);for(var e=0;e<n.length;++e)if(n[e]===t)return e;return-1}},237:function(n,t,e){"use strict";e(127),e(70),e(360)},238:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(e(128)),o=c(e(69)),r=function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}(e(0)),a=c(e(532)),s=c(e(44));function c(n){return n&&n.__esModule?n:{default:n}}var l={duration:3,mask:!0},u=void 0;function p(n,t){var e;u&&(u.destroy(),u=null),a.default.newInstance({prefixCls:"am-toast",style:{},transitionName:"am-fade",className:(0,o.default)((e={},(0,i.default)(e,"am-toast-mask",n),(0,i.default)(e,"am-toast-nomask",!n),e))},(function(n){return t&&t(n)}))}function f(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.duration,i=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:l.mask,a={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"},c=a[t];p(o,(function(t){u=t,t.notice({duration:e,style:{},content:c?r.createElement("div",{className:"am-toast-text am-toast-text-icon",role:"alert","aria-live":"assertive"},r.createElement(s.default,{type:c,size:"lg"}),r.createElement("div",{className:"am-toast-text-info"},n)):r.createElement("div",{className:"am-toast-text",role:"alert","aria-live":"assertive"},r.createElement("div",null,n)),closable:!0,onClose:function(){i&&i(),t.destroy(),t=null,u=null}})}))}t.default={SHORT:3,LONG:8,show:function(n,t,e){return f(n,"info",t,(function(){}),e)},info:function(n,t,e,i){return f(n,"info",t,e,i)},success:function(n,t,e,i){return f(n,"success",t,e,i)},fail:function(n,t,e,i){return f(n,"fail",t,e,i)},offline:function(n,t,e,i){return f(n,"offline",t,e,i)},loading:function(n,t,e,i){return f(n,"loading",t,e,i)},hide:function(){u&&(u.destroy(),u=null)},config:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.duration,e=void 0===t?3:t,i=n.mask;l.duration=e,!1===i&&(l.mask=!1)}},n.exports=t.default},283:function(n,t,e){"use strict";var i=e(68),o=e.n(i),r=e(128),a=e.n(r),s=e(64),c=e.n(s),l=e(65),u=e.n(l),p=e(66),f=e.n(p),m=e(67),d=e.n(m),v=e(0),h=e.n(v),y=e(12),E=e.n(y),k=e(235);function T(n){var t=[];return h.a.Children.forEach(n,(function(n){t.push(n)})),t}function g(n,t){var e=null;return n&&n.forEach((function(n){e||n&&n.key===t&&(e=n)})),e}function A(n,t,e){var i=null;return n&&n.forEach((function(n){if(n&&n.key===t&&n.props[e]){if(i)throw new Error("two child with same key for <rc-animate> children");i=n}})),i}var b=e(42),L=e.n(b),w=e(51),C=e.n(w),N={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},O={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},P=[],x=[];function S(n,t,e){n.addEventListener(t,e,!1)}function _(n,t,e){n.removeEventListener(t,e,!1)}"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var n=document.createElement("div").style;function t(t,e){for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];for(var r in o)if(r in n){e.push(o[r]);break}}}"AnimationEvent"in window||(delete N.animationstart.animation,delete O.animationend.animation),"TransitionEvent"in window||(delete N.transitionstart.transition,delete O.transitionend.transition),t(N,P),t(O,x)}();var j={startEvents:P,addStartEventListener:function(n,t){0!==P.length?P.forEach((function(e){S(n,e,t)})):window.setTimeout(t,0)},removeStartEventListener:function(n,t){0!==P.length&&P.forEach((function(e){_(n,e,t)}))},endEvents:x,addEndEventListener:function(n,t){0!==x.length?x.forEach((function(e){S(n,e,t)})):window.setTimeout(t,0)},removeEndEventListener:function(n,t){0!==x.length&&x.forEach((function(e){_(n,e,t)}))}},M=e(358),W=e.n(M),R=0!==j.endEvents.length,D=["Webkit","Moz","O","ms"],K=["-webkit-","-moz-","-o-","ms-",""];function z(n,t){for(var e=window.getComputedStyle(n,null),i="",o=0;o<K.length&&!(i=e.getPropertyValue(K[o]+t));o++);return i}function F(n){if(R){var t=parseFloat(z(n,"transition-delay"))||0,e=parseFloat(z(n,"transition-duration"))||0,i=parseFloat(z(n,"animation-delay"))||0,o=parseFloat(z(n,"animation-duration"))||0,r=Math.max(e+t,o+i);n.rcEndAnimTimeout=setTimeout((function(){n.rcEndAnimTimeout=null,n.rcEndListener&&n.rcEndListener()}),1e3*r+200)}}function V(n){n.rcEndAnimTimeout&&(clearTimeout(n.rcEndAnimTimeout),n.rcEndAnimTimeout=null)}var U=function(n,t,e){var i="object"===("undefined"===typeof t?"undefined":C()(t)),o=i?t.name:t,r=i?t.active:t+"-active",a=e,s=void 0,c=void 0,l=W()(n);return e&&"[object Object]"===Object.prototype.toString.call(e)&&(a=e.end,s=e.start,c=e.active),n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),V(n),l.remove(o),l.remove(r),j.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,a&&a())},j.addEndEventListener(n,n.rcEndListener),s&&s(),l.add(o),n.rcAnimTimeout=setTimeout((function(){n.rcAnimTimeout=null,l.add(r),c&&setTimeout(c,0),F(n)}),30),{stop:function(){n.rcEndListener&&n.rcEndListener()}}};U.style=function(n,t,e){n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),V(n),j.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,e&&e())},j.addEndEventListener(n,n.rcEndListener),n.rcAnimTimeout=setTimeout((function(){for(var e in t)t.hasOwnProperty(e)&&(n.style[e]=t[e]);n.rcAnimTimeout=null,F(n)}),0)},U.setTransition=function(n,t,e){var i=t,o=e;void 0===e&&(o=i,i=""),i=i||"",D.forEach((function(t){n.style[t+"Transition"+i]=o}))},U.isCssAnimationSupported=R;var B=U,I={isAppearSupported:function(n){return n.transitionName&&n.transitionAppear||n.animation.appear},isEnterSupported:function(n){return n.transitionName&&n.transitionEnter||n.animation.enter},isLeaveSupported:function(n){return n.transitionName&&n.transitionLeave||n.animation.leave},allowAppearCallback:function(n){return n.transitionAppear||n.animation.appear},allowEnterCallback:function(n){return n.transitionEnter||n.animation.enter},allowLeaveCallback:function(n){return n.transitionLeave||n.animation.leave}},J={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},q=function(n){function t(){return c()(this,t),f()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d()(t,n),u()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(n){I.isEnterSupported(this.props)?this.transition("enter",n):n()}},{key:"componentWillAppear",value:function(n){I.isAppearSupported(this.props)?this.transition("appear",n):n()}},{key:"componentWillLeave",value:function(n){I.isLeaveSupported(this.props)?this.transition("leave",n):n()}},{key:"transition",value:function(n,t){var e=this,i=L.a.findDOMNode(this),o=this.props,r=o.transitionName,a="object"===typeof r;this.stop();var s=function(){e.stopper=null,t()};if((R||!o.animation[n])&&r&&o[J[n]]){var c=a?r[n]:r+"-"+n,l=c+"-active";a&&r[n+"Active"]&&(l=r[n+"Active"]),this.stopper=B(i,{name:c,active:l},s)}else this.stopper=o.animation[n](i,s)}},{key:"stop",value:function(){var n=this.stopper;n&&(this.stopper=null,n.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(h.a.Component);q.propTypes={children:E.a.any,animation:E.a.any,transitionName:E.a.any};var G=q,H="rc_animate_"+Date.now();function $(n){var t=n.children;return h.a.isValidElement(t)&&!t.key?h.a.cloneElement(t,{key:H}):t}function Q(){}var X=function(n){function t(n){c()(this,t);var e=f()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return Y.call(e),e.currentlyAnimatingKeys={},e.keysToEnter=[],e.keysToLeave=[],e.state={children:T($(n))},e.childrenRefs={},e}return d()(t,n),u()(t,[{key:"componentDidMount",value:function(){var n=this,t=this.props.showProp,e=this.state.children;t&&(e=e.filter((function(n){return!!n.props[t]}))),e.forEach((function(t){t&&n.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(n){var t=this;this.nextProps=n;var e=T($(n)),i=this.props;i.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(n){t.stop(n)}));var o=i.showProp,r=this.currentlyAnimatingKeys,s=i.exclusive?T($(i)):this.state.children,c=[];o?(s.forEach((function(n){var t=n&&g(e,n.key),i=void 0;(i=t&&t.props[o]||!n.props[o]?t:h.a.cloneElement(t||n,a()({},o,!0)))&&c.push(i)})),e.forEach((function(n){n&&g(s,n.key)||c.push(n)}))):c=function(n,t){var e=[],i={},o=[];return n.forEach((function(n){n&&g(t,n.key)?o.length&&(i[n.key]=o,o=[]):o.push(n)})),t.forEach((function(n){n&&Object.prototype.hasOwnProperty.call(i,n.key)&&(e=e.concat(i[n.key])),e.push(n)})),e=e.concat(o)}(s,e),this.setState({children:c}),e.forEach((function(n){var e=n&&n.key;if(!n||!r[e]){var i=n&&g(s,e);if(o){var a=n.props[o];if(i)!A(s,e,o)&&a&&t.keysToEnter.push(e);else a&&t.keysToEnter.push(e)}else i||t.keysToEnter.push(e)}})),s.forEach((function(n){var i=n&&n.key;if(!n||!r[i]){var a=n&&g(e,i);if(o){var s=n.props[o];if(a)!A(e,i,o)&&s&&t.keysToLeave.push(i);else s&&t.keysToLeave.push(i)}else a||t.keysToLeave.push(i)}}))}},{key:"componentDidUpdate",value:function(){var n=this.keysToEnter;this.keysToEnter=[],n.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(n,t){var e=this.props.showProp;return e?A(n,t,e):g(n,t)}},{key:"stop",value:function(n){delete this.currentlyAnimatingKeys[n];var t=this.childrenRefs[n];t&&t.stop()}},{key:"render",value:function(){var n=this,t=this.props;this.nextProps=t;var e=this.state.children,i=null;e&&(i=e.map((function(e){if(null===e||void 0===e)return e;if(!e.key)throw new Error("must set key for <rc-animate> children");return h.a.createElement(G,{key:e.key,ref:function(t){n.childrenRefs[e.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},e)})));var r=t.component;if(r){var a=t;return"string"===typeof r&&(a=o()({className:t.className,style:t.style},t.componentProps)),h.a.createElement(r,a,i)}return i[0]||null}}]),t}(h.a.Component);X.isAnimate=!0,X.propTypes={className:E.a.string,style:E.a.object,component:E.a.any,componentProps:E.a.object,animation:E.a.object,transitionName:E.a.oneOfType([E.a.string,E.a.object]),transitionEnter:E.a.bool,transitionAppear:E.a.bool,exclusive:E.a.bool,transitionLeave:E.a.bool,onEnd:E.a.func,onEnter:E.a.func,onLeave:E.a.func,onAppear:E.a.func,showProp:E.a.string,children:E.a.node},X.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:Q,onEnter:Q,onLeave:Q,onAppear:Q};var Y=function(){var n=this;this.performEnter=function(t){n.childrenRefs[t]&&(n.currentlyAnimatingKeys[t]=!0,n.childrenRefs[t].componentWillEnter(n.handleDoneAdding.bind(n,t,"enter")))},this.performAppear=function(t){n.childrenRefs[t]&&(n.currentlyAnimatingKeys[t]=!0,n.childrenRefs[t].componentWillAppear(n.handleDoneAdding.bind(n,t,"appear")))},this.handleDoneAdding=function(t,e){var i=n.props;if(delete n.currentlyAnimatingKeys[t],!i.exclusive||i===n.nextProps){var o=T($(i));n.isValidChildByKey(o,t)?"appear"===e?I.allowAppearCallback(i)&&(i.onAppear(t),i.onEnd(t,!0)):I.allowEnterCallback(i)&&(i.onEnter(t),i.onEnd(t,!0)):n.performLeave(t)}},this.performLeave=function(t){n.childrenRefs[t]&&(n.currentlyAnimatingKeys[t]=!0,n.childrenRefs[t].componentWillLeave(n.handleDoneLeaving.bind(n,t)))},this.handleDoneLeaving=function(t){var e=n.props;if(delete n.currentlyAnimatingKeys[t],!e.exclusive||e===n.nextProps){var i=T($(e));if(n.isValidChildByKey(i,t))n.performEnter(t);else{var o=function(){I.allowLeaveCallback(e)&&(e.onLeave(t),e.onEnd(t,!1))};!function(n,t,e){var i=n.length===t.length;return i&&n.forEach((function(n,o){var r=t[o];n&&r&&(n&&!r||!n&&r||n.key!==r.key||e&&n.props[e]!==r.props[e])&&(i=!1)})),i}(n.state.children,i,e.showProp)?n.setState({children:i},o):o()}}}};t.a=Object(k.a)(X)},358:function(n,t,e){try{var i=e(236)}catch(s){i=e(236)}var o=/\s+/,r=Object.prototype.toString;function a(n){if(!n||!n.nodeType)throw new Error("A DOM element reference is required");this.el=n,this.list=n.classList}n.exports=function(n){return new a(n)},a.prototype.add=function(n){if(this.list)return this.list.add(n),this;var t=this.array();return~i(t,n)||t.push(n),this.el.className=t.join(" "),this},a.prototype.remove=function(n){if("[object RegExp]"==r.call(n))return this.removeMatching(n);if(this.list)return this.list.remove(n),this;var t=this.array(),e=i(t,n);return~e&&t.splice(e,1),this.el.className=t.join(" "),this},a.prototype.removeMatching=function(n){for(var t=this.array(),e=0;e<t.length;e++)n.test(t[e])&&this.remove(t[e]);return this},a.prototype.toggle=function(n,t){return this.list?("undefined"!==typeof t?t!==this.list.toggle(n,t)&&this.list.toggle(n):this.list.toggle(n),this):("undefined"!==typeof t?t?this.add(n):this.remove(n):this.has(n)?this.remove(n):this.add(n),this)},a.prototype.array=function(){var n=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(o);return""===n[0]&&n.shift(),n},a.prototype.has=a.prototype.contains=function(n){return this.list?this.list.contains(n):!!~i(this.array(),n)}},360:function(n,t,e){},532:function(n,t,e){"use strict";e.r(t);var i=e(172),o=e.n(i),r=e(128),a=e.n(r),s=e(68),c=e.n(s),l=e(64),u=e.n(l),p=e(65),f=e.n(p),m=e(66),d=e.n(m),v=e(67),h=e.n(v),y=e(0),E=e.n(y),k=e(12),T=e.n(k),g=e(42),A=e.n(g),b=e(283);var L=e(69),w=e.n(L),C=function(n){function t(){var n,e,i,o;u()(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return e=i=d()(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i.close=function(){i.clearCloseTimer(),i.props.onClose()},i.startCloseTimer=function(){i.props.duration&&(i.closeTimer=setTimeout((function(){i.close()}),1e3*i.props.duration))},i.clearCloseTimer=function(){i.closeTimer&&(clearTimeout(i.closeTimer),i.closeTimer=null)},o=e,d()(i,o)}return h()(t,n),f()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,t=this.props,e=t.prefixCls+"-notice",i=(n={},a()(n,""+e,1),a()(n,e+"-closable",t.closable),a()(n,t.className,!!t.className),n);return E.a.createElement("div",{className:w()(i),style:t.style},E.a.createElement("div",{className:e+"-content"},t.children),t.closable?E.a.createElement("a",{tabIndex:"0",onClick:this.close,className:e+"-close"},E.a.createElement("span",{className:e+"-close-x"})):null)}}]),t}(y.Component);C.propTypes={duration:T.a.number,onClose:T.a.func,children:T.a.any},C.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var N=C,O=0,P=Date.now();function x(){return"rcNotification_"+P+"_"+O++}var S=function(n){function t(){var n,e,i,o;u()(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return e=i=d()(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),i.state={notices:[]},i.add=function(n){var t=n.key=n.key||x();i.setState((function(e){var i=e.notices;if(!i.filter((function(n){return n.key===t})).length)return{notices:i.concat(n)}}))},i.remove=function(n){i.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==n}))}}))},o=e,d()(i,o)}return h()(t,n),f()(t,[{key:"getTransitionName",value:function(){var n=this.props,t=n.transitionName;return!t&&n.animation&&(t=n.prefixCls+"-"+n.animation),t}},{key:"render",value:function(){var n,t=this,e=this.props,i=this.state.notices.map((function(n){var i=function(){var n=[].slice.call(arguments,0);return 1===n.length?n[0]:function(){for(var t=0;t<n.length;t++)n[t]&&n[t].apply&&n[t].apply(this,arguments)}}(t.remove.bind(t,n.key),n.onClose);return E.a.createElement(N,c()({prefixCls:e.prefixCls},n,{onClose:i}),n.content)})),o=(n={},a()(n,e.prefixCls,1),a()(n,e.className,!!e.className),n);return E.a.createElement("div",{className:w()(o),style:e.style},E.a.createElement(b.a,{transitionName:this.getTransitionName()},i))}}]),t}(y.Component);S.propTypes={prefixCls:T.a.string,transitionName:T.a.string,animation:T.a.oneOfType([T.a.string,T.a.object]),style:T.a.object},S.defaultProps={prefixCls:"rmc-notification",animation:"fade",style:{top:65,left:"50%"}},S.newInstance=function(n,t){var e=n||{},i=e.getContainer,r=o()(e,["getContainer"]),a=void 0;i?a=i():(a=document.createElement("div"),document.body.appendChild(a));var s=!1;A.a.render(E.a.createElement(S,c()({},r,{ref:function(n){s||(s=!0,t({notice:function(t){n.add(t)},removeNotice:function(t){n.remove(t)},component:n,destroy:function(){A.a.unmountComponentAtNode(a),i||document.body.removeChild(a)}}))}})),a)};var _=S;t.default=_}}]);
//# sourceMappingURL=3.eb657ed9.chunk.js.map