(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));

/*! Video.js v4.4.3 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */ 

(function() {var b=void 0,f=!0,h=null,l=!1;function m(){return function(){}}function p(a){return function(){return this[a]}}function r(a){return function(){return a}}var t;document.createElement("video");document.createElement("audio");document.createElement("track");function u(a,c,d){if("string"===typeof a){0===a.indexOf("#")&&(a=a.slice(1));if(u.va[a])return u.va[a];a=u.u(a)}if(!a||!a.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");return a.player||new u.Player(a,c,d)}

var videojs=u;window.Wd=window.Xd=u;u.Rb="4.4";u.Ec="https:"==document.location.protocol?"https://":"http://";u.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};

"GENERATED_CDN_VSN"!==u.Rb&&(videojs.options.flash.swf=u.Ec+"vjs.zencdn.net/"+u.Rb+"/video-js.swf");u.va={};"function"===typeof define&&define.amd?define([],function(){return videojs}):"object"===typeof exports&&"object"===typeof module&&(module.exports=videojs);u.ka=u.CoreObject=m();

u.ka.extend=function(a){var c,d;a=a||{};c=a.init||a.h||this.prototype.init||this.prototype.h||m();d=function(){c.apply(this,arguments)};d.prototype=u.k.create(this.prototype);d.prototype.constructor=d;d.extend=u.ka.extend;d.create=u.ka.create;for(var e in a)a.hasOwnProperty(e)&&(d.prototype[e]=a[e]);return d};u.ka.create=function(){var a=u.k.create(this.prototype);this.apply(a,arguments);return a};

u.d=function(a,c,d){var e=u.getData(a);e.z||(e.z={});e.z[c]||(e.z[c]=[]);d.s||(d.s=u.s++);e.z[c].push(d);e.U||(e.disabled=l,e.U=function(c){if(!e.disabled){c=u.ic(c);var d=e.z[c.type];if(d)for(var d=d.slice(0),k=0,q=d.length;k<q&&!c.pc();k++)d[k].call(a,c)}});1==e.z[c].length&&(document.addEventListener?a.addEventListener(c,e.U,l):document.attachEvent&&a.attachEvent("on"+c,e.U))};

u.o=function(a,c,d){if(u.mc(a)){var e=u.getData(a);if(e.z)if(c){var g=e.z[c];if(g){if(d){if(d.s)for(e=0;e<g.length;e++)g[e].s===d.s&&g.splice(e--,1)}else e.z[c]=[];u.ec(a,c)}}else for(g in e.z)c=g,e.z[c]=[],u.ec(a,c)}};u.ec=function(a,c){var d=u.getData(a);0===d.z[c].length&&(delete d.z[c],document.removeEventListener?a.removeEventListener(c,d.U,l):document.detachEvent&&a.detachEvent("on"+c,d.U));u.Ab(d.z)&&(delete d.z,delete d.U,delete d.disabled);u.Ab(d)&&u.tc(a)};

u.ic=function(a){function c(){return f}function d(){return l}if(!a||!a.Bb){var e=a||window.event;a={};for(var g in e)"layerX"!==g&&("layerY"!==g&&"keyboardEvent.keyLocation"!==g)&&("returnValue"==g&&e.preventDefault||(a[g]=e[g]));a.target||(a.target=a.srcElement||document);a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;a.preventDefault=function(){e.preventDefault&&e.preventDefault();a.returnValue=l;a.zb=c};a.zb=d;a.stopPropagation=function(){e.stopPropagation&&e.stopPropagation();

a.cancelBubble=f;a.Bb=c};a.Bb=d;a.stopImmediatePropagation=function(){e.stopImmediatePropagation&&e.stopImmediatePropagation();a.pc=c;a.stopPropagation()};a.pc=d;if(a.clientX!=h){g=document.documentElement;var j=document.body;a.pageX=a.clientX+(g&&g.scrollLeft||j&&j.scrollLeft||0)-(g&&g.clientLeft||j&&j.clientLeft||0);a.pageY=a.clientY+(g&&g.scrollTop||j&&j.scrollTop||0)-(g&&g.clientTop||j&&j.clientTop||0)}a.which=a.charCode||a.keyCode;a.button!=h&&(a.button=a.button&1?0:a.button&4?1:a.button&2?2:

0)}return a};u.j=function(a,c){var d=u.mc(a)?u.getData(a):{},e=a.parentNode||a.ownerDocument;"string"===typeof c&&(c={type:c,target:a});c=u.ic(c);d.U&&d.U.call(a,c);if(e&&!c.Bb()&&c.bubbles!==l)u.j(e,c);else if(!e&&!c.zb()&&(d=u.getData(c.target),c.target[c.type])){d.disabled=f;if("function"===typeof c.target[c.type])c.target[c.type]();d.disabled=l}return!c.zb()};u.T=function(a,c,d){function e(){u.o(a,c,e);d.apply(this,arguments)}e.s=d.s=d.s||u.s++;u.d(a,c,e)};var v=Object.prototype.hasOwnProperty;

u.e=function(a,c){var d,e;d=document.createElement(a||"div");for(e in c)v.call(c,e)&&(-1!==e.indexOf("aria-")||"role"==e?d.setAttribute(e,c[e]):d[e]=c[e]);return d};u.Z=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};u.k={};u.k.create=Object.create||function(a){function c(){}c.prototype=a;return new c};u.k.ra=function(a,c,d){for(var e in a)v.call(a,e)&&c.call(d||this,e,a[e])};u.k.B=function(a,c){if(!c)return a;for(var d in c)v.call(c,d)&&(a[d]=c[d]);return a};

u.k.Wc=function(a,c){var d,e,g;a=u.k.copy(a);for(d in c)v.call(c,d)&&(e=a[d],g=c[d],a[d]=u.k.Ma(e)&&u.k.Ma(g)?u.k.Wc(e,g):c[d]);return a};u.k.copy=function(a){return u.k.B({},a)};u.k.Ma=function(a){return!!a&&"object"===typeof a&&"[object Object]"===a.toString()&&a.constructor===Object};u.bind=function(a,c,d){function e(){return c.apply(a,arguments)}c.s||(c.s=u.s++);e.s=d?d+"_"+c.s:c.s;return e};u.pa={};u.s=1;u.expando="vdata"+(new Date).getTime();

u.getData=function(a){var c=a[u.expando];c||(c=a[u.expando]=u.s++,u.pa[c]={});return u.pa[c]};u.mc=function(a){a=a[u.expando];return!(!a||u.Ab(u.pa[a]))};u.tc=function(a){var c=a[u.expando];if(c){delete u.pa[c];try{delete a[u.expando]}catch(d){a.removeAttribute?a.removeAttribute(u.expando):a[u.expando]=h}}};u.Ab=function(a){for(var c in a)if(a[c]!==h)return l;return f};u.n=function(a,c){-1==(" "+a.className+" ").indexOf(" "+c+" ")&&(a.className=""===a.className?c:a.className+" "+c)};

u.t=function(a,c){var d,e;if(-1!=a.className.indexOf(c)){d=a.className.split(" ");for(e=d.length-1;0<=e;e--)d[e]===c&&d.splice(e,1);a.className=d.join(" ")}};u.W=u.e("video");u.I=navigator.userAgent;u.Kc=/iPhone/i.test(u.I);u.Jc=/iPad/i.test(u.I);u.Lc=/iPod/i.test(u.I);u.Ic=u.Kc||u.Jc||u.Lc;var aa=u,w;var x=u.I.match(/OS (\d+)_/i);w=x&&x[1]?x[1]:b;aa.Id=w;u.Hc=/Android/i.test(u.I);var ba=u,y;var z=u.I.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),A,B;

z?(A=z[1]&&parseFloat(z[1]),B=z[2]&&parseFloat(z[2]),y=A&&B?parseFloat(z[1]+"."+z[2]):A?A:h):y=h;ba.Fc=y;u.Mc=u.Hc&&/webkit/i.test(u.I)&&2.3>u.Fc;u.Ub=/Firefox/i.test(u.I);u.Jd=/Chrome/i.test(u.I);u.$b=!!("ontouchstart"in window||window.Gc&&document instanceof window.Gc);

u.wb=function(a){var c,d,e,g;c={};if(a&&a.attributes&&0<a.attributes.length){d=a.attributes;for(var j=d.length-1;0<=j;j--){e=d[j].name;g=d[j].value;if("boolean"===typeof a[e]||-1!==",autoplay,controls,loop,muted,default,".indexOf(","+e+","))g=g!==h?f:l;c[e]=g}}return c};

u.Nd=function(a,c){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(c):a.currentStyle&&(d=a["client"+c.substr(0,1).toUpperCase()+c.substr(1)]+"px");return d};u.yb=function(a,c){c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a)};u.Ob={};u.u=function(a){0===a.indexOf("#")&&(a=a.slice(1));return document.getElementById(a)};

u.ta=function(a,c){c=c||a;var d=Math.floor(a%60),e=Math.floor(a/60%60),g=Math.floor(a/3600),j=Math.floor(c/60%60),k=Math.floor(c/3600);if(isNaN(a)||Infinity===a)g=e=d="-";g=0<g||0<k?g+":":"";return g+(((g||10<=j)&&10>e?"0"+e:e)+":")+(10>d?"0"+d:d)};u.Sc=function(){document.body.focus();document.onselectstart=r(l)};u.Dd=function(){document.onselectstart=r(f)};u.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")};u.round=function(a,c){c||(c=0);return Math.round(a*Math.pow(10,c))/Math.pow(10,c)};

u.sb=function(a,c){return{length:1,start:function(){return a},end:function(){return c}}};

u.get=function(a,c,d){var e,g;"undefined"===typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw Error("This browser does not support XMLHttpRequest.");});g=new XMLHttpRequest;try{g.open("GET",a)}catch(j){d(j)}e=0===a.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===a.indexOf("http");

