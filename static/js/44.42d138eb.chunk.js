(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[44],{757:function(e,t,l){!function(e){"use strict";function t(e){var t=e.getWrapperElement();e.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:t.style.width,height:t.style.height},t.style.width="",t.style.height="auto",t.className+=" CodeMirror-fullscreen",document.documentElement.style.overflow="hidden",e.refresh()}function l(e){var t=e.getWrapperElement();t.className=t.className.replace(/\s*CodeMirror-fullscreen\b/,""),document.documentElement.style.overflow="";var l=e.state.fullScreenRestore;t.style.width=l.width,t.style.height=l.height,window.scrollTo(l.scrollLeft,l.scrollTop),e.refresh()}e.defineOption("fullScreen",!1,(function(s,n,o){o==e.Init&&(o=!1),!o!=!n&&(n?t(s):l(s))}))}(l(129))}}]);