System.register(["jimu-core","jimu-layouts/layout-runtime"],(function(e,t){var r={},o={};return{setters:[function(e){r.BrowserSizeMode=e.BrowserSizeMode,r.getAppStore=e.getAppStore},function(e){o.searchUtils=e.searchUtils}],execute:function(){e((()=>{"use strict";var e={79244:e=>{e.exports=r},41496:e=>{e.exports=o}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{s.r(a),s.d(a,{default:()=>r});var e=s(79244),t=s(41496);const r={selectionInBookmark:(r,o,s,a=!0)=>{if(!r||!r.layoutItemId||!r.layoutId)return!1;let n;return a?n=t.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(s,r,o,(0,e.getAppStore)().getState().browserSizeMode):(n=[],n.push(...t.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(s,r,o,e.BrowserSizeMode.Large)),n.push(...t.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(s,r,o,e.BrowserSizeMode.Medium)),n.push(...t.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(s,r,o,e.BrowserSizeMode.Small))),n.length>0}}})(),a})())}}}));