g.onreadystatechange=function(){4===g.readyState&&(200===g.status||e&&0===g.status?c(g.responseText):d&&d())};try{g.send()}catch(k){d&&d(k)}};u.vd=function(a){try{var c=window.localStorage||l;c&&(c.volume=a)}catch(d){22==d.code||1014==d.code?u.log("LocalStorage Full (VideoJS)",d):18==d.code?u.log("LocalStorage not allowed (VideoJS)",d):u.log("LocalStorage Error (VideoJS)",d)}};u.kc=function(a){a.match(/^https?:\/\//)||(a=u.e("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href);return a};

u.log=function(){u.log.history=u.log.history||[];u.log.history.push(arguments);window.console&&window.console.log(Array.prototype.slice.call(arguments))};u.cd=function(a){var c,d;a.getBoundingClientRect&&a.parentNode&&(c=a.getBoundingClientRect());if(!c)return{left:0,top:0};a=document.documentElement;d=document.body;return{left:c.left+(window.pageXOffset||d.scrollLeft)-(a.clientLeft||d.clientLeft||0),top:c.top+(window.pageYOffset||d.scrollTop)-(a.clientTop||d.clientTop||0)}};u.ja={};

u.ja.Fb=function(a,c){var d,e,g;a=u.k.copy(a);for(d in c)c.hasOwnProperty(d)&&(e=a[d],g=c[d],a[d]=u.k.Ma(e)&&u.k.Ma(g)?u.ja.Fb(e,g):c[d]);return a};

u.b=u.ka.extend({h:function(a,c,d){this.c=a;this.g=u.k.copy(this.g);c=this.options(c);this.Q=c.id||(c.el&&c.el.id?c.el.id:a.id()+"_component_"+u.s++);this.kd=c.name||h;this.a=c.el||this.e();this.J=[];this.Ia={};this.Ja={};this.nc();this.H(d);if(c.uc!==l){var e,g;e=u.bind(this.C(),this.C().reportUserActivity);this.d("touchstart",function(){e();clearInterval(g);g=setInterval(e,250)});a=function(){e();clearInterval(g)};this.d("touchmove",e);this.d("touchend",a);this.d("touchcancel",a)}}});t=u.b.prototype;

t.dispose=function(){this.j({type:"dispose",bubbles:l});if(this.J)for(var a=this.J.length-1;0<=a;a--)this.J[a].dispose&&this.J[a].dispose();this.Ja=this.Ia=this.J=h;this.o();this.a.parentNode&&this.a.parentNode.removeChild(this.a);u.tc(this.a);this.a=h};t.c=f;t.C=p("c");t.options=function(a){return a===b?this.g:this.g=u.ja.Fb(this.g,a)};t.e=function(a,c){return u.e(a,c)};t.u=p("a");t.Ka=function(){return this.F||this.a};t.id=p("Q");t.name=p("kd");t.children=p("J");t.ed=function(a){return this.Ia[a]};

t.fa=function(a){return this.Ja[a]};t.Y=function(a,c){var d,e;"string"===typeof a?(e=a,c=c||{},d=c.componentClass||u.Z(e),c.name=e,d=new window.videojs[d](this.c||this,c)):d=a;this.J.push(d);"function"===typeof d.id&&(this.Ia[d.id()]=d);(e=e||d.name&&d.name())&&(this.Ja[e]=d);"function"===typeof d.el&&d.el()&&this.Ka().appendChild(d.el());return d};

t.removeChild=function(a){"string"===typeof a&&(a=this.fa(a));if(a&&this.J){for(var c=l,d=this.J.length-1;0<=d;d--)if(this.J[d]===a){c=f;this.J.splice(d,1);break}c&&(this.Ia[a.id]=h,this.Ja[a.name]=h,(c=a.u())&&c.parentNode===this.Ka()&&this.Ka().removeChild(a.u()))}};t.nc=function(){var a=this.g;if(a&&a.children){var c=this;u.k.ra(a.children,function(a,e){e!==l&&!e.loadEvent&&(c[a]=c.Y(a,e))})}};t.P=r("");t.d=function(a,c){u.d(this.a,a,u.bind(this,c));return this};

t.o=function(a,c){u.o(this.a,a,c);return this};t.T=function(a,c){u.T(this.a,a,u.bind(this,c));return this};t.j=function(a,c){u.j(this.a,a,c);return this};t.H=function(a){a&&(this.aa?a.call(this):(this.Ta===b&&(this.Ta=[]),this.Ta.push(a)));return this};t.Wa=function(){this.aa=f;var a=this.Ta;if(a&&0<a.length){for(var c=0,d=a.length;c<d;c++)a[c].call(this);this.Ta=[];this.j("ready")}};t.n=function(a){u.n(this.a,a);return this};t.t=function(a){u.t(this.a,a);return this};

t.show=function(){this.a.style.display="block";return this};t.D=function(){this.a.style.display="none";return this};function D(a){a.t("vjs-lock-showing")}t.disable=function(){this.D();this.show=m()};t.width=function(a,c){return E(this,"width",a,c)};t.height=function(a,c){return E(this,"height",a,c)};t.Yc=function(a,c){return this.width(a,f).height(c)};

function E(a,c,d,e){if(d!==b)return a.a.style[c]=-1!==(""+d).indexOf("%")||-1!==(""+d).indexOf("px")?d:"auto"===d?"":d+"px",e||a.j("resize"),a;if(!a.a)return 0;d=a.a.style[c];e=d.indexOf("px");return-1!==e?parseInt(d.slice(0,e),10):parseInt(a.a["offset"+u.Z(c)],10)}

u.q=u.b.extend({h:function(a,c){u.b.call(this,a,c);var d=l;this.d("touchstart",function(a){a.preventDefault();d=f});this.d("touchmove",function(){d=l});var e=this;this.d("touchend",function(a){d&&e.p(a);a.preventDefault()});this.d("click",this.p);this.d("focus",this.Pa);this.d("blur",this.Oa)}});t=u.q.prototype;

t.e=function(a,c){c=u.k.B({className:this.P(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.oa||"Need Text")+"</span></div>",role:"button","aria-live":"polite",tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.P=function(){return"vjs-control "+u.b.prototype.P.call(this)};t.p=m();t.Pa=function(){u.d(document,"keyup",u.bind(this,this.ba))};t.ba=function(a){if(32==a.which||13==a.which)a.preventDefault(),this.p()};

t.Oa=function(){u.o(document,"keyup",u.bind(this,this.ba))};u.N=u.b.extend({h:function(a,c){u.b.call(this,a,c);this.Rc=this.fa(this.g.barName);this.handle=this.fa(this.g.handleName);a.d(this.rc,u.bind(this,this.update));this.d("mousedown",this.Qa);this.d("touchstart",this.Qa);this.d("focus",this.Pa);this.d("blur",this.Oa);this.d("click",this.p);this.c.d("controlsvisible",u.bind(this,this.update));a.H(u.bind(this,this.update));this.O={}}});t=u.N.prototype;

t.e=function(a,c){c=c||{};c.className+=" vjs-slider";c=u.k.B({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},c);return u.b.prototype.e.call(this,a,c)};t.Qa=function(a){a.preventDefault();u.Sc();this.O.move=u.bind(this,this.Hb);this.O.end=u.bind(this,this.Ib);u.d(document,"mousemove",this.O.move);u.d(document,"mouseup",this.O.end);u.d(document,"touchmove",this.O.move);u.d(document,"touchend",this.O.end);this.Hb(a)};

t.Ib=function(){u.Dd();u.o(document,"mousemove",this.O.move,l);u.o(document,"mouseup",this.O.end,l);u.o(document,"touchmove",this.O.move,l);u.o(document,"touchend",this.O.end,l);this.update()};t.update=function(){if(this.a){var a,c=this.xb(),d=this.handle,e=this.Rc;isNaN(c)&&(c=0);a=c;if(d){a=this.a.offsetWidth;var g=d.u().offsetWidth;a=g?g/a:0;c*=1-a;a=c+a/2;d.u().style.left=u.round(100*c,2)+"%"}e.u().style.width=u.round(100*a,2)+"%"}};

function F(a,c){var d,e,g,j;d=a.a;e=u.cd(d);j=g=d.offsetWidth;d=a.handle;if(a.g.Ed)return j=e.top,e=c.changedTouches?c.changedTouches[0].pageY:c.pageY,d&&(d=d.u().offsetHeight,j+=d/2,g-=d),Math.max(0,Math.min(1,(j-e+g)/g));g=e.left;e=c.changedTouches?c.changedTouches[0].pageX:c.pageX;d&&(d=d.u().offsetWidth,g+=d/2,j-=d);return Math.max(0,Math.min(1,(e-g)/j))}t.Pa=function(){u.d(document,"keyup",u.bind(this,this.ba))};

t.ba=function(a){37==a.which?(a.preventDefault(),this.xc()):39==a.which&&(a.preventDefault(),this.yc())};t.Oa=function(){u.o(document,"keyup",u.bind(this,this.ba))};t.p=function(a){a.stopImmediatePropagation();a.preventDefault()};u.V=u.b.extend();u.V.prototype.defaultValue=0;u.V.prototype.e=function(a,c){c=c||{};c.className+=" vjs-slider-handle";c=u.k.B({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},c);return u.b.prototype.e.call(this,"div",c)};u.la=u.b.extend();

function ca(a,c){a.Y(c);c.d("click",u.bind(a,function(){D(this)}))}u.la.prototype.e=function(){var a=this.options().Uc||"ul";this.F=u.e(a,{className:"vjs-menu-content"});a=u.b.prototype.e.call(this,"div",{append:this.F,className:"vjs-menu"});a.appendChild(this.F);u.d(a,"click",function(a){a.preventDefault();a.stopImmediatePropagation()});return a};u.M=u.q.extend({h:function(a,c){u.q.call(this,a,c);this.selected(c.selected)}});

u.M.prototype.e=function(a,c){return u.q.prototype.e.call(this,"li",u.k.B({className:"vjs-menu-item",innerHTML:this.g.label},c))};u.M.prototype.p=function(){this.selected(f)};u.M.prototype.selected=function(a){a?(this.n("vjs-selected"),this.a.setAttribute("aria-selected",f)):(this.t("vjs-selected"),this.a.setAttribute("aria-selected",l))};

u.R=u.q.extend({h:function(a,c){u.q.call(this,a,c);this.ua=this.La();this.Y(this.ua);this.K&&0===this.K.length&&this.D();this.d("keyup",this.ba);this.a.setAttribute("aria-haspopup",f);this.a.setAttribute("role","button")}});t=u.R.prototype;t.na=l;t.La=function(){var a=new u.la(this.c);this.options().title&&a.u().appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),Bd:-1}));if(this.K=this.createItems())for(var c=0;c<this.K.length;c++)ca(a,this.K[c]);return a};t.qa=m();

t.P=function(){return this.className+" vjs-menu-button "+u.q.prototype.P.call(this)};t.Pa=m();t.Oa=m();t.p=function(){this.T("mouseout",u.bind(this,function(){D(this.ua);this.a.blur()}));this.na?G(this):H(this)};t.ba=function(a){a.preventDefault();32==a.which||13==a.which?this.na?G(this):H(this):27==a.which&&this.na&&G(this)};function H(a){a.na=f;a.ua.n("vjs-lock-showing");a.a.setAttribute("aria-pressed",f);a.K&&0<a.K.length&&a.K[0].u().focus()}

function G(a){a.na=l;D(a.ua);a.a.setAttribute("aria-pressed",l)}

u.Player=u.b.extend({h:function(a,c,d){this.L=a;a.id=a.id||"vjs_video_"+u.s++;c=u.k.B(da(a),c);this.v={};this.sc=c.poster;this.rb=c.controls;a.controls=l;c.uc=l;u.b.call(this,this,c,d);this.controls()?this.n("vjs-controls-enabled"):this.n("vjs-controls-disabled");this.T("play",function(a){u.j(this.a,{type:"firstplay",target:this.a})||(a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation())});this.d("ended",this.ld);this.d("play",this.Kb);this.d("firstplay",this.md);this.d("pause",this.Jb);

this.d("progress",this.od);this.d("durationchange",this.qc);this.d("error",this.Gb);this.d("fullscreenchange",this.nd);u.va[this.Q]=this;c.plugins&&u.k.ra(c.plugins,function(a,c){this[a](c)},this);var e,g,j,k;e=u.bind(this,this.reportUserActivity);this.d("mousedown",function(){e();clearInterval(g);g=setInterval(e,250)});this.d("mousemove",e);this.d("mouseup",function(){e();clearInterval(g)});this.d("keydown",e);this.d("keyup",e);j=setInterval(u.bind(this,function(){this.ia&&(this.ia=l,this.userActive(f),

clearTimeout(k),k=setTimeout(u.bind(this,function(){this.ia||this.userActive(l)}),2E3))}),250);this.d("dispose",function(){clearInterval(j);clearTimeout(k)})}});t=u.Player.prototype;t.g=u.options;t.dispose=function(){this.j("dispose");this.o("dispose");u.va[this.Q]=h;this.L&&this.L.player&&(this.L.player=h);this.a&&this.a.player&&(this.a.player=h);clearInterval(this.Sa);this.wa();this.i&&this.i.dispose();u.b.prototype.dispose.call(this)};

function da(a){var c={sources:[],tracks:[]};u.k.B(c,u.wb(a));if(a.hasChildNodes()){var d,e,g,j;a=a.childNodes;g=0;for(j=a.length;g<j;g++)d=a[g],e=d.nodeName.toLowerCase(),"source"===e?c.sources.push(u.wb(d)):"track"===e&&c.tracks.push(u.wb(d))}return c}

t.e=function(){var a=this.a=u.b.prototype.e.call(this,"div"),c=this.L;c.removeAttribute("width");c.removeAttribute("height");if(c.hasChildNodes()){var d,e,g,j,k;d=c.childNodes;e=d.length;for(k=[];e--;)g=d[e],j=g.nodeName.toLowerCase(),"track"===j&&k.push(g);for(d=0;d<k.length;d++)c.removeChild(k[d])}a.id=c.id;a.className=c.className;c.id+="_html5_api";c.className="vjs-tech";c.player=a.player=this;this.n("vjs-paused");this.width(this.g.width,f);this.height(this.g.height,f);c.parentNode&&c.parentNode.insertBefore(a,

c);u.yb(c,a);return a};

function I(a,c,d){a.i&&(a.aa=l,a.i.dispose(),a.Db&&(a.Db=l,clearInterval(a.Sa)),a.Eb&&J(a),a.i=l);"Html5"!==c&&a.L&&(u.l.gc(a.L),a.L=h);a.xa=c;a.aa=l;var e=u.k.B({source:d,parentEl:a.a},a.g[c.toLowerCase()]);d&&(d.src==a.v.src&&0<a.v.currentTime&&(e.startTime=a.v.currentTime),a.v.src=d.src);a.i=new window.videojs[c](a,e);a.i.H(function(){this.c.Wa();if(!this.m.progressEvents){var a=this.c;a.Db=f;a.Sa=setInterval(u.bind(a,function(){this.v.mb<this.buffered().end(0)?this.j("progress"):1==this.bufferedPercent()&&

(clearInterval(this.Sa),this.j("progress"))}),500);a.i.T("progress",function(){this.m.progressEvents=f;var a=this.c;a.Db=l;clearInterval(a.Sa)})}this.m.timeupdateEvents||(a=this.c,a.Eb=f,a.d("play",a.Bc),a.d("pause",a.wa),a.i.T("timeupdate",function(){this.m.timeupdateEvents=f;J(this.c)}))})}function J(a){a.Eb=l;a.wa();a.o("play",a.Bc);a.o("pause",a.wa)}t.Bc=function(){this.fc&&this.wa();this.fc=setInterval(u.bind(this,function(){this.j("timeupdate")}),250)};t.wa=function(){clearInterval(this.fc)};

t.Kb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing")};t.md=function(){this.g.starttime&&this.currentTime(this.g.starttime);this.n("vjs-has-started")};t.Jb=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused")};t.od=function(){1==this.bufferedPercent()&&this.j("loadedalldata")};t.ld=function(){this.g.loop&&(this.currentTime(0),this.play())};t.qc=function(){var a=K(this,"duration");a&&this.duration(a)};t.nd=function(){this.isFullScreen()?this.n("vjs-fullscreen"):this.t("vjs-fullscreen")};

