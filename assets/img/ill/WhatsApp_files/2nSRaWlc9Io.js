;/*FB_PKG_DELIM*/

__d("DOMRectReadOnly",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.bottom=0,this.height=0,this.left=0,this.right=0,this.top=0,this.width=0,this.x=0,this.y=0}a.fromRect=function(b){b=b||{height:0,width:0,x:0,y:0};var c=b.height,d=b.width,e=b.x;b=b.y;var f=new a();f.x=e;f.y=b;f.width=d;f.height=c;f.top=b;f.bottom=b+c;f.right=e+d;f.left=e;return f};return a}();b="DOMRectReadOnly"in window;c=b?window.DOMRectReadOnly.fromRect:void 0;d=!!c&&"function"===typeof c;e=d?window.DOMRectReadOnly:a;f["default"]=e}),66);
__d("WAWebContextualBanner.react",["WAWebActionLinkButterbar.react","WAWebBotLightBulbIcon","WAWebExperimentIcon","WAWebFbtCommon","WAWebFlex.react","WAWebSvgButton.react","WAWebUISpacing","WAWebXIcon","react","stylex"],(function(a,b,c,d,e,f,g){var h,i,j=h||c("react"),k=30,l={action:{cursor:"x1ypdohk",$$css:!0},icon:{minWidth:"x17s4nb9",$$css:!0},bannerWrapper:{flex:"x1okw0bk",overflowX:"x6ikm8r",overflowY:"x10wlt62",transformOrigin:"x1dp6rp6",backgroundColor:"x13x2ugz",$$css:!0},banner:{minHeight:"x1wjjzik",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopColor:"xk1nh2v",borderEndColor:"x1l3ee1n",borderBottomColor:"xsbzixq",borderStartColor:"x8z2lm9",backgroundColor:"xjp690a",borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",$$css:!0},dismiss:{color:"x197um1m",minWidth:"xnei2rj",$$css:!0},text:{fontSize:"x1f6kntn",lineHeight:"x17fgdl5",color:"x1x4b484",$$css:!0}};function m(a){a=a.name;switch(a){case"experiment":return j.jsx(d("WAWebExperimentIcon").ExperimentIcon,{width:k});default:return j.jsx(d("WAWebBotLightBulbIcon").BotLightBulbIcon,{width:k})}}m.displayName=m.name+" [from "+f.id+"]";b=j.forwardRef(a);function a(a,b){a=babelHelpers["extends"]({},a);var e=a.onClick,f=a.onDismiss,g=a.canShow;a=a.config;var h=a.actionText,k=a.dismissable,n=a.iconName,o=a.showIcon;a=a.title;var p=function(){e()},q=function(){f()};q=j.jsx(c("WAWebSvgButton.react"),{"aria-label":c("WAWebFbtCommon")("Close"),Icon:d("WAWebXIcon").XIcon,onClick:q});n=o?j.jsx(m,{name:n}):null;a=a!=null?j.jsx("div",{className:"x6prxxf xdod15v xg78ir4",children:a}):null;h=h!=null?j.jsx("div",{className:(i||(i=c("stylex")))(l.text,d("WAWebUISpacing").uiMargin.top5),children:j.jsx(c("WAWebActionLinkButterbar.react"),{children:h})}):null;return!g?null:j.jsx("div",{ref:b,className:(i||(i=c("stylex")))(l.bannerWrapper,d("WAWebUISpacing").uiPadding.horiz25,d("WAWebUISpacing").uiPadding.vert10),children:j.jsxs(d("WAWebFlex.react").FlexRow,{xstyle:[l.banner,d("WAWebUISpacing").uiPadding.all12],children:[j.jsx(d("WAWebFlex.react").FlexItem,{grow:0,xstyle:[l.action,o&&l.icon,d("WAWebUISpacing").uiPadding.end10],children:n&&j.jsx("div",{onClick:p,"aria-hidden":!0,children:n})}),j.jsx(d("WAWebFlex.react").FlexItem,{grow:1,xstyle:[l.action,d("WAWebUISpacing").uiMargin.end10],children:j.jsxs("div",{onClick:p,tabIndex:0,role:"button",children:[a,e&&h]})}),k&&j.jsx(d("WAWebFlex.react").FlexItem,{grow:0,xstyle:l.dismiss,children:q})]})})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("intersectionObserverEntryIsIntersecting",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.isIntersecting!=null?a.isIntersecting:a.intersectionRatio>0||a.intersectionRect&&(a.intersectionRect.height>0||a.intersectionRect.width>0)}f["default"]=a}),66);
__d("observeIntersection",["invariant","ErrorGuard"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=typeof WeakMap==="function",k={__noRoot:!0},l=j?new WeakMap():new Map();function m(a){var b=a.threshold;if(Array.isArray(b)){var c={};b.forEach(function(a){c[String(a)]=!0});b=Object.keys(c).sort()}var d=babelHelpers["extends"]({},a,{threshold:b}),e={};Object.keys(d).sort().forEach(function(a){e[a]=d[a]});return JSON.stringify(e)}function a(a,b,d){d===void 0&&(d={});var e=m({rootMargin:d.rootMargin,scrollMargin:d.scrollMargin,threshold:d.threshold}),f=d.root||k,g=l.get(f);g==null&&(g={},l.set(f,g));var n=g[e];if(n==null){var o=void 0;Array.isArray(d.threshold)?o=d.threshold.slice():typeof d.threshold==="number"&&(o=[d.threshold]);d=new IntersectionObserver(function(a){a.forEach(function(a){n!=null||h(0,2439);var b=n.targetToCallbacksMap.get(a.target);b&&b.length>0&&b.forEach(function(b){(i||(i=c("ErrorGuard"))).applyWithGuard(b,null,[a],{name:"observeIntersection"})})})},babelHelpers["extends"]({},d,{threshold:o}));n={intersectionObserver:d,referenceCount:0,targetToCallbacksMap:j?new WeakMap():new Map()};g[e]=n}o=n.targetToCallbacksMap.get(a);o==null&&(n.intersectionObserver.observe(a),n.referenceCount+=1,o=[],n.targetToCallbacksMap.set(a,o));o.push(b);var p=!1,q=function(){if(p)return;var c=n.targetToCallbacksMap.get(a);c!=null||h(0,2440);if(c.length===1)n.intersectionObserver.unobserve(a),n.targetToCallbacksMap["delete"](a),n.referenceCount-=1,a=null;else{var d=c.indexOf(b);d!==-1||h(0,2441);c.splice(d,1)}n.referenceCount===0&&(g!=null||h(0,2442),delete g[e],f&&Object.keys(g).length===0&&l["delete"](f));b=null;a=null;f=null;p=!0};return{remove:function(){q&&(q(),q=null)}}}f.exports=a}),34);
__d("useDynamicCallbackDANGEROUS",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useLayoutEffect,k=b.useRef;function a(a){var b=k(a);j(function(){b.current=a},[a]);return i(function(){return b.current.apply(b,arguments)},[])}g["default"]=a}),98);
__d("useIntersectionObserver",["DOMRectReadOnly","ExecutionEnvironment","JSScheduler","observeIntersection","react","useDynamicCallbackDANGEROUS"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;i||(i=d("react"));e=i;var k=e.useCallback,l=e.useLayoutEffect,m=e.useRef,n={bottom:0,left:0,right:0,top:0},o=c("DOMRectReadOnly").fromRect(),p={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function q(a){var b;if(a==null)b=n;else if(typeof a==="string")return a;else typeof a==="number"?b={bottom:a,left:a,right:a,top:a}:b=babelHelpers["extends"]({},n,a);a=b;b=a.bottom;var c=a.left,d=a.right;a=a.top;return a+"px "+d+"px "+b+"px "+c+"px"}function r(a,b,d,e){var f=b.root,g=b.rootMargin,h=b.scrollMargin,i=b.threshold;f=f===null?null:f();var j=a==null||a.element!==d||a.onIntersect!==e||a.observedRoot!==f||a.rootMargin!==g||a.scrollMargin!==h||a.threshold!==i;if(j){a&&a.subscription.remove();j=c("observeIntersection")(d,e,{root:f,rootMargin:q(g),scrollMargin:q(h),threshold:i});return babelHelpers["extends"]({},b,{element:d,observedRoot:f,onIntersect:e,subscription:j})}return a}function a(a,b){var e=b.root,f=b.rootMargin,g=b.scrollMargin,h=b.threshold,i=m(null),n=m(null),q=m(null),s=m(null),t=m(!1),u=c("useDynamicCallbackDANGEROUS")(a);b=k(function(a){if(i.current===a)return;if(i.current!=null&&a==null){s.current!=null&&(j||(j=d("JSScheduler"))).cancelCallback(s.current);var b=i.current;s.current=(j||(j=d("JSScheduler"))).scheduleImmediatePriCallback(function(){i.current===null&&t.current===!1&&u({boundingClientRect:p,intersectionRatio:0,intersectionRect:p,isIntersecting:!1,isVisible:!1,rootBounds:o,target:b,time:Date.now()}),s.current=null})}i.current=a;n.current!=null&&(n.current.subscription.remove(),n.current=null);q.current!=null&&(j||(j=d("JSScheduler"))).cancelCallback(q.current);q.current=(j||(j=d("JSScheduler"))).scheduleImmediatePriCallback(function(){i.current!=null&&(n.current=r(n.current,{root:e,rootMargin:f,scrollMargin:g,threshold:h},i.current,u)),q.current=null})},[u,e,f,g,h]);l(function(){q.current!=null&&(j||(j=d("JSScheduler"))).cancelCallback(q.current);q.current=(j||(j=d("JSScheduler"))).scheduleImmediatePriCallback(function(){i.current!=null&&(n.current=r(n.current,{root:e,rootMargin:f,scrollMargin:g,threshold:h},i.current,u)),q.current=null});return function(){n.current!=null&&(n.current.subscription.remove(),n.current=null),q.current!=null&&((j||(j=d("JSScheduler"))).cancelCallback(q.current),q.current=null)}},[u,e,f,g,h]);l(function(){t.current=!1;return function(){t.current=!0}},[]);return b}function b(a,b,c){return function(a){}}f=(h||(h=c("ExecutionEnvironment"))).canUseDOM?a:b;g["default"]=f}),98);
__d("useVisibility",["intersectionObserverEntryIsIntersecting","react","useIntersectionObserver"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState,k={top:0,right:0,bottom:0,left:0};function a(a){a=a===void 0?{}:a;var b=a.onHidden,d=a.onVisible,e=a.onVisibilityChange,f=a.root;f=f===void 0?null:f;var g=a.rootMargin;g=g===void 0?k:g;a=a.threshold;a=a===void 0?0:a;var h=j(!1),l=h[0],m=h[1];h=i(function(a){a=c("intersectionObserverEntryIsIntersecting")(a);a?d==null?void 0:d():b==null?void 0:b();e==null?void 0:e(a);m(a)},[b,d,e]);h=c("useIntersectionObserver")(h,{root:f,rootMargin:g,threshold:a});return[h,l]}g["default"]=a}),98);
__d("WAWebUserPrefsContextualBanner",["$InternalEnum","WAWebUserPrefsKeys","WAWebUserPrefsStore"],(function(a,b,c,d,e,f,g){var h=b("$InternalEnum")({VIEWED:0,DISMISSED:1,CLICKED:2,SYNCED:9});function a(a){var b=c("WAWebUserPrefsStore").getUser(d("WAWebUserPrefsKeys").KEYS.BANNER_STATES);if(b==null||typeof b!=="object")return null;b=b[String(a)];a=typeof b==="object"?b==null?void 0:b.state:null;return typeof a==="number"?h.cast(a):null}function i(a,b){var e=c("WAWebUserPrefsStore").getUser(d("WAWebUserPrefsKeys").KEYS.BANNER_STATES);if(e==null||typeof e!=="object"){var f;c("WAWebUserPrefsStore").setUser(d("WAWebUserPrefsKeys").KEYS.BANNER_STATES,(f={},f[String(a)]={state:b},f))}c("WAWebUserPrefsStore").setUser(d("WAWebUserPrefsKeys").KEYS.BANNER_STATES,babelHelpers["extends"]({},e,(f={},f[String(a)]={state:b},f)))}function e(a){i(a,null)}g.BannerState=h;g.getBannerState=a;g.setBannerState=i;g.clearBannerState=e}),98);
__d("useWAWebContextualBanner",["WALogger","WATimeUtils","WAWebBannerEventWamEvent","WAWebContextualBannerConfig","WAWebNuxSync","WAWebUserPrefsContextualBanner","WAWebUserPrefsNuxPreferences","WAWebWamEnumBannerOperations","react"],(function(a,b,c,d,e,f,g){var h;function i(){var a=babelHelpers.taggedTemplateLiteralLoose(["[banner] invalid end time for "," in config: ",""]);i=function(){return a};return a}function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["[banner] invalid start time for "," in config: ",""]);j=function(){return a};return a}b=h||d("react");var k=b.useCallback,l=b.useMemo;function m(a){var b=a.id,c=a.startT;a=a.endT;var e=d("WATimeUtils").convertISO8601DateFormatToUnixTime(c),f=d("WATimeUtils").convertISO8601DateFormatToUnixTime(a);if(e!=null&&!d("WATimeUtils").isInFuture(e)&&f!=null&&d("WATimeUtils").isInFuture(f))return!0;e==null&&d("WALogger").ERROR(j(),b,c);f==null&&d("WALogger").ERROR(i(),b,a);return!1}function n(a){var b=d("WAWebUserPrefsContextualBanner").getBannerState(a);if(b===d("WAWebUserPrefsContextualBanner").BannerState.SYNCED||b===d("WAWebUserPrefsContextualBanner").BannerState.CLICKED||b===d("WAWebUserPrefsContextualBanner").BannerState.DISMISSED)return!0;b=d("WAWebUserPrefsNuxPreferences").getNuxSyncList();b=b.includes(String(a));if(b){d("WAWebUserPrefsContextualBanner").setBannerState(a,d("WAWebUserPrefsContextualBanner").BannerState.SYNCED);return!0}return!1}var o=function(a){var b=!0;(a==null?void 0:a.condition)!=null&&(b=a.condition());return a!=null&&m(a)&&!n(a.id)&&b};function p(a){switch(a){case d("WAWebUserPrefsContextualBanner").BannerState.CLICKED:return d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK;case d("WAWebUserPrefsContextualBanner").BannerState.DISMISSED:return d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS;case d("WAWebUserPrefsContextualBanner").BannerState.VIEWED:return d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN;case d("WAWebUserPrefsContextualBanner").BannerState.SYNCED:return null}}function q(a,b){if(!a)return;b=p(b);if(a.metricField&&b){a={bannerType:a.metricField,bannerOperation:b};new(d("WAWebBannerEventWamEvent").BannerEventWamEvent)(a).commit()}}function a(a){var b=l(function(){return new Map(a.map(function(a){return[String(a),d("WAWebContextualBannerConfig").getContextualBannerConfig(a)]}))},[a]),e=k(function(a){return o(b.get(String(a)))},[b]),f=k(function(a){var c=b.get(String(a));c&&(d("WAWebUserPrefsContextualBanner").setBannerState(a,d("WAWebUserPrefsContextualBanner").BannerState.VIEWED),q(c,d("WAWebUserPrefsContextualBanner").BannerState.VIEWED))},[b]),g=k(function(a){var e=b.get(String(a));(e==null?void 0:e.syncEnabled)===!0&&void c("WAWebNuxSync").acknowledgeNux(a);d("WAWebUserPrefsContextualBanner").setBannerState(a,d("WAWebUserPrefsContextualBanner").BannerState.CLICKED);q(e,d("WAWebUserPrefsContextualBanner").BannerState.CLICKED)},[b]),h=k(function(a){var e=b.get(String(a));(e==null?void 0:e.syncEnabled)===!0&&void c("WAWebNuxSync").acknowledgeNux(a);d("WAWebUserPrefsContextualBanner").setBannerState(a,d("WAWebUserPrefsContextualBanner").BannerState.DISMISSED);q(e,d("WAWebUserPrefsContextualBanner").BannerState.DISMISSED)},[b]),i=k(function(a){var e;((e=b.get(String(a)))==null?void 0:e.syncEnabled)===!0&&void c("WAWebNuxSync").unAcknowledgeNux(a);d("WAWebUserPrefsContextualBanner").clearBannerState(a)},[b]);return[e,f,g,h,i]}g["default"]=a}),98);
__d("WAWebContextualBannerWrapper.react",["WAWebContextualBanner.react","WAWebContextualBannerConfig","WAWebVelocityTransitionGroup","react","useVisibility","useWAWebCallbackOnce","useWAWebContextualBanner"],(function(a,b,c,d,e,f,g){var h,i;b=i||d("react");var j=h||(h=c("react")),k=b.useCallback,l=b.useState;function a(a){var b=a.bannerListOrderedByPriority;a=c("useWAWebContextualBanner")(b.map(function(a){return a.id}));var e=a[0],f=a[1],g=a[2],h=a[3],i=a[4],m=k(function(){return b.find(function(a){a=a.id;return e(a)})},[b,e]);a=l(m);var n=a[0],o=a[1],p=c("useWAWebCallbackOnce")(f,[n]);a=c("useVisibility")({onVisible:function(){n&&p(n.id)}});f=a[0];var q=k(function(){o(m())},[m]);if(n==null)return;a=j.jsx(c("WAWebContextualBanner.react"),{ref:f,canShow:e(n.id),config:d("WAWebContextualBannerConfig").getContextualBannerConfig(n.id),onClick:function(){g(n.id),n.onClick==null?void 0:n.onClick(),q()},onDismiss:function(){h(n.id),q()},onReset:function(){i(n.id)}});return j.jsx(c("WAWebVelocityTransitionGroup"),{transitionName:"butterbar",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);