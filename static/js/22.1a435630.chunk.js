(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[22,42],{624:function(e,n,o){!function(e){function n(n,o,t){var i,r=n.getWrapperElement();return(i=r.appendChild(document.createElement("div"))).className=t?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof o?i.innerHTML=o:i.appendChild(o),e.addClass(r,"dialog-opened"),i}function o(e,n){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=n}e.defineExtension("openDialog",(function(t,i,r){r||(r={}),o(this,null);var s=n(this,t,r.bottom),u=!1,a=this;function l(n){if("string"==typeof n)d.value=n;else{if(u)return;u=!0,e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s),a.focus(),r.onClose&&r.onClose(s)}}var c,d=s.getElementsByTagName("input")[0];return d?(d.focus(),r.value&&(d.value=r.value,!1!==r.selectValueOnOpen&&d.select()),r.onInput&&e.on(d,"input",(function(e){r.onInput(e,d.value,l)})),r.onKeyUp&&e.on(d,"keyup",(function(e){r.onKeyUp(e,d.value,l)})),e.on(d,"keydown",(function(n){r&&r.onKeyDown&&r.onKeyDown(n,d.value,l)||((27==n.keyCode||!1!==r.closeOnEnter&&13==n.keyCode)&&(d.blur(),e.e_stop(n),l()),13==n.keyCode&&i(d.value,n))})),!1!==r.closeOnBlur&&e.on(s,"focusout",(function(e){null!==e.relatedTarget&&l()}))):(c=s.getElementsByTagName("button")[0])&&(e.on(c,"click",(function(){l(),a.focus()})),!1!==r.closeOnBlur&&e.on(c,"blur",l),c.focus()),l})),e.defineExtension("openConfirm",(function(t,i,r){o(this,null);var s=n(this,t,r&&r.bottom),u=s.getElementsByTagName("button"),a=!1,l=this,c=1;function d(){a||(a=!0,e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s),l.focus())}u[0].focus();for(var f=0;f<u.length;++f){var p=u[f];!function(n){e.on(p,"click",(function(o){e.e_preventDefault(o),d(),n&&n(l)}))}(i[f]),e.on(p,"blur",(function(){--c,setTimeout((function(){c<=0&&d()}),200)})),e.on(p,"focus",(function(){++c}))}})),e.defineExtension("openNotification",(function(t,i){o(this,l);var r,s=n(this,t,i&&i.bottom),u=!1,a=i&&"undefined"!==typeof i.duration?i.duration:5e3;function l(){u||(u=!0,clearTimeout(r),e.rmClass(s.parentNode,"dialog-opened"),s.parentNode.removeChild(s))}return e.on(s,"click",(function(n){e.e_preventDefault(n),l()})),a&&(r=setTimeout(l,a)),l}))}(o(129))},791:function(e,n,o){!function(e){"use strict";function n(e,n,o,t,i){e.openDialog?e.openDialog(n,i,{value:t,selectValueOnOpen:!0,bottom:e.options.search.bottom}):i(prompt(o,t))}function o(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}function t(e,n){var o=Number(n);return/^[-+]/.test(n)?e.getCursor().line+o:o-1}e.defineOption("search",{bottom:!1}),e.commands.jumpToLine=function(e){var i=e.getCursor();n(e,o(e),e.phrase("Jump to line:"),i.line+1+":"+i.ch,(function(n){var o;if(n)if(o=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(n))e.setCursor(t(e,o[1]),Number(o[2]));else if(o=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(n)){var r=Math.round(e.lineCount()*Number(o[1])/100);/^[-+]/.test(o[1])&&(r=i.line+r+1),e.setCursor(r-1,i.ch)}else(o=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(n))&&e.setCursor(t(e,o[1]),i.ch)}))},e.keyMap.default["Alt-G"]="jumpToLine"}(o(129),o(624))}}]);