t.Gb=function(a){u.log("Video Error",a)};function L(a,c,d){if(a.i&&!a.i.aa)a.i.H(function(){this[c](d)});else try{a.i[c](d)}catch(e){throw u.log(e),e;}}function K(a,c){if(a.i&&a.i.aa)try{return a.i[c]()}catch(d){throw a.i[c]===b?u.log("Video.js: "+c+" method not defined for "+a.xa+" playback technology.",d):"TypeError"==d.name?(u.log("Video.js: "+c+" unavailable on "+a.xa+" playback technology element.",d),a.i.aa=l):u.log(d),d;}}t.play=function(){L(this,"play");return this};

t.pause=function(){L(this,"pause");return this};t.paused=function(){return K(this,"paused")===l?l:f};t.currentTime=function(a){return a!==b?(L(this,"setCurrentTime",a),this.Eb&&this.j("timeupdate"),this):this.v.currentTime=K(this,"currentTime")||0};t.duration=function(a){if(a!==b)return this.v.duration=parseFloat(a),this;this.v.duration===b&&this.qc();return this.v.duration||0};

t.buffered=function(){var a=K(this,"buffered"),c=a.length-1,d=this.v.mb=this.v.mb||0;a&&(0<=c&&a.end(c)!==d)&&(d=a.end(c),this.v.mb=d);return u.sb(0,d)};t.bufferedPercent=function(){return this.duration()?this.buffered().end(0)/this.duration():0};t.volume=function(a){if(a!==b)return a=Math.max(0,Math.min(1,parseFloat(a))),this.v.volume=a,L(this,"setVolume",a),u.vd(a),this;a=parseFloat(K(this,"volume"));return isNaN(a)?1:a};

t.muted=function(a){return a!==b?(L(this,"setMuted",a),this):K(this,"muted")||l};t.Va=function(){return K(this,"supportsFullScreen")||l};t.oc=l;t.isFullScreen=function(a){return a!==b?(this.oc=a,this):this.oc};

t.requestFullScreen=function(){var a=u.Ob.requestFullScreen;this.isFullScreen(f);a?(u.d(document,a.ub,u.bind(this,function(c){this.isFullScreen(document[a.isFullScreen]);this.isFullScreen()===l&&u.o(document,a.ub,arguments.callee);this.j("fullscreenchange")})),this.a[a.vc]()):this.i.Va()?L(this,"enterFullScreen"):(this.fd=f,this.Zc=document.documentElement.style.overflow,u.d(document,"keydown",u.bind(this,this.jc)),document.documentElement.style.overflow="hidden",u.n(document.body,"vjs-full-window"),

this.j("enterFullWindow"),this.j("fullscreenchange"));return this};t.cancelFullScreen=function(){var a=u.Ob.requestFullScreen;this.isFullScreen(l);if(a)document[a.ob]();else this.i.Va()?L(this,"exitFullScreen"):(M(this),this.j("fullscreenchange"));return this};t.jc=function(a){27===a.keyCode&&(this.isFullScreen()===f?this.cancelFullScreen():M(this))};

function M(a){a.fd=l;u.o(document,"keydown",a.jc);document.documentElement.style.overflow=a.Zc;u.t(document.body,"vjs-full-window");a.j("exitFullWindow")}

t.src=function(a){if(a instanceof Array){var c;a:{c=a;for(var d=0,e=this.g.techOrder;d<e.length;d++){var g=u.Z(e[d]),j=window.videojs[g];if(j.isSupported())for(var k=0,q=c;k<q.length;k++){var n=q[k];if(j.canPlaySource(n)){c={source:n,i:g};break a}}}c=l}c?(a=c.source,c=c.i,c==this.xa?this.src(a):I(this,c,a)):this.a.appendChild(u.e("p",{innerHTML:this.options().notSupportedMessage}))}else a instanceof Object?window.videojs[this.xa].canPlaySource(a)?this.src(a.src):this.src([a]):(this.v.src=a,this.aa?

(L(this,"src",a),"auto"==this.g.preload&&this.load(),this.g.autoplay&&this.play()):this.H(function(){this.src(a)}));return this};t.load=function(){L(this,"load");return this};t.currentSrc=function(){return K(this,"currentSrc")||this.v.src||""};t.Ra=function(a){return a!==b?(L(this,"setPreload",a),this.g.preload=a,this):K(this,"preload")};t.autoplay=function(a){return a!==b?(L(this,"setAutoplay",a),this.g.autoplay=a,this):K(this,"autoplay")};

t.loop=function(a){return a!==b?(L(this,"setLoop",a),this.g.loop=a,this):K(this,"loop")};t.poster=function(a){if(a===b)return this.sc;this.sc=a;L(this,"setPoster",a);this.j("posterchange")};t.controls=function(a){return a!==b?(a=!!a,this.rb!==a&&((this.rb=a)?(this.t("vjs-controls-disabled"),this.n("vjs-controls-enabled"),this.j("controlsenabled")):(this.t("vjs-controls-enabled"),this.n("vjs-controls-disabled"),this.j("controlsdisabled"))),this):this.rb};u.Player.prototype.Qb;t=u.Player.prototype;

t.usingNativeControls=function(a){return a!==b?(a=!!a,this.Qb!==a&&((this.Qb=a)?(this.n("vjs-using-native-controls"),this.j("usingnativecontrols")):(this.t("vjs-using-native-controls"),this.j("usingcustomcontrols"))),this):this.Qb};t.error=function(){return K(this,"error")};t.ended=function(){return K(this,"ended")};t.seeking=function(){return K(this,"seeking")};t.ia=f;t.reportUserActivity=function(){this.ia=f};t.Pb=f;

t.userActive=function(a){return a!==b?(a=!!a,a!==this.Pb&&((this.Pb=a)?(this.ia=f,this.t("vjs-user-inactive"),this.n("vjs-user-active"),this.j("useractive")):(this.ia=l,this.i.T("mousemove",function(a){a.stopPropagation();a.preventDefault()}),this.t("vjs-user-active"),this.n("vjs-user-inactive"),this.j("userinactive"))),this):this.Pb};var N,O,P;P=document.createElement("div");O={};

P.Kd!==b?(O.vc="requestFullscreen",O.ob="exitFullscreen",O.ub="fullscreenchange",O.isFullScreen="fullScreen"):(document.mozCancelFullScreen?(N="moz",O.isFullScreen=N+"FullScreen"):(N="webkit",O.isFullScreen=N+"IsFullScreen"),P[N+"RequestFullScreen"]&&(O.vc=N+"RequestFullScreen",O.ob=N+"CancelFullScreen"),O.ub=N+"fullscreenchange");document[O.ob]&&(u.Ob.requestFullScreen=O);u.Ca=u.b.extend();

u.Ca.prototype.g={Pd:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};u.Ca.prototype.e=function(){return u.e("div",{className:"vjs-control-bar"})};u.Xb=u.q.extend({h:function(a,c){u.q.call(this,a,c);a.d("play",u.bind(this,this.Kb));a.d("pause",u.bind(this,this.Jb))}});t=u.Xb.prototype;t.oa="Play";t.P=function(){return"vjs-play-control "+u.q.prototype.P.call(this)};

t.p=function(){this.c.paused()?this.c.play():this.c.pause()};t.Kb=function(){u.t(this.a,"vjs-paused");u.n(this.a,"vjs-playing");this.a.children[0].children[0].innerHTML="Pause"};t.Jb=function(){u.t(this.a,"vjs-playing");u.n(this.a,"vjs-paused");this.a.children[0].children[0].innerHTML="Play"};u.$a=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});

u.$a.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});this.F=u.e("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});a.appendChild(this.F);return a};u.$a.prototype.da=function(){var a=this.c.Ua?this.c.v.currentTime:this.c.currentTime();this.F.innerHTML='<span class="vjs-control-text">Current Time </span>'+u.ta(a,this.c.duration())};

u.ab=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});u.ab.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});this.F=u.e("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});a.appendChild(this.F);return a};

u.ab.prototype.da=function(){var a=this.c.duration();a&&(this.F.innerHTML='<span class="vjs-control-text">Duration Time </span>'+u.ta(a))};u.bc=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.bc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})};u.gb=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});

