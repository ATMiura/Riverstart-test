!function(e){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={0:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/js/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([4,1]),n()}({4:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=(n(5),n(1)),r=n.n(a),s=n(2),l={init:function(){var e=this;e.window=o()(window),e.document=o()(document),e.html=o()("html"),e.body=o()("body"),e.browser=Object(s.a)(),e.mobile=e.browser.mobile,e.html.removeClass("no-js").addClass(e.mobile?"mobile":"desktop").addClass(e.browser.name),0!==e.browser.os.indexOf("OS")&&0!==e.browser.os.indexOf("iOS")||e.html.addClass("huapple"),e.mobile||r()()}},c=n(3),u=n.n(c),f={init:function(){(f.app=this).document.ready((function(){f.initInputLabel(),f.initMask()}))},initInputLabel:function(){var e=".js-label input:not([required]), .js-label textarea:not([required])",t="_label-empty";this.app.document.on("focus",e,(function(){o()(this).siblings("label").removeClass(t)})).on("blur",e,(function(){o()(this).val()||o()(this).siblings("label").addClass(t)})),o()(e).each((function(){o()(this).val()||o()(this).siblings("label").addClass(t)}))},initMask:function(){var e=document.querySelectorAll('input[type="tel"]');u()({mask:"+7 (999) 999-99-99",postValidation:function(e,t,n){return 0===t&&-1!==["0","8"].indexOf(n)?{remove:4}:4!==t||"0"!==n},showMaskOnHover:!1,jitMasking:!0}).mask(e)}},p=f;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h={breakpoints:{sm:320,md:768,lg:1280},media:320,resizeEventName:"app_resize",submitEventName:"app_submit",popupLoadedEventName:"app_popup_loaded",popupClosedEventName:"app_popup_closed",tabChangedEventName:"app_tab_changed",scrollToOffset:200,scrollToSpeed:500,init:function(){var e=this;"object"===("undefined"==typeof appConfig?"undefined":d(appConfig))&&Object.keys(appConfig).forEach((function(e){Object.prototype.hasOwnProperty.call(h,e)&&(h[e]=appConfig[e])})),h.currentID=0,this.page=l,this.page.init.call(this),this.forms=p,this.forms.init.call(this),h.checkMedia(),h.window.on("resize",h.checkMedia),window.jQuery=o.a,(window.app=h).document.ready((function(){e.initScrollTo()}))},initScrollTo:function(){h.document.on("click",".js-scrollto",(function(){var e,t=o()(this).data("href");!t||(e=o()(t)).length&&o()("html, body").animate({scrollTop:e.offset().top-h.scrollToOffset},h.scrollToSpeed)}))},initTabs:function(){o()(".js-tabs").each((function(){var e=o()(this),t=e.find(".js-tabs__wrapper"),n=e.find(".js-tabs__trigger[data-href]");n.length&&(n.filter("._active").length||n.first().addClass("_active"),n.filter(":not(._active)").each((function(){o()(o()(this).data("href")).hide()})),n.filter("._active").each((function(){o()(o()(this).data("href")).addClass("_active")})),n.on("click",(function(){var i,a,r,s,l;o()(this).hasClass("_active")||(i=o()(this).data("href"),(a=o()(i)).length&&(n.removeClass("_active"),o()(this).addClass("_active"),(r=o()(this).parent()).animate({scrollLeft:r.scrollLeft()+o()(this).position().left-parseInt(r.css("padding-left"))}),s=e.find(".js-tabs__target._active"),t.css("height",s.outerHeight()),s.fadeOut(),a.css({visibility:"hidden",display:"block"}),l=a.outerHeight(),a.css({display:"none",visibility:"visible"}),t.animate({height:l},(function(){a.fadeIn((function(){s.removeClass("_active"),a.addClass("_active"),t.css("height","auto")}))}))))})))}))},formatPrice:function(e){return this.formatNumber(e,0,","," ")},formatNumber:function(e,t,n,i){var o,a;return isNaN(t=Math.abs(t))&&(t=2),null==n&&(n=","),null==i&&(i="."),3<(a=(o=parseInt(e=(+e||0).toFixed(t))+"").length)?a%=3:a=0,(a?o.substr(0,a)+i:"")+o.substr(a).replace(/(\d{3})(?=\d)/g,"$1"+i)+(t?n+Math.abs(e-o).toFixed(t).replace(/-/,"0").slice(2):"")},checkMedia:function(){var e=h.media;for(var t in h.breakpoints)h.window.outerWidth()>=h.breakpoints[t]&&(h.media=h.breakpoints[t]);h.media!=e&&h.document.trigger(h.resizeEventName,{media:h.media})},uniqID:function(){return"app_id_".concat(h.currentID++)},getNumEnding:function(e,t){var n;if(11<=(e%=100)&&e<=19)n=t[2];else switch(e%10){case 1:n=t[0];break;case 2:case 3:case 4:n=t[1];break;default:n=t[2]}return n},getKeyByValue:function(e,t){return Object.keys(e).find((function(n){return e[n]===t}))}};h.init()}});