// !!!! - DO NOT MODIFY - !!!!
// THIS FILE IS DEPLOYED AUTOMATICALLY BY MATTv2.
//
//  Deployment info:
//    Updated at:     2021-04-01T16:15:01+00:00
//    Cause:          Manual deployment.
//    Deployment ID:  121331
//    Project:        339
//    Environment:    741 - master
//    MD5:            c80f904adebf5b70bd442939f028fea6
//    Signature:      eyJpdiI6IldWOUY0am42d2xlaFhMcWluNXJxZHc9PSIsInZhbHVlIjoiTExsSmEzeEFDU0J1VFdsU2E2T1dycVVXeHNwcktJVDVuNWVNbVwvdFJjaGtrd2V3QU94TGJOUlh6Q29PODREUEpQK1dScjJZZlFEUmowNGpmcXpGNE9nTkhpUWdoT1hsU2M3Wk1Ea29DZzhTaEpRUzNvRWhDWnYxcml3S1k1aHRrRjlRNkpZVFwvOEgyMTVLVXpEUmNQTXhrTXFRQ2t0VW0xeERSM09ZbFBCTmhGQzJCeERXVGQ4THllK0p0TGxtcTlSZW1pQWFlMWJVQlwvREhMY0VZYWxUZElyZDFGMHFia1BRbXlqYjBKUUN4WEZNS1E5Ulo5S3pHVmpZQllSZDVRcGlGOWNaREZ6YTZLelFRejhleUNoeXpPWXZhZWJzZWpFWWMrNmpvNFdQYWtIOWhPRjRxbWFONTQ3dm9tSk5oRndrOUROWkUwUzR1SnU3eGI2XC91SnZPTnVvSlJYdzE3WjdVUUlxbWErZ25WcGM4aE5BNlFpaUh2ZXpXOFhCWXd6ZCIsIm1hYyI6ImJjYWNlMDRlM2RjNTMxZTE4ZTRjOGI4OTA3ZjU2YjlmZWM4ZTEyOWYzYzdmNmQ5ODUzZDg5NTg4MTdhYWU4ZTkifQ==
/*! lozad.js - v1.16.0 - 2020-09-10
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,v=function(t){return window&&window[t]},h=["data-iesrc","data-alt","data-src","data-srcset","data-background-image","data-toggle-class"],p={rootMargin:"0px",threshold:0,enableAutoReload:!1,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};
/**
   *
   * @param {string} type
   *
   */function k(t){t.setAttribute("data-loaded",!0)}var y=function(t){return"true"===t.getAttribute("data-loaded")},w=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,e,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=Object.assign({},p,t),n=i.root,d=i.rootMargin,u=i.threshold,g=i.enableAutoReload,s=i.load,c=i.loaded,l=void 0,b=void 0;v("IntersectionObserver")&&(l=new IntersectionObserver((r=s,a=c,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),y(t.target)||(r(t.target),k(t.target),a(t.target)))})}),{root:n,rootMargin:d,threshold:u})),v("MutationObserver")&&g&&(b=new MutationObserver((e=s,function(t){t.forEach(function(t){y(t.target)&&"attributes"===t.type&&-1<h.indexOf(t.attributeName)&&e(t.target)})})));for(var f,m=w(o,n),A=0;A<m.length;A++)(f=m[A]).getAttribute("data-placeholder-background")&&(f.style.background=f.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=w(o,n),e=0;e<t.length;e++)y(t[e])||(l?(b&&g&&b.observe(t[e],{subtree:!0,attributes:!0,attributeFilter:h}),l.observe(t[e])):(s(t[e]),k(t[e]),c(t[e])))},triggerLoad:function(t){y(t)||(s(t),k(t),c(t))},observer:l,mutationObserver:b}}});
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();