u.gb.prototype.e=function(){var a=u.b.prototype.e.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});this.F=u.e("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});a.appendChild(this.F);return a};u.gb.prototype.da=function(){this.c.duration()&&(this.F.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+u.ta(this.c.duration()-this.c.currentTime()))};

u.Da=u.q.extend({h:function(a,c){u.q.call(this,a,c)}});u.Da.prototype.oa="Fullscreen";u.Da.prototype.P=function(){return"vjs-fullscreen-control "+u.q.prototype.P.call(this)};u.Da.prototype.p=function(){this.c.isFullScreen()?(this.c.cancelFullScreen(),this.a.children[0].children[0].innerHTML="Fullscreen"):(this.c.requestFullScreen(),this.a.children[0].children[0].innerHTML="Non-Fullscreen")};u.fb=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.fb.prototype.g={children:{seekBar:{}}};

u.fb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-progress-control vjs-control"})};u.Yb=u.N.extend({h:function(a,c){u.N.call(this,a,c);a.d("timeupdate",u.bind(this,this.za));a.H(u.bind(this,this.za))}});t=u.Yb.prototype;t.g={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};t.rc="timeupdate";t.e=function(){return u.N.prototype.e.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})};

t.za=function(){var a=this.c.Ua?this.c.v.currentTime:this.c.currentTime();this.a.setAttribute("aria-valuenow",u.round(100*this.xb(),2));this.a.setAttribute("aria-valuetext",u.ta(a,this.c.duration()))};t.xb=function(){return this.c.currentTime()/this.c.duration()};t.Qa=function(a){u.N.prototype.Qa.call(this,a);this.c.Ua=f;this.Fd=!this.c.paused();this.c.pause()};t.Hb=function(a){a=F(this,a)*this.c.duration();a==this.c.duration()&&(a-=0.1);this.c.currentTime(a)};

t.Ib=function(a){u.N.prototype.Ib.call(this,a);this.c.Ua=l;this.Fd&&this.c.play()};t.yc=function(){this.c.currentTime(this.c.currentTime()+5)};t.xc=function(){this.c.currentTime(this.c.currentTime()-5)};u.cb=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("progress",u.bind(this,this.update))}});u.cb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})};

u.cb.prototype.update=function(){this.a.style&&(this.a.style.width=u.round(100*this.c.bufferedPercent(),2)+"%")};u.Wb=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.Wb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})};u.Fa=u.V.extend({h:function(a,c){u.V.call(this,a,c);a.d("timeupdate",u.bind(this,this.da))}});u.Fa.prototype.defaultValue="00:00";

u.Fa.prototype.e=function(){return u.V.prototype.e.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})};u.Fa.prototype.da=function(){var a=this.c.Ua?this.c.v.currentTime:this.c.currentTime();this.a.innerHTML='<span class="vjs-control-text">'+u.ta(a,this.c.duration())+"</span>"};u.ib=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});

u.ib.prototype.g={children:{volumeBar:{}}};u.ib.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-control vjs-control"})};u.hb=u.N.extend({h:function(a,c){u.N.call(this,a,c);a.d("volumechange",u.bind(this,this.za));a.H(u.bind(this,this.za));setTimeout(u.bind(this,this.update),0)}});t=u.hb.prototype;t.za=function(){this.a.setAttribute("aria-valuenow",u.round(100*this.c.volume(),2));this.a.setAttribute("aria-valuetext",u.round(100*this.c.volume(),2)+"%")};

t.g={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};t.rc="volumechange";t.e=function(){return u.N.prototype.e.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})};t.Hb=function(a){this.c.muted()&&this.c.muted(l);this.c.volume(F(this,a))};t.xb=function(){return this.c.muted()?0:this.c.volume()};t.yc=function(){this.c.volume(this.c.volume()+0.1)};t.xc=function(){this.c.volume(this.c.volume()-0.1)};

u.cc=u.b.extend({h:function(a,c){u.b.call(this,a,c)}});u.cc.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})};u.jb=u.V.extend();u.jb.prototype.defaultValue="00:00";u.jb.prototype.e=function(){return u.V.prototype.e.call(this,"div",{className:"vjs-volume-handle"})};

u.ea=u.q.extend({h:function(a,c){u.q.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.volumeControl===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.volumeControl===l?this.n("vjs-hidden"):this.t("vjs-hidden")}))}});u.ea.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};

u.ea.prototype.p=function(){this.c.muted(this.c.muted()?l:f)};u.ea.prototype.update=function(){var a=this.c.volume(),c=3;0===a||this.c.muted()?c=0:0.33>a?c=1:0.67>a&&(c=2);this.c.muted()?"Unmute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.a.children[0].children[0].innerHTML&&(this.a.children[0].children[0].innerHTML="Mute");for(a=0;4>a;a++)u.t(this.a,"vjs-vol-"+a);u.n(this.a,"vjs-vol-"+c)};

u.ma=u.R.extend({h:function(a,c){u.R.call(this,a,c);a.d("volumechange",u.bind(this,this.update));a.i&&(a.i.m&&a.i.m.Cc===l)&&this.n("vjs-hidden");a.d("loadstart",u.bind(this,function(){a.i.m&&a.i.m.Cc===l?this.n("vjs-hidden"):this.t("vjs-hidden")}));this.n("vjs-menu-button")}});u.ma.prototype.La=function(){var a=new u.la(this.c,{Uc:"div"}),c=new u.hb(this.c,u.k.B({Ed:f},this.g.Yd));a.Y(c);return a};u.ma.prototype.p=function(){u.ea.prototype.p.call(this);u.R.prototype.p.call(this)};

u.ma.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})};u.ma.prototype.update=u.ea.prototype.update;u.Ea=u.q.extend({h:function(a,c){u.q.call(this,a,c);a.poster()&&this.src(a.poster());(!a.poster()||!a.controls())&&this.D();a.d("posterchange",u.bind(this,function(){this.src(a.poster())}));a.d("play",u.bind(this,this.D))}});var Q="backgroundSize"in u.W.style;

u.Ea.prototype.e=function(){var a=u.e("div",{className:"vjs-poster",tabIndex:-1});Q||a.appendChild(u.e("img"));return a};u.Ea.prototype.src=function(a){var c=this.u();a!==b&&(Q?c.style.backgroundImage='url("'+a+'")':c.firstChild.src=a)};u.Ea.prototype.p=function(){this.C().controls()&&this.c.play()};

u.Vb=u.b.extend({h:function(a,c){u.b.call(this,a,c);a.d("canplay",u.bind(this,this.D));a.d("canplaythrough",u.bind(this,this.D));a.d("playing",u.bind(this,this.D));a.d("seeked",u.bind(this,this.D));a.d("seeking",u.bind(this,this.show));a.d("seeked",u.bind(this,this.D));a.d("error",u.bind(this,this.show));a.d("waiting",u.bind(this,this.show))}});u.Vb.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-loading-spinner"})};u.Ya=u.q.extend();

u.Ya.prototype.e=function(){return u.q.prototype.e.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})};u.Ya.prototype.p=function(){this.c.play()};

u.r=u.b.extend({h:function(a,c,d){c=c||{};c.uc=l;u.b.call(this,a,c,d);var e,g;g=this;e=this.C();a=function(){if(e.controls()&&!e.usingNativeControls()){var a;g.d("mousedown",g.p);g.d("touchstart",function(c){c.preventDefault();a=this.c.userActive()});g.d("touchmove",function(){a&&this.C().reportUserActivity()});var c,d,n,s;c=0;g.d("touchstart",function(){c=(new Date).getTime();n=f});s=function(){n=l};g.d("touchmove",s);g.d("touchleave",s);g.d("touchcancel",s);g.d("touchend",function(){n===f&&(d=(new Date).getTime()-

c,250>d&&this.j("tap"))});g.d("tap",g.pd)}};c=u.bind(g,g.sd);this.H(a);e.d("controlsenabled",a);e.d("controlsdisabled",c)}});t=u.r.prototype;t.sd=function(){this.o("tap");this.o("touchstart");this.o("touchmove");this.o("touchleave");this.o("touchcancel");this.o("touchend");this.o("click");this.o("mousedown")};t.p=function(a){0===a.button&&this.C().controls()&&(this.C().paused()?this.C().play():this.C().pause())};t.pd=function(){this.C().userActive(!this.C().userActive())};t.Mb=m();

t.m={volumeControl:f,fullscreenResize:l,progressEvents:l,timeupdateEvents:l};u.media={};u.media.Xa="play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");

function ea(){var a=u.media.Xa[i];return function(){throw Error('The "'+a+"\" method is not available on the playback technology's API");}}for(var i=u.media.Xa.length-1;0<=i;i--)u.r.prototype[u.media.Xa[i]]=ea();

u.l=u.r.extend({h:function(a,c,d){this.m.volumeControl=u.l.Tc();this.m.movingMediaElementInDOM=!u.Ic;this.m.fullscreenResize=f;u.r.call(this,a,c,d);for(d=u.l.bb.length-1;0<=d;d--)u.d(this.a,u.l.bb[d],u.bind(this.c,this.ad));(c=c.source)&&this.a.currentSrc===c.src&&0<this.a.networkState?a.j("loadstart"):c&&(this.a.src=c.src);if(u.$b&&a.options().nativeControlsForTouch!==l){var e,g,j,k;e=this;g=this.C();c=g.controls();e.a.controls=!!c;j=function(){e.a.controls=f};k=function(){e.a.controls=l};g.d("controlsenabled",

j);g.d("controlsdisabled",k);c=function(){g.o("controlsenabled",j);g.o("controlsdisabled",k)};e.d("dispose",c);g.d("usingcustomcontrols",c);g.usingNativeControls(f)}a.H(function(){this.L&&(this.g.autoplay&&this.paused())&&(delete this.L.poster,this.play())});this.Wa()}});t=u.l.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};

t.e=function(){var a=this.c,c=a.L,d;if(!c||this.m.movingMediaElementInDOM===l)c?(d=c.cloneNode(l),u.l.gc(c),c=d,a.L=h):c=u.e("video",{id:a.id()+"_html5_api",className:"vjs-tech"}),c.player=a,u.yb(c,a.u());d=["autoplay","preload","loop","muted"];for(var e=d.length-1;0<=e;e--){var g=d[e];a.g[g]!==h&&(c[g]=a.g[g])}return c};t.ad=function(a){this.j(a);a.stopPropagation()};t.play=function(){this.a.play()};t.pause=function(){this.a.pause()};t.paused=function(){return this.a.paused};t.currentTime=function(){return this.a.currentTime};

t.ud=function(a){try{this.a.currentTime=a}catch(c){u.log(c,"Video is not ready. (Video.js)")}};t.duration=function(){return this.a.duration||0};t.buffered=function(){return this.a.buffered};t.volume=function(){return this.a.volume};t.zd=function(a){this.a.volume=a};t.muted=function(){return this.a.muted};t.xd=function(a){this.a.muted=a};t.width=function(){return this.a.offsetWidth};t.height=function(){return this.a.offsetHeight};

t.Va=function(){return"function"==typeof this.a.webkitEnterFullScreen&&(/Android/.test(u.I)||!/Chrome|Mac OS X 10.5/.test(u.I))?f:l};t.hc=function(){var a=this.a;a.paused&&a.networkState<=a.Hd?(this.a.play(),setTimeout(function(){a.pause();a.webkitEnterFullScreen()},0)):a.webkitEnterFullScreen()};t.bd=function(){this.a.webkitExitFullScreen()};t.src=function(a){this.a.src=a};t.load=function(){this.a.load()};t.currentSrc=function(){return this.a.currentSrc};t.poster=function(){return this.a.poster};

