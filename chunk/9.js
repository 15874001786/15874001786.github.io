/*! For license information please see 9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"107":function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var i=function createCommonjsModule(t,r,n){return t(n={"path":r,"exports":{},"require":function(t,r){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}((function(t){!function(){var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var a=typeof i;if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i)){if(i.length){var s=o.apply(null,i);s&&t.push(s)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var c in i)r.call(i,c)&&i[c]&&t.push(c);else t.push(i.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):window.classNames=o}()}))},"88":function(t,r,n){"use strict";n.r(r),n.d(r,"taro_navigator_core",(function(){return c}));var i=n(32),a=n(107),s=n(35),c=function(){function e(t){Object(i.g)(this,t),this.onSuccess=Object(i.c)(this,"cuccess",7),this.onFail=Object(i.c)(this,"fail",7),this.onComplete=Object(i.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return e.prototype.onClick=function(){var t=this,r=t.openType,n=t.onSuccess,i=t.onFail,a=t.onComplete,c=Promise.resolve();switch(r){case"navigate":c=s.navigateTo({"url":this.url});break;case"redirect":c=s.redirectTo({"url":this.url});break;case"switchTab":c=s.switchTab({"url":this.url});break;case"reLaunch":c=s.reLaunch({"url":this.url});break;case"navigateBack":c=s.navigateBack({"delta":this.delta});break;case"exit":c=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}c&&c.then((function(t){n.emit(t)})).catch((function(t){i.emit(t)})).finally((function(){a.emit()}))},e.prototype.render=function(){var t,r=this.isHover,n=this.hoverClass;return Object(i.e)(i.a,{"class":Object(a.a)((t={},t[n]=r,t))})},e}();c.style=".navigator-hover{background:#efefef}"}}]);