/*! This file is auto-generated */
window.wp=window.wp||{},function(g,u){u.editor=u.editor||{},window.switchEditors=new function(){var h,b,t={};function e(){!h&&window.tinymce&&(h=window.tinymce,(b=h.$)(document).on("click",function(e){e=b(e.target);e.hasClass("wp-switch-editor")&&n(e.attr("data-wp-editor-id"),e.hasClass("switch-tmce")?"tmce":"html")}))}function v(e){e=b(".mce-toolbar-grp",e.getContainer())[0],e=e&&e.clientHeight;return e&&10<e&&e<200?parseInt(e,10):30}function n(e,t){t=t||"toggle";var n,i,r,a,o,c,p,s,d,l,g=h.get(e=e||"content"),u=b("#wp-"+e+"-wrap"),w=b("#"+e),m=w[0];if("tmce"===(t="toggle"===t?g&&!g.isHidden()?"html":"tmce":t)||"tinymce"===t){if(g&&!g.isHidden())return!1;void 0!==window.QTags&&window.QTags.closeAllTags(e);var f=parseInt(m.style.height,10)||0;(g?g.getParam("wp_keep_scroll_position"):window.tinyMCEPreInit.mceInit[e]&&window.tinyMCEPreInit.mceInit[e].wp_keep_scroll_position)&&(a=w)&&a.length&&(a=a[0],c=function(e,t){var n=t.cursorStart,t=t.cursorEnd,i=x(e,n);i&&(n=-1!==["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(i.tagType)?i.ltPos:i.gtPos);i=x(e,t);i&&(t=i.gtPos);i=E(e,n);i&&!i.showAsPlainText&&(n=i.urlAtStartOfContent?i.endIndex:i.startIndex);i=E(e,t);i&&!i.showAsPlainText&&(t=i.urlAtEndOfContent?i.startIndex:i.endIndex);return{cursorStart:n,cursorEnd:t}}(a.value,{cursorStart:a.selectionStart,cursorEnd:a.selectionEnd}),o=c.cursorStart,c=c.cursorEnd,d=o!==c?"range":"single",p=null,s=y(b,"&#65279;").attr("data-mce-type","bookmark"),"range"==d&&(d=a.value.slice(o,c),l=s.clone().addClass("mce_SELRES_end"),p=[d,l[0].outerHTML].join("")),a.value=[a.value.slice(0,o),s.clone().addClass("mce_SELRES_start")[0].outerHTML,p,a.value.slice(c)].join("")),g?(g.show(),!h.Env.iOS&&f&&50<(f=f-v(g)+14)&&f<5e3&&g.theme.resizeTo(null,f),g.getParam("wp_keep_scroll_position")&&S(g)):h.init(window.tinyMCEPreInit.mceInit[e]),u.removeClass("html-active").addClass("tmce-active"),w.attr("aria-hidden",!0),window.setUserSetting("editor","tinymce")}else if("html"===t){if(g&&g.isHidden())return!1;g?(h.Env.iOS||(f=(d=g.iframeElement)?parseInt(d.style.height,10):0)&&50<(f=f+v(g)-14)&&f<5e3&&(m.style.height=f+"px"),l=null,g.getParam("wp_keep_scroll_position")&&(l=function(e){var t,n,i,r,a,o,c,p=e.getWin().getSelection();if(p&&!(p.rangeCount<1))return c="SELRES_"+Math.random(),o=y(e.$,c),a=o.clone().addClass("mce_SELRES_start"),o=o.clone().addClass("mce_SELRES_end"),r=p.getRangeAt(0),t=r.startContainer,n=r.startOffset,i=r.cloneRange(),0<e.$(t).parents(".mce-offscreen-selection").length?(t=e.$("[data-mce-selected]")[0],a.attr("data-mce-object-selection","true"),o.attr("data-mce-object-selection","true"),e.$(t).before(a[0]),e.$(t).after(o[0])):(i.collapse(!1),i.insertNode(o[0]),i.setStart(t,n),i.collapse(!0),i.insertNode(a[0]),r.setStartAfter(a[0]),r.setEndBefore(o[0]),p.removeAllRanges(),p.addRange(r)),e.on("GetContent",_),t=$(e.getContent()),e.off("GetContent",_),a.remove(),o.remove(),n=new RegExp('<span[^>]*\\s*class="mce_SELRES_start"[^>]+>\\s*'+c+"[^<]*<\\/span>(\\s*)"),i=new RegExp('(\\s*)<span[^>]*\\s*class="mce_SELRES_end"[^>]+>\\s*'+c+"[^<]*<\\/span>"),p=t.match(n),r=t.match(i),p?(e=p.index,a=p[0].length,o=null,r&&(-1!==p[0].indexOf("data-mce-object-selection")&&(a-=p[1].length),c=r.index,-1!==r[0].indexOf("data-mce-object-selection")&&(c-=r[1].length),o=c-a),{start:e,end:o}):null}(g)),g.hide(),l&&(o=g,(s=l)&&(n=o.getElement(),i=s.start,r=s.end||s.start,n.focus&&setTimeout(function(){n.setSelectionRange(i,r),n.blur&&n.blur(),n.focus()},100)))):w.css({display:"",visibility:""}),u.removeClass("tmce-active").addClass("html-active"),w.attr("aria-hidden",!1),window.setUserSetting("editor","html")}}function x(e,t){var n,i=e.lastIndexOf("<",t-1);return(e.lastIndexOf(">",t)<i||">"===e.substr(t,1))&&(e=(t=e.substr(i)).match(/<\s*(\/)?(\w+|\!-{2}.*-{2})/))?(n=e[2],{ltPos:i,gtPos:i+t.indexOf(">")+1,tagType:n,isClosingTag:!!e[1]}):null}function E(e,t){for(var n=function(e){var t,n=function(e){var t=e.match(/\[+([\w_-])+/g),n=[];if(t)for(var i=0;i<t.length;i++){var r=t[i].replace(/^\[+/g,"");-1===n.indexOf(r)&&n.push(r)}return n}(e);if(0===n.length)return[];var i,r=u.shortcode.regexp(n.join("|")),a=[];for(;i=r.exec(e);){var o="["===i[1];t={shortcodeName:i[2],showAsPlainText:o,startIndex:i.index,endIndex:i.index+i[0].length,length:i[0].length},a.push(t)}var c=new RegExp('(^|[\\n\\r][\\n\\r]|<p>)(https?:\\/\\/[^s"]+?)(<\\/p>s*|[\\n\\r][\\n\\r]|$)',"gi");for(;i=c.exec(e);)t={shortcodeName:"url",showAsPlainText:!1,startIndex:i.index,endIndex:i.index+i[0].length,length:i[0].length,urlAtStartOfContent:""===i[1],urlAtEndOfContent:""===i[3]},a.push(t);return a}(e),i=0;i<n.length;i++){var r=n[i];if(t>=r.startIndex&&t<=r.endIndex)return r}}function y(e,t){return e("<span>").css({display:"inline-block",width:0,overflow:"hidden","line-height":0}).html(t||"")}function S(e){var t,n,i,r,a,o,c,p,s=e.$(".mce_SELRES_start").attr("data-mce-bogus",1),d=e.$(".mce_SELRES_end").attr("data-mce-bogus",1);s.length&&(e.focus(),d.length?((i=e.getDoc().createRange()).setStartAfter(s[0]),i.setEndBefore(d[0]),e.selection.setRng(i)):e.selection.select(s[0])),e.getParam("wp_keep_scroll_position")&&(i=s,i=(t=e).$(i).offset().top,r=t.$(t.getContentAreaContainer()).offset().top,a=v(t),o=g("#wp-content-editor-tools"),p=c=0,o.length&&(c=o.height(),p=o.offset().top),o=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,(r+=i)<(o-=c+a)||(a=t.settings.wp_autoresize_on?(n=g("html,body"),Math.max(r-o/2,p-c)):(n=g(t.contentDocument).find("html,body"),i),n.animate({scrollTop:parseInt(a,10)},100))),l(s),l(d),e.save()}function l(e){var t=e.parent();e.remove(),!t.is("p")||t.children().length||t.text()||t.remove()}function _(e){e.content=e.content.replace(/<p>(?:<br ?\/?>|\u00a0|\uFEFF| )*<\/p>/g,"<p>&nbsp;</p>")}function $(e){var t="blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure",n=t+"|div|p",t=t+"|pre",i=!1,r=!1,a=[];return e?(-1!==(e=-1===e.indexOf("<script")&&-1===e.indexOf("<style")?e:e.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(e){return a.push(e),"<wp-preserve>"})).indexOf("<pre")&&(i=!0,e=e.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g,function(e){return(e=(e=e.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp-line-break>")).replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp-line-break>")).replace(/\r?\n/g,"<wp-line-break>")})),-1!==e.indexOf("[caption")&&(r=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>").replace(/[\r\n\t]+/,"")})),e=(e=(e=(e=(e=-1!==(e=-1!==(e=-1!==(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(new RegExp("\\s*</("+n+")>\\s*","g"),"</$1>\n")).replace(new RegExp("\\s*<((?:"+n+")(?: [^>]*)?)>","g"),"\n<$1>")).replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>")).replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n")).replace(/\s*<p>/gi,"")).replace(/\s*<\/p>\s*/gi,"\n\n")).replace(/\n[\s\u00a0]+\n/g,"\n\n")).replace(/(\s*)<br ?\/?>\s*/gi,function(e,t){return t&&-1!==t.indexOf("\n")?"\n\n":"\n"})).replace(/\s*<div/g,"\n<div")).replace(/<\/div>\s*/g,"</div>\n")).replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n")).replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption")).replace(new RegExp("\\s*<((?:"+t+")(?: [^>]*)?)\\s*>","g"),"\n<$1>")).replace(new RegExp("\\s*</("+t+")>\\s*","g"),"</$1>\n")).replace(/<((li|dt|dd)[^>]*)>/g," \t<$1>")).indexOf("<option")?(e=e.replace(/\s*<option/g,"\n<option")).replace(/\s*<\/select>/g,"\n</select>"):e).indexOf("<hr")?e.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n"):e).indexOf("<object")?e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/[\r\n]+/g,"")}):e).replace(/<\/p#>/g,"</p>\n")).replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1")).replace(/^\s+/,"")).replace(/[\s\u00a0]+$/,""),i&&(e=e.replace(/<wp-line-break>/g,"\n")),r&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),a.length?e.replace(/<wp-preserve>/g,function(){return a.shift()}):e):""}function i(e){var t=!1,n=!1,i="table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary";return-1===(e=(e=-1!==(e=e.replace(/\r\n|\r/g,"\n")).indexOf("<object")?e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/\n+/g,"")}):e).replace(/<[^<>]+>/g,function(e){return e.replace(/[\n\t ]+/g," ")})).indexOf("<pre")&&-1===e.indexOf("<script")||(t=!0,e=e.replace(/<(pre|script)[^>]*>[\s\S]*?<\/\1>/g,function(e){return e.replace(/\n/g,"<wp-line-break>")})),-1!==(e=-1!==e.indexOf("<figcaption")?(e=e.replace(/\s*(<figcaption[^>]*>)/g,"$1")).replace(/<\/figcaption>\s*/g,"</figcaption>"):e).indexOf("[caption")&&(n=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return(e=(e=e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>")).replace(/<[^<>]+>/g,function(e){return e.replace(/[\n\t ]+/," ")})).replace(/\s*\n\s*/g,"<wp-temp-br />")})),e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e+="\n\n").replace(/<br \/>\s*<br \/>/gi,"\n\n")).replace(new RegExp("(<(?:"+i+")(?: [^>]*)?>)","gi"),"\n\n$1")).replace(new RegExp("(</(?:"+i+")>)","gi"),"$1\n\n")).replace(/<hr( [^>]*)?>/gi,"<hr$1>\n\n")).replace(/\s*<option/gi,"<option")).replace(/<\/option>\s*/gi,"</option>")).replace(/\n\s*\n+/g,"\n\n")).replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n")).replace(/<p>\s*?<\/p>/gi,"")).replace(new RegExp("<p>\\s*(</?(?:"+i+")(?: [^>]*)?>)\\s*</p>","gi"),"$1")).replace(/<p>(<li.+?)<\/p>/gi,"$1")).replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>")).replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>")).replace(new RegExp("<p>\\s*(</?(?:"+i+")(?: [^>]*)?>)","gi"),"$1")).replace(new RegExp("(</?(?:"+i+")(?: [^>]*)?>)\\s*</p>","gi"),"$1")).replace(/(<br[^>]*>)\s*\n/gi,"$1")).replace(/\s*\n/g,"<br />\n")).replace(new RegExp("(</?(?:"+i+")[^>]*>)\\s*<br />","gi"),"$1")).replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1")).replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]")).replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\/p>/g,function(e,t,n){return n.match(/<p( [^>]*)?>/)?e:t+"<p>"+n+"</p>"}),t&&(e=e.replace(/<wp-line-break>/g,"\n")),e=n?e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>"):e}function r(e){e={o:t,data:e,unfiltered:e};return g&&g("body").trigger("beforePreWpautop",[e]),e.data=$(e.data),g&&g("body").trigger("afterPreWpautop",[e]),e.data}function a(e){e={o:t,data:e,unfiltered:e};return g&&g("body").trigger("beforeWpautop",[e]),e.data=i(e.data),g&&g("body").trigger("afterWpautop",[e]),e.data}return g(document).on("tinymce-editor-init.keep-scroll-position",function(e,t){t.$(".mce_SELRES_start").length&&S(t)}),g?g(e):document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):window.attachEvent&&(window.attachEvent("onload",e),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&e()})),u.editor.autop=a,u.editor.removep=r,t={go:n,wpautop:a,pre_wpautop:r,_wp_Autop:i,_wp_Nop:$}},u.editor.initialize=function(e,t){var n,i,r,a,o,c,p,s,d;g&&e&&u.editor.getDefaultSettings&&(d=u.editor.getDefaultSettings(),(t=t||{tinymce:!0}).tinymce&&t.quicktags&&(i=g("#"+e),r=g("<div>").attr({class:"wp-core-ui wp-editor-wrap tmce-active",id:"wp-"+e+"-wrap"}),a=g('<div class="wp-editor-container">'),o=g("<button>").attr({type:"button","data-wp-editor-id":e}),c=g('<div class="wp-editor-tools">'),t.mediaButtons&&(p="Add Media",window._wpMediaViewsL10n&&window._wpMediaViewsL10n.addMedia&&(p=window._wpMediaViewsL10n.addMedia),(s=g('<button type="button" class="button insert-media add_media">')).append('<span class="wp-media-buttons-icon"></span>'),s.append(document.createTextNode(" "+p)),s.data("editor",e),c.append(g('<div class="wp-media-buttons">').append(s))),r.append(c.append(g('<div class="wp-editor-tabs">').append(o.clone().attr({id:e+"-tmce",class:"wp-switch-editor switch-tmce"}).text(window.tinymce.translate("Visual"))).append(o.attr({id:e+"-html",class:"wp-switch-editor switch-html"}).text(window.tinymce.translate("Text")))).append(a)),i.after(r),a.append(i)),window.tinymce&&t.tinymce&&("object"!=typeof t.tinymce&&(t.tinymce={}),(n=g.extend({},d.tinymce,t.tinymce)).selector="#"+e,g(document).trigger("wp-before-tinymce-init",n),window.tinymce.init(n),window.wpActiveEditor||(window.wpActiveEditor=e)),window.quicktags&&t.quicktags&&("object"!=typeof t.quicktags&&(t.quicktags={}),(n=g.extend({},d.quicktags,t.quicktags)).id=e,g(document).trigger("wp-before-quicktags-init",n),window.quicktags(n),window.wpActiveEditor||(window.wpActiveEditor=n.id)))},u.editor.remove=function(e){var t,n=g("#wp-"+e+"-wrap");window.tinymce&&(t=window.tinymce.get(e))&&(t.isHidden()||t.save(),t.remove()),window.quicktags&&(t=window.QTags.getInstance(e))&&t.remove(),n.length&&(n.after(g("#"+e)),n.remove())},u.editor.getContent=function(e){var t;if(g&&e)return window.tinymce&&(t=window.tinymce.get(e))&&!t.isHidden()&&t.save(),g("#"+e).val()}}(window.jQuery,window.wp);