t.Mb=function(a){this.a.poster=a};t.Ra=function(){return this.a.Ra};t.yd=function(a){this.a.Ra=a};t.autoplay=function(){return this.a.autoplay};t.td=function(a){this.a.autoplay=a};t.controls=function(){return this.a.controls};t.loop=function(){return this.a.loop};t.wd=function(a){this.a.loop=a};t.error=function(){return this.a.error};t.seeking=function(){return this.a.seeking};t.ended=function(){return this.a.ended};u.l.isSupported=function(){try{u.W.volume=0.5}catch(a){return l}return!!u.W.canPlayType};

u.l.nb=function(a){try{return!!u.W.canPlayType(a.type)}catch(c){return""}};u.l.Tc=function(){var a=u.W.volume;u.W.volume=a/2+0.1;return a!==u.W.volume};u.l.bb="loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");

u.l.gc=function(a){if(a){a.player=h;for(a.parentNode&&a.parentNode.removeChild(a);a.hasChildNodes();)a.removeChild(a.firstChild);a.removeAttribute("src");if("function"===typeof a.load)try{a.load()}catch(c){}}};u.Mc&&(document.createElement("video").constructor.prototype.canPlayType=function(a){return a&&-1!=a.toLowerCase().indexOf("video/mp4")?"maybe":""});

u.f=u.r.extend({h:function(a,c,d){u.r.call(this,a,c,d);var e=c.source;d=c.parentEl;var g=this.a=u.e("div",{id:a.id()+"_temp_flash"}),j=a.id()+"_flash_api";a=a.g;var k=u.k.B({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:a.autoplay,preload:a.Ra,loop:a.loop,muted:a.muted},c.flashVars),q=u.k.B({wmode:"opaque",bgcolor:"#000000"},c.params),n=u.k.B({id:j,name:j,"class":"vjs-tech"},c.attributes),s;e&&(e.type&&u.f.hd(e.type)?

(a=u.f.zc(e.src),k.rtmpConnection=encodeURIComponent(a.qb),k.rtmpStream=encodeURIComponent(a.Nb)):k.src=encodeURIComponent(u.kc(e.src)));this.setCurrentTime=function(a){s=a;this.a.vjs_setProperty("currentTime",a)};this.currentTime=function(){return this.seeking()?s:this.a.vjs_getProperty("currentTime")};u.yb(g,d);c.startTime&&this.H(function(){this.load();this.play();this.currentTime(c.startTime)});u.Ub&&this.H(function(){u.d(this.u(),"mousemove",u.bind(this,function(){this.C().j({type:"mousemove",

bubbles:l})}))});if(c.iFrameMode===f&&!u.Ub){var C=u.e("iframe",{id:j+"_iframe",name:j+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});k.readyFunction="ready";k.eventProxyFunction="events";k.errorEventProxyFunction="errors";u.d(C,"load",u.bind(this,function(){var a,d=C.contentWindow;a=C.contentDocument?C.contentDocument:C.contentWindow.document;a.write(u.f.lc(c.swf,k,q,n));d.player=this.c;d.ready=u.bind(this.c,function(c){var d=this.i;d.a=a.getElementById(c);

u.f.pb(d)});d.events=u.bind(this.c,function(a,c){this&&"flash"===this.xa&&this.j(c)});d.errors=u.bind(this.c,function(a,c){u.log("Flash Error",c)})}));g.parentNode.replaceChild(C,g)}else u.f.$c(c.swf,g,k,q,n)}});t=u.f.prototype;t.dispose=function(){u.r.prototype.dispose.call(this)};t.play=function(){this.a.vjs_play()};t.pause=function(){this.a.vjs_pause()};

t.src=function(a){u.f.gd(a)?(a=u.f.zc(a),this.Td(a.qb),this.Ud(a.Nb)):(a=u.kc(a),this.a.vjs_src(a));if(this.c.autoplay()){var c=this;setTimeout(function(){c.play()},0)}};t.currentSrc=function(){var a=this.a.vjs_getProperty("currentSrc");if(a==h){var c=this.Rd(),d=this.Sd();c&&d&&(a=u.f.Ad(c,d))}return a};t.load=function(){this.a.vjs_load()};t.poster=function(){this.a.vjs_getProperty("poster")};t.Mb=m();t.buffered=function(){return u.sb(0,this.a.vjs_getProperty("buffered"))};t.Va=r(l);t.hc=r(l);

var R=u.f.prototype,S="rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),T="error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");function fa(){var a=S[U],c=a.charAt(0).toUpperCase()+a.slice(1);R["set"+c]=function(c){return this.a.vjs_setProperty(a,c)}}

function V(a){R[a]=function(){return this.a.vjs_getProperty(a)}}var U;for(U=0;U<S.length;U++)V(S[U]),fa();for(U=0;U<T.length;U++)V(T[U]);u.f.isSupported=function(){return 10<=u.f.version()[0]};u.f.nb=function(a){if(!a.type)return"";a=a.type.replace(/;.*/,"").toLowerCase();if(a in u.f.dd||a in u.f.Ac)return"maybe"};u.f.dd={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};u.f.Ac={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};

u.f.onReady=function(a){a=u.u(a);var c=a.player||a.parentNode.player,d=c.i;a.player=c;d.a=a;u.f.pb(d)};u.f.pb=function(a){a.u().vjs_getProperty?a.Wa():setTimeout(function(){u.f.pb(a)},50)};u.f.onEvent=function(a,c){u.u(a).player.j(c)};u.f.onError=function(a,c){u.u(a).player.j("error");u.log("Flash Error",c,a)};

u.f.version=function(){var a="0,0,0";try{a=(new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){try{navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])}catch(d){}}return a.split(",")};

u.f.$c=function(a,c,d,e,g){a=u.f.lc(a,d,e,g);a=u.e("div",{innerHTML:a}).childNodes[0];d=c.parentNode;c.parentNode.replaceChild(a,c);var j=d.childNodes[0];setTimeout(function(){j.style.display="block"},1E3)};

u.f.lc=function(a,c,d,e){var g="",j="",k="";c&&u.k.ra(c,function(a,c){g+=a+"="+c+"&amp;"});d=u.k.B({movie:a,flashvars:g,allowScriptAccess:"always",allowNetworking:"all"},d);u.k.ra(d,function(a,c){j+='<param name="'+a+'" value="'+c+'" />'});e=u.k.B({data:a,width:"100%",height:"100%"},e);u.k.ra(e,function(a,c){k+=a+'="'+c+'" '});return'<object type="application/x-shockwave-flash"'+k+">"+j+"</object>"};u.f.Ad=function(a,c){return a+"&"+c};

u.f.zc=function(a){var c={qb:"",Nb:""};if(!a)return c;var d=a.indexOf("&"),e;-1!==d?e=d+1:(d=e=a.lastIndexOf("/")+1,0===d&&(d=e=a.length));c.qb=a.substring(0,d);c.Nb=a.substring(e,a.length);return c};u.f.hd=function(a){return a in u.f.Ac};u.f.Oc=/^rtmp[set]?:\/\//i;u.f.gd=function(a){return u.f.Oc.test(a)};

u.Nc=u.b.extend({h:function(a,c,d){u.b.call(this,a,c,d);if(!a.g.sources||0===a.g.sources.length){c=0;for(d=a.g.techOrder;c<d.length;c++){var e=u.Z(d[c]),g=window.videojs[e];if(g&&g.isSupported()){I(a,e);break}}}else a.src(a.g.sources)}});u.Player.prototype.textTracks=function(){return this.ya=this.ya||[]};function W(a,c,d){for(var e=a.ya,g=0,j=e.length,k,q;g<j;g++)k=e[g],k.id()===c?(k.show(),q=k):d&&(k.G()==d&&0<k.mode())&&k.disable();(c=q?q.G():d?d:l)&&a.j(c+"trackchange")}

u.w=u.b.extend({h:function(a,c){u.b.call(this,a,c);this.Q=c.id||"vjs_"+c.kind+"_"+c.language+"_"+u.s++;this.wc=c.src;this.Xc=c["default"]||c.dflt;this.Cd=c.title;this.Od=c.srclang;this.jd=c.label;this.$=[];this.kb=[];this.ga=this.ha=0;this.c.d("fullscreenchange",u.bind(this,this.Qc))}});t=u.w.prototype;t.G=p("A");t.src=p("wc");t.tb=p("Xc");t.title=p("Cd");t.label=p("jd");t.Vc=p("$");t.Pc=p("kb");t.readyState=p("ha");t.mode=p("ga");

t.Qc=function(){this.a.style.fontSize=this.c.isFullScreen()?140*(screen.width/this.c.width())+"%":""};t.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-"+this.A+" vjs-text-track"})};t.show=function(){X(this);this.ga=2;u.b.prototype.show.call(this)};t.D=function(){X(this);this.ga=1;u.b.prototype.D.call(this)};

t.disable=function(){2==this.ga&&this.D();this.c.o("timeupdate",u.bind(this,this.update,this.Q));this.c.o("ended",u.bind(this,this.reset,this.Q));this.reset();this.c.fa("textTrackDisplay").removeChild(this);this.ga=0};function X(a){0===a.ha&&a.load();0===a.ga&&(a.c.d("timeupdate",u.bind(a,a.update,a.Q)),a.c.d("ended",u.bind(a,a.reset,a.Q)),("captions"===a.A||"subtitles"===a.A)&&a.c.fa("textTrackDisplay").Y(a))}

t.load=function(){0===this.ha&&(this.ha=1,u.get(this.wc,u.bind(this,this.qd),u.bind(this,this.Gb)))};t.Gb=function(a){this.error=a;this.ha=3;this.j("error")};t.qd=function(a){var c,d;a=a.split("\n");for(var e="",g=1,j=a.length;g<j;g++)if(e=u.trim(a[g])){-1==e.indexOf("--\x3e")?(c=e,e=u.trim(a[++g])):c=this.$.length;c={id:c,index:this.$.length};d=e.split(" --\x3e ");c.startTime=Y(d[0]);c.sa=Y(d[1]);for(d=[];a[++g]&&(e=u.trim(a[g]));)d.push(e);c.text=d.join("<br/>");this.$.push(c)}this.ha=2;this.j("loaded")};

function Y(a){var c=a.split(":");a=0;var d,e,g;3==c.length?(d=c[0],e=c[1],c=c[2]):(d=0,e=c[0],c=c[1]);c=c.split(/\s+/);c=c.splice(0,1)[0];c=c.split(/\.|,/);g=parseFloat(c[1]);c=c[0];a+=3600*parseFloat(d);a+=60*parseFloat(e);a+=parseFloat(c);g&&(a+=g/1E3);return a}

t.update=function(){if(0<this.$.length){var a=this.c.currentTime();if(this.Lb===b||a<this.Lb||this.Na<=a){var c=this.$,d=this.c.duration(),e=0,g=l,j=[],k,q,n,s;a>=this.Na||this.Na===b?s=this.vb!==b?this.vb:0:(g=f,s=this.Cb!==b?this.Cb:c.length-1);for(;;){n=c[s];if(n.sa<=a)e=Math.max(e,n.sa),n.Ha&&(n.Ha=l);else if(a<n.startTime){if(d=Math.min(d,n.startTime),n.Ha&&(n.Ha=l),!g)break}else g?(j.splice(0,0,n),q===b&&(q=s),k=s):(j.push(n),k===b&&(k=s),q=s),d=Math.min(d,n.sa),e=Math.max(e,n.startTime),n.Ha=

f;if(g)if(0===s)break;else s--;else if(s===c.length-1)break;else s++}this.kb=j;this.Na=d;this.Lb=e;this.vb=k;this.Cb=q;a=this.kb;c="";d=0;for(e=a.length;d<e;d++)c+='<span class="vjs-tt-cue">'+a[d].text+"</span>";this.a.innerHTML=c;this.j("cuechange")}}};t.reset=function(){this.Na=0;this.Lb=this.c.duration();this.Cb=this.vb=0};u.Sb=u.w.extend();u.Sb.prototype.A="captions";u.Zb=u.w.extend();u.Zb.prototype.A="subtitles";u.Tb=u.w.extend();u.Tb.prototype.A="chapters";

u.ac=u.b.extend({h:function(a,c,d){u.b.call(this,a,c,d);if(a.g.tracks&&0<a.g.tracks.length){c=this.c;a=a.g.tracks;var e;for(d=0;d<a.length;d++){e=a[d];var g=c,j=e.kind,k=e.label,q=e.language,n=e;e=g.ya=g.ya||[];n=n||{};n.kind=j;n.label=k;n.language=q;j=u.Z(j||"subtitles");g=new window.videojs[j+"Track"](g,n);e.push(g)}}}});u.ac.prototype.e=function(){return u.b.prototype.e.call(this,"div",{className:"vjs-text-track-display"})};

u.X=u.M.extend({h:function(a,c){var d=this.ca=c.track;c.label=d.label();c.selected=d.tb();u.M.call(this,a,c);this.c.d(d.G()+"trackchange",u.bind(this,this.update))}});u.X.prototype.p=function(){u.M.prototype.p.call(this);W(this.c,this.ca.Q,this.ca.G())};u.X.prototype.update=function(){this.selected(2==this.ca.mode())};u.eb=u.X.extend({h:function(a,c){c.track={G:function(){return c.kind},C:a,label:function(){return c.kind+" off"},tb:r(l),mode:r(l)};u.X.call(this,a,c);this.selected(f)}});

u.eb.prototype.p=function(){u.X.prototype.p.call(this);W(this.c,this.ca.Q,this.ca.G())};u.eb.prototype.update=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g=f;c<d;c++)e=a[c],e.G()==this.ca.G()&&2==e.mode()&&(g=l);this.selected(g)};u.S=u.R.extend({h:function(a,c){u.R.call(this,a,c);1>=this.K.length&&this.D()}});

u.S.prototype.qa=function(){var a=[],c;a.push(new u.eb(this.c,{kind:this.A}));for(var d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.G()===this.A&&a.push(new u.X(this.c,{track:c}));return a};u.Aa=u.S.extend({h:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Captions Menu")}});u.Aa.prototype.A="captions";u.Aa.prototype.oa="Captions";u.Aa.prototype.className="vjs-captions-button";

u.Ga=u.S.extend({h:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Subtitles Menu")}});u.Ga.prototype.A="subtitles";u.Ga.prototype.oa="Subtitles";u.Ga.prototype.className="vjs-subtitles-button";u.Ba=u.S.extend({h:function(a,c,d){u.S.call(this,a,c,d);this.a.setAttribute("aria-label","Chapters Menu")}});t=u.Ba.prototype;t.A="chapters";t.oa="Chapters";t.className="vjs-chapters-button";

t.qa=function(){for(var a=[],c,d=0;d<this.c.textTracks().length;d++)c=this.c.textTracks()[d],c.G()===this.A&&a.push(new u.X(this.c,{track:c}));return a};

t.La=function(){for(var a=this.c.textTracks(),c=0,d=a.length,e,g,j=this.K=[];c<d;c++)if(e=a[c],e.G()==this.A&&e.tb()){if(2>e.readyState()){this.Ld=e;e.d("loaded",u.bind(this,this.La));return}g=e;break}a=this.ua=new u.la(this.c);a.a.appendChild(u.e("li",{className:"vjs-menu-title",innerHTML:u.Z(this.A),Bd:-1}));if(g){e=g.$;for(var k,c=0,d=e.length;c<d;c++)k=e[c],k=new u.Za(this.c,{track:g,cue:k}),j.push(k),a.Y(k)}0<this.K.length&&this.show();return a};

u.Za=u.M.extend({h:function(a,c){var d=this.ca=c.track,e=this.cue=c.cue,g=a.currentTime();c.label=e.text;c.selected=e.startTime<=g&&g<e.sa;u.M.call(this,a,c);d.d("cuechange",u.bind(this,this.update))}});u.Za.prototype.p=function(){u.M.prototype.p.call(this);this.c.currentTime(this.cue.startTime);this.update(this.cue.startTime)};u.Za.prototype.update=function(){var a=this.cue,c=this.c.currentTime();this.selected(a.startTime<=c&&c<a.sa)};

u.k.B(u.Ca.prototype.g.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});

if("undefined"!==typeof window.JSON&&"function"===window.JSON.parse)u.JSON=window.JSON;else{u.JSON={};var Z=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;u.JSON.parse=function(a,c){function d(a,e){var k,q,n=a[e];if(n&&"object"===typeof n)for(k in n)Object.prototype.hasOwnProperty.call(n,k)&&(q=d(n,k),q!==b?n[k]=q:delete n[k]);return c.call(a,e,n)}var e;a=String(a);Z.lastIndex=0;Z.test(a)&&(a=a.replace(Z,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));

if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof c?d({"":e},""):e;throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");}}

u.dc=function(){var a,c,d=document.getElementsByTagName("video");if(d&&0<d.length)for(var e=0,g=d.length;e<g;e++)if((c=d[e])&&c.getAttribute)c.player===b&&(a=c.getAttribute("data-setup"),a!==h&&(a=u.JSON.parse(a||"{}"),videojs(c,a)));else{u.lb();break}else u.Dc||u.lb()};u.lb=function(){setTimeout(u.dc,1)};"complete"===document.readyState?u.Dc=f:u.T(window,"load",function(){u.Dc=f});u.lb();u.rd=function(a,c){u.Player.prototype[a]=c};var ga=this;ga.Gd=f;function $(a,c){var d=a.split("."),e=ga;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&c!==b?e[g]=c:e=e[g]?e[g]:e[g]={}};$("videojs",u);$("_V_",u);$("videojs.options",u.options);$("videojs.players",u.va);$("videojs.TOUCH_ENABLED",u.$b);$("videojs.cache",u.pa);$("videojs.Component",u.b);u.b.prototype.player=u.b.prototype.C;u.b.prototype.options=u.b.prototype.options;u.b.prototype.init=u.b.prototype.h;u.b.prototype.dispose=u.b.prototype.dispose;u.b.prototype.createEl=u.b.prototype.e;u.b.prototype.contentEl=u.b.prototype.Ka;u.b.prototype.el=u.b.prototype.u;u.b.prototype.addChild=u.b.prototype.Y;

u.b.prototype.getChild=u.b.prototype.fa;u.b.prototype.getChildById=u.b.prototype.ed;u.b.prototype.children=u.b.prototype.children;u.b.prototype.initChildren=u.b.prototype.nc;u.b.prototype.removeChild=u.b.prototype.removeChild;u.b.prototype.on=u.b.prototype.d;u.b.prototype.off=u.b.prototype.o;u.b.prototype.one=u.b.prototype.T;u.b.prototype.trigger=u.b.prototype.j;u.b.prototype.triggerReady=u.b.prototype.Wa;u.b.prototype.show=u.b.prototype.show;u.b.prototype.hide=u.b.prototype.D;

u.b.prototype.width=u.b.prototype.width;u.b.prototype.height=u.b.prototype.height;u.b.prototype.dimensions=u.b.prototype.Yc;u.b.prototype.ready=u.b.prototype.H;u.b.prototype.addClass=u.b.prototype.n;u.b.prototype.removeClass=u.b.prototype.t;u.b.prototype.buildCSSClass=u.b.prototype.P;u.Player.prototype.ended=u.Player.prototype.ended;$("videojs.MediaLoader",u.Nc);$("videojs.TextTrackDisplay",u.ac);$("videojs.ControlBar",u.Ca);$("videojs.Button",u.q);$("videojs.PlayToggle",u.Xb);

$("videojs.FullscreenToggle",u.Da);$("videojs.BigPlayButton",u.Ya);$("videojs.LoadingSpinner",u.Vb);$("videojs.CurrentTimeDisplay",u.$a);$("videojs.DurationDisplay",u.ab);$("videojs.TimeDivider",u.bc);$("videojs.RemainingTimeDisplay",u.gb);$("videojs.Slider",u.N);$("videojs.ProgressControl",u.fb);$("videojs.SeekBar",u.Yb);$("videojs.LoadProgressBar",u.cb);$("videojs.PlayProgressBar",u.Wb);$("videojs.SeekHandle",u.Fa);$("videojs.VolumeControl",u.ib);$("videojs.VolumeBar",u.hb);

$("videojs.VolumeLevel",u.cc);$("videojs.VolumeMenuButton",u.ma);$("videojs.VolumeHandle",u.jb);$("videojs.MuteToggle",u.ea);$("videojs.PosterImage",u.Ea);$("videojs.Menu",u.la);$("videojs.MenuItem",u.M);$("videojs.MenuButton",u.R);u.R.prototype.createItems=u.R.prototype.qa;u.S.prototype.createItems=u.S.prototype.qa;u.Ba.prototype.createItems=u.Ba.prototype.qa;$("videojs.SubtitlesButton",u.Ga);$("videojs.CaptionsButton",u.Aa);$("videojs.ChaptersButton",u.Ba);$("videojs.MediaTechController",u.r);

u.r.prototype.features=u.r.prototype.m;u.r.prototype.m.volumeControl=u.r.prototype.m.Cc;u.r.prototype.m.fullscreenResize=u.r.prototype.m.Md;u.r.prototype.m.progressEvents=u.r.prototype.m.Qd;u.r.prototype.m.timeupdateEvents=u.r.prototype.m.Vd;u.r.prototype.setPoster=u.r.prototype.Mb;$("videojs.Html5",u.l);u.l.Events=u.l.bb;u.l.isSupported=u.l.isSupported;u.l.canPlaySource=u.l.nb;u.l.prototype.setCurrentTime=u.l.prototype.ud;u.l.prototype.setVolume=u.l.prototype.zd;u.l.prototype.setMuted=u.l.prototype.xd;

u.l.prototype.setPreload=u.l.prototype.yd;u.l.prototype.setAutoplay=u.l.prototype.td;u.l.prototype.setLoop=u.l.prototype.wd;u.l.prototype.enterFullScreen=u.l.prototype.hc;u.l.prototype.exitFullScreen=u.l.prototype.bd;$("videojs.Flash",u.f);u.f.isSupported=u.f.isSupported;u.f.canPlaySource=u.f.nb;u.f.onReady=u.f.onReady;$("videojs.TextTrack",u.w);u.w.prototype.label=u.w.prototype.label;u.w.prototype.kind=u.w.prototype.G;u.w.prototype.mode=u.w.prototype.mode;u.w.prototype.cues=u.w.prototype.Vc;

u.w.prototype.activeCues=u.w.prototype.Pc;$("videojs.CaptionsTrack",u.Sb);$("videojs.SubtitlesTrack",u.Zb);$("videojs.ChaptersTrack",u.Tb);$("videojs.autoSetup",u.dc);$("videojs.plugin",u.rd);$("videojs.createTimeRange",u.sb);$("videojs.util",u.ja);u.ja.mergeOptions=u.ja.Fb;})();



(function(){

	if (typeof videojs !== "undefined") {

        videojs.options.flash.swf = "video-js.swf";

        _V_.ControlBar.prototype.options.components = {

            "playToggle": {},

            "fullscreenToggle": {},

            "currentTimeDisplay": {},

            "timeDivider": {},

            "durationDisplay": {},

            "remainingTimeDisplay": {},

            "progressControl": {}

        }

	}
		var basePath = '';
        var mochatouch;

        var mochatouchUl;

        var mochatouchLi;

        var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        var deviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.Height;

        var IMG_WIDTH = deviceWidth;

        var currentImg = 0;

        var maxImages;

        var speed = 500;

        var imgs;

		var domPrepared =0;

		var jsonDomPrepared =0;

		var galleryType;

        var swipeOptions = {

            triggerOnTouchEnd: true,

            swipeStatus: swipeStatus,

            allowPageScroll: "vertical",

            threshold: 75,

            tap: function (event, target) {



                videoSr = target.alt;

                if (target.alt == undefined) return;

                if (videoSr != '' && videoSr != undefined && !isNaN(videoSr)) {

                    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {

                        target.style.display = 'none';

                        videoiOS = document.getElementById('video' + videoSr);

                        videoiOS.style.display = 'block';

                        videoiOS.play();

						 if (navigator.userAgent.match(/(iPad)/)) {

							setTimeout(function(){videoiOS.webkitEnterFullscreen();},1000);

						 }

                        videoiOS.addEventListener('webkitendfullscreen', onVideoEndsFullScreen, false);



                        function onVideoEndsFullScreen() {

                            videoiOS.style.display = 'none';

                            target.style.display = 'block';

                        }

                    } else {

                        movietagWrap = document.getElementById('video' + videoSr + 'Wrap');

                        movietagWrap.style.position = 'absolute';

                        movietagWrap.style.top = '0';

                        movietagWrap.style.left = '0';

                        movietagWrap.style.right = '0';

                        movietagWrap.style.bottom = '0';

                        movietagWrap.style.width = '100%';

                        movietagWrap.style.display = 'block';



                        var myPlayer = videojs('video' + videoSr + 'Play');



                        setTimeout(function () {

                            var myPlayer = videojs('video' + videoSr + 'Play');

                        }, 1000);



                        movietagPlay = document.getElementById('video' + videoSr + 'Play');

                        movietagPlay.style.width = '100%';

                        movietagPlay.style.height = '100%';

                        $(".imgCaptionGallery").css('display', 'none');

                    }



                } else if (0 == videoSr.search("iframe") && videoSr != undefined && isNaN(videoSr)) {



                    movietagWrap = document.getElementById(videoSr + 'Wrap');

                    movietagWrap.style.position = 'absolute';

                    movietagWrap.style.top = '0';

                    movietagWrap.style.left = '0';

                    movietagWrap.style.right = '0';

                    movietagWrap.style.bottom = '0';

                    movietagWrap.style.width = '100%';

                    movietagWrap.style.display = 'block';



                    movietagPlay = document.getElementById(videoSr + 'Play');

                    movietagPlay.style.width = '100%';

                    movietagPlay.style.height = '100%';

					var deviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.Height;

					movietagPlay.style.marginTop = "50px";

					movietagPlay.style.height = (deviceHeight-50)+"px";

                    $(".imgCaptionGallery").css('display', 'none');



                } else {

                    curValue = $('.imgCaptionGallery').css('display');

                    if (curValue == 'block') {

                        $('.imgCaptionGallery').css('display', 'none');

                    } else {

                        $('.imgCaptionGallery').css('display', 'block');

                    }

                }

            }

        }

		function prepareJsonGalleryDom(galleryJson)

		{

			jsonDomPrepared = 1;

			var galleryObj = $.parseJSON( galleryJson );

			createDom = '<div id="mochatouchjson"><ul>';

			var galleryObjCount = galleryObj.length;

			for (var i = 0; i < galleryObjCount; i++) 

			{	

				if(galleryObj[i].type == 'photo')

				{

					createDom += '<li> <img src="'+galleryObj[i].poster+'"  data-caption="'+galleryObj[i].caption+'"> </li>';

				}else if(galleryObj[i].type == 'video')

				{

					createDom += '<li><video preload="none" controls poster="'+galleryObj[i].poster+'" data-caption="'+galleryObj[i].caption+'"><source src="'+galleryObj[i].videourl+'"></video></li>';

				}else if(galleryObj[i].type == 'iframe')

				{

					 createDom += '<li><iframe src="'+galleryObj[i].videourl+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-caption="'+galleryObj[i].caption+'"></iframe></li>';

				}

			}

			createDom += '</ul></div>';

			$('body').append(createDom);

		}

		function prepareUserGalleryDom(mochaUserObj) {

			

            videoIndex = 1;

            iframeIndex = 1;

			mochatouchUser = $(""+mochaUserObj+"");

			mochatouchUserUl = $(mochaUserObj+" ul");

            mochatouchUserLi = $(mochaUserObj+" li");

			

            mochatouchUserLi.each(function (index) {

                if ($(this).children().is('img')) {

					

                } else if ($(this).children().is('video')) {  

                    tempObj = $(this).children('video');

                    poster = tempObj.attr('poster');

                    videoSrc = tempObj.children('').attr('src');

                    var videoReplaceImg = '<img src="' + poster + '" alt="' + videoIndex + '" data-alt="" style="" id=""  data-rel="">';

                    tempObj.css('display','none');

                    $(this).append(videoReplaceImg);            

                    $(this).append('<img alt="' + videoIndex + '" src="'+basePath+'res/playBtn.png" class="vidPlayBtnList" style="position:absolute; width:35px;">');

					$(".vidPlayBtnList").css('left', ($(this).width() - 35) / 2);

           		    $(".vidPlayBtnList").css('top', ($(this).height() - 35) / 2);

                    videoIndex++;

                } else if ($(this).children().is('iframe')) {

					tempCurrentObj = $(this);

                    tempObj = $(this).children('iframe');

					tempObj.css('display','none');

                    iframeSrc = tempObj.attr('src');

                    var tempRes = iframeSrc.split("/");

                    var poster;

                    if (iframeSrc.search("youtube.com") > 6) {

                        poster = 'http://img.youtube.com/vi/' + tempRes[4] + '/0.jpg';

						var videoReplaceImg = '<img src="' + poster + '" alt="iframe' + iframeIndex + '" data-alt="" style="" id="" data-rel="">';

                    	tempCurrentObj.prepend(videoReplaceImg);           

                   	    tempCurrentObj.append('<img alt="iframe' + iframeIndex + '" src="'+basePath+'res/playBtn.png" class="vidPlayBtnList" style="position:absolute; width:35px;">');

                    	iframeIndex++;

                    } else if (iframeSrc.search("vimeo.com") > 6) {

                        $.getJSON('http://www.vimeo.com/api/v2/video/' + tempRes[4] + '.json?callback=?', {

                            format: "json"

                        }, function (data) {

                            poster = data[0].thumbnail_large;

                            var videoReplaceImg = '<img src="' + poster + '" alt="iframe' + iframeIndex + '" data-alt="" style="" id="" data-rel="">';

                   		    tempCurrentObj.append(videoReplaceImg);           

                    		tempCurrentObj.append('<img alt="iframe' + iframeIndex + '" src="'+basePath+'res/playBtn.png" class="vidPlayBtnList" style="position:absolute; width:35px;">');

							$(".vidPlayBtnList").css('left', (tempCurrentObj.width() - 35) / 2);

           					$(".vidPlayBtnList").css('top', (tempCurrentObj.height() - 35) / 2);

                    		iframeIndex++;

                        });

                    } 

                }		

            });

			

			sequence = 0;

			mochatouchUserLi.each(function (index) {

				$(this).children().attr("data-sequence",sequence);

				

				$(this).on("click", function () {

					mochatouchStart();

					imgSequence = $(this).children().attr("data-sequence");

					currentImg = imgSequence-1;

				    nextImage();

           			scrollToTop();

					mochatouch.css('display', 'block');

			 		$('body').css('display','inline-block');

				});

			

				sequence++;

		 })

			

        }

		function scrollToTop()

		{

			window.scrollTo(0,0); 

			return false;

		}

		function mochaTouch(mochaObj,type,path)

		{
			if(path != '' && path != undefined && path != 'undefined')
			{
				basePath = path;
			}
			galleryType = type;

			if(type == 'hidden')

			{

				mochaObj = "#"+mochaObj;

				mochatouch = $(""+mochaObj+"");

				mochatouchUl = $(mochaObj+" ul");

				mochatouchLi = $(mochaObj+" li");

				maxImages = mochatouchLi.length;

				if(domPrepared == 0)

				{

					prepareGalleryDom(mochaObj);

				}

				mochatouch.css('display', 'block');

				$('body').css('display','inline-block');

				scrollToTop();

			}else if(type == 'json')

			{

				if(jsonDomPrepared == 0)

				{

					prepareJsonGalleryDom(galleryJson);

				}

				mochaObj = '#mochatouchjson';

				mochatouch = $(""+mochaObj+"");

				mochatouchUl = $(mochaObj+" ul");

				mochatouchLi = $(mochaObj+" li");

				maxImages = mochatouchLi.length;

				if(domPrepared == 0)

				{

					prepareGalleryDom(mochaObj);

				}

				mochatouch.css('display', 'block');

				$('body').css('display','inline-block');

				scrollToTop();

			}

			else

			{

				userMochaId = mochaObj;

				oriHtml = $("#"+userMochaId+"").html();

			

				mochaObj = userMochaId+"Gallery";

				galleryHtml = "<div id='"+mochaObj+"' style='display:none;'>"+oriHtml+"</div>";

				$('body').append(galleryHtml);

				mochaObj = "#"+mochaObj;

				

				mochatouch = $(""+mochaObj+"");

				mochatouchUl = $(mochaObj+" ul");

				mochatouchLi = $(mochaObj+" li");

				maxImages = mochatouchLi.length;

				if(domPrepared == 0)

				{

					prepareGalleryDom(mochaObj);

				}

				prepareUserGalleryDom("#"+userMochaId+"");

			}

			

		}

		function mochatouchStart()

		{

			 mochatouch.css('display', 'block');

			 $('body').css('display','inline-block');

		}

        $(function () {

			

			$('body').on('click', '#closeModal', function () {

				mochatouch.css('display', 'none');

				$('body').css('display','');

            });

            $('body').on('click', '#closeModal', function () {

                mochatouch.css('display', 'none');

				$('body').css('display','');

            });

            $('body').on('click', '#nextModal', function () {

                nextImage();

            });

            $('body').on('click', '#prevModal', function () {

                previousImage();

            });

           $('body').on('click', '.closeVideoModal', function () {

                $(".videoModal").css('display', 'none');

                tempId = $(this).data('index');

                var myPlayer = videojs('video' + (tempId) + 'Play');

                myPlayer.pause();

                $(".imgCaptionGallery").css('display', 'block');

            });

            $('body').on('click', '.closeIframeModal', function () {

                $(".iframeModal").css('display', 'none');

                tempId = $(this).data('index');

                $(".imgCaptionGallery").css('display', 'block');

            });

        });

        window.onresize = function () {

            resizeGalleryDom();

            for (i = 0; i < maxImages; i++) {

                var tempImgObj = document.getElementById('imageSeq' + i);

                var tempDataRel = tempImgObj.getAttribute('data-rel');

                if (tempDataRel == 'resized') {

                    imgManipulate(tempImgObj, checkResize = 'true');

                }

            }

			if(galleryType == undefined)

			{

				 mochatouchUserLi.each(function (index) {

               		if ($(this).children().is('video') || $(this).children().is('iframe')) {  

						$(".vidPlayBtnList").css('left', ($(this).width() - 35) / 2);

						$(".vidPlayBtnList").css('top', ($(this).height() - 35) / 2);

					}

				 })

			}

        };



        function resizeGalleryDom() {

            var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

            var deviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.Height;

            IMG_WIDTH = deviceWidth;



            mochatouchLi.css('width', deviceWidth);

            mochatouchLi.css('height', deviceHeight);



            imgs = mochatouchUl;

            imgs.swipe(swipeOptions);



            $(".vidPlayBtn").css('left', (deviceWidth - 35) / 2);

            $(".vidPlayBtn").css('top', (deviceHeight - 35) / 2);

        }

		function attachCss(mochaObj)

		{

			var cssToAttach = "<style>"+mochaObj+" .vjs-default-skin .vjs-big-play-button {width: 6em;height: 6em;border-radius: 32px;}"+mochaObj+" .vjs-default-skin div.vjs-big-play-button span {position: absolute;top: 50%;left: 50%;display: block;width: 35px;height: 42px;margin: -20px 0 0 -15px;background: url('videojs/video-js.png') -100px 0;}"+mochaObj+" {position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: #000;overflow: hidden;display: none;z-index: 1000;}"+mochaObj+" ul {float: left;-webkit-transition-property: -webkit-transform;-webkit-transition-duration: 0.5s;-webkit-transition-timing-function: ease-out;transition-property: transform;transition-duration: 0.5s;transition-timing-function: ease-out;padding: 0px;margin: 0px;width: 1000000px;-webkit-transform: translate3d(0px, 0px, 0px);transform: translate3d(0px, 0px, 0px);}"+mochaObj+" li {float: left;-webkit-transform: translate3d(0px, 0px, 0px);transform: translate3d(0px, 0px, 0px);text-align: center;overflow:hidden;}"+mochaObj+" .video-js {float: left}"+mochaObj+" .imgCaption {position: absolute;left: 0;right: 0;width: 90%;padding: 10px 5%;color: #fff;opacity: 0.7;background: #000;z-index: 999;font-size: 14px;}"+mochaObj+" .imgCaptionTop {top: 0;}"+mochaObj+" .imgCaptionBot {bottom: 0;overflow: auto;max-height: 82px;}"+mochaObj+" .vidPlayBtn {height: 35px;width: 35px;z-index: 1;position: absolute;}"+mochaObj+" .topCaption {float: left;width: 32%;text-align: center;}"+mochaObj+" .topCaption img {width: 25px;}"+mochaObj+" #prevModal {opacity: 0.2;}"+mochaObj+" .loaderImg {left: 47%;position: absolute;top: 47%;}"+mochaObj+" .closeVideoModal,"+mochaObj+" .closeIframeModal {position: absolute;top: 0;left: 0;z-index: 1001;color: #fff;}</style>";

			mochatouch.append(cssToAttach);

		}

        function prepareGalleryDom(mochaObj) {

			domPrepared = 1;

			attachCss(mochaObj);

            IMG_WIDTH = deviceWidth;

            mochatouchLi.css('width', deviceWidth);

            mochatouchLi.css('height', deviceHeight);



            imgs = mochatouchUl;

            imgs.swipe(swipeOptions);



            mochatouch.append('<div class="imgCaption imgCaptionTop imgCaptionGallery"> <a href="#" id="prevModal" class="topCaption"><img src="'+basePath+'res/leftArrow.png"></a><a href="#" id="nextModal" class="topCaption"><img src="'+basePath+'res/rightArrow.png"></a><a href="#" id="closeModal" class="topCaption"><img src="'+basePath+'res/back.png"></a></div>');

            videoIndex = 1;

            iframeIndex = 1;

            mochatouchLi.each(function (index) {

                if ($(this).children().is('img')) {

                    tempObj = $(this).children('img');

                    var caption = tempObj.data('caption');

                    tempObj.attr('data-rel', '');

                    tempObj.css('display', 'none');

                } else if ($(this).children().is('video')) {

                    tempObj = $(this).children('video');

                    var caption = tempObj.data('caption');

                    poster = tempObj.attr('poster');

                    videoSrc = tempObj.children('').attr('src');

                    var videoReplaceImg = '<img src="' + poster + '" alt="' + videoIndex + '" data-alt="" style="opacity:0;" id="" onload="imgManipulate(this)" data-rel="">';

                    tempObj.remove();

                    $(this).prepend(videoReplaceImg);

					if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {

						var tempVideo = '<video preload="metadata" id="video' + videoIndex + '" style="display: none;" src="'+videoSrc+'" poster="' + poster + '"></video>';

						$('body').append(tempVideo);

					}else

					{

                    var tempVideo = '<div id="video' + videoIndex + 'Wrap" style="display:none" class="videoModal" ><video id="video' + videoIndex + 'Play" class="video-js vjs-default-skin"  preload="none" controls data-setup="{}"><source src="'+videoSrc+'" type="video/mp4"></video><a href="#" class="closeVideoModal imgCaption" data-index="' + videoIndex + '"><img src="'+basePath+'res/close.png" style="float: right;"></a> </div>';

					mochatouch.append(tempVideo);

					}

                    



                    $(this).append('<img alt="' + videoIndex + '" src="'+basePath+'res/playBtn.png" class="vidPlayBtn">');

                    videoIndex++;

                    tempObj = $(this).children('img:first-child');

                } else if ($(this).children().is('iframe')) {

                    tempObj = $(this).children('iframe');

                    tempObj.attr('id', 'iframe' + iframeIndex + 'Play');

                    iframeHtml = $(this).html();

                    var caption = tempObj.data('caption');

                    iframeSrc = tempObj.attr('src');

                    var tempRes = iframeSrc.split("/");

                    var poster;

                    if (iframeSrc.search("youtube.com") > 6) {

                        poster = 'http://img.youtube.com/vi/' + tempRes[4] + '/0.jpg';

                    } else if (iframeSrc.search("vimeo.com") > 6) {

                        $.getJSON('http://www.vimeo.com/api/v2/video/' + tempRes[4] + '.json?callback=?', {

                            format: "json"

                        }, function (data) {

                            poster = data[0].thumbnail_large;

                            $('#imageSeq' + index).attr('src', '');

                            $('#imageSeq' + index).attr('data-alt', poster);

                            $('#loaderImg' + index).css('display', 'none');

                        });

                        if (poster == undefined) {

                            poster = '';

                        }

                    }

                    var videoReplaceImg = '<img src="' + poster + '" alt="iframe' + iframeIndex + '" data-alt="" style="opacity:0;" id="" onload="imgManipulate(this)" data-rel="">';

                    tempObj.remove();

                    $(this).prepend(videoReplaceImg);

                    var tempVideo = '<div id="iframe' + iframeIndex + 'Wrap" style="display:none" class="iframeModal">' + iframeHtml + '<a href="#" class="closeIframeModal imgCaption" data-index="' + iframeIndex + '"><img src="'+basePath+'res/close.png" style="float: right;"></a></div>';



                    mochatouch.append(tempVideo);



                    $(this).append('<img alt="iframe' + iframeIndex + '" src="'+basePath+'res/playBtn.png" class="vidPlayBtn">');

                    iframeIndex++;

                    tempObj = $(this).children('img:first-child');

                }

				if(caption == undefined){caption = '';}

                $(this).append('<div class="imgCaption imgCaptionBot imgCaptionGallery">' + caption + '</div>');



                $(this).append('<img src="'+basePath+'res//loader.gif" id="loaderImg' + index + '" class="loaderImg">');



                tempObj.attr('id', 'imageSeq' + index);

                tempObj.attr('onload', 'imgManipulate(this)');

				

				if(tempObj.data('src') != '' && tempObj.data('src') != undefined)

				{

					var imgSrc = tempObj.data('src');

				}else

				{

                	var imgSrc = tempObj.attr('src');

				}

                tempObj.attr('data-alt', imgSrc);

                tempObj.attr('src', '');





            });





            $(".vidPlayBtn").css('left', (deviceWidth - 35) / 2);

            $(".vidPlayBtn").css('top', (deviceHeight - 35) / 2);

            loadCurImage(0);

        }



        function swipeStatus(event, phase, direction, distance) {

            if (phase == "move" && (direction == "left" || direction == "right")) {

                var duration = 0;



                if (direction == "left")

                    scrollImages((IMG_WIDTH * currentImg) + distance, duration);



                else if (direction == "right")

                    scrollImages((IMG_WIDTH * currentImg) - distance, duration);



            } else if (phase == "cancel") {

                scrollImages(IMG_WIDTH * currentImg, speed);

            } else if (phase == "end") {

                if (direction == "right")

                    previousImage()

                else if (direction == "left")

                    nextImage()

            }

        }



        function previousImage() {

            currentImg = Math.max(currentImg - 1, 0);

            scrollImages(IMG_WIDTH * currentImg, speed);

            if (currentImg == 0) {

                $("#prevModal").css('opacity', 0.2);

            } else {

                $("#nextModal").css('opacity', 1);

            }

        }



        function nextImage() {

            loadCurImage(currentImg + 1);

            currentImg = Math.min(currentImg + 1, maxImages - 1);

            scrollImages(IMG_WIDTH * currentImg, speed);

            if (currentImg == (maxImages - 1)) {

                $("#nextModal").css('opacity', 0.2);

            } else {

                $("#prevModal").css('opacity', 1);

            }

        }



        function scrollImages(distance, duration) {

            imgs.css("-webkit-transition-duration", (duration / 1000).toFixed(1) + "s");

            imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");

            var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();



            imgs.css("-webkit-transform", "translate3d(" + value + "px,0px,0px)");

            imgs.css("transform", "translate3d(" + value + "px,0px,0px)");

        }



        function loadCurImage(seq) {

            imgSrc = $('#imageSeq' + seq).attr('data-alt');

            $('#imageSeq' + seq).attr('src', imgSrc);

            $('#imageSeq' + seq).on("load", function () {

                $('#loaderImg' + seq).css('display', 'none');

            });



        }

		

        function imgManipulate(detailImgObj, checkResize) {

            dataRel = detailImgObj.getAttribute('data-rel');

            detailImgObj.style.display = "inline";

            var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

            var deviceHeight = (window.innerHeight > 0) ? window.innerHeight : screen.Height;

            if (dataRel == '' || checkResize == 'true') {

                detailImgObj.setAttribute('data-rel', 'resized');

                detailImgObj.style.width = "";

                detailImgObj.style.height = "";

                detailImgObj.style.paddingTop = "";

                origImgWidth = detailImgObj.width;

                origImgHeight = detailImgObj.height;

                ratio = origImgWidth / origImgHeight;



                imgHeightToApply = deviceHeight;

                imgWidthToApply = (deviceWidth * 1);

                detailImgObj.style.height = imgHeightToApply + 'px';

				currentImgWidth = Math.round((detailImgObj.width/detailImgObj.height)*imgHeightToApply);

                if (currentImgWidth > imgWidthToApply) {

                    detailImgObj.style.height = 'auto';

                    detailImgObj.style.width = imgWidthToApply + 'px';

                    currentImgHeight = (origImgHeight / origImgWidth) * imgWidthToApply;

                    detailImgObj.style.paddingTop = ((imgHeightToApply - currentImgHeight) / 2) + 'px';

                } else {



                }

                currentImgWidth = detailImgObj.width;

                currentImgHeight = detailImgObj.height;

                detailImgObj.style.opacity = '1';

            }

        }

		window.imgManipulate = imgManipulate;

		window.mochaTouch = mochaTouch;

		})(window);