(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da983"],{"6bef":function(e,t,a){"use strict";a.r(t);a("28a5"),a("a481");(function(){if(window.frameElement&&window.frameElement.id){var e=window.parent,t=e.$EDITORUI[window.frameElement.id.replace(/_iframe$/,"")],a=t.editor,o=e.UE,n=o.dom.domUtils,i=o.utils,r=(o.browser,o.ajax,function(e){return document.getElementById(e)});window.nowEditor={editor:a,dialog:t},i.loadFile(document,{href:a.options.themePath+a.options.theme+"/dialogbase.css?cache="+Math.random(),tag:"link",type:"text/css",rel:"stylesheet"});var s=a.getLang(t.className.split("-")[2]);s&&n.on(window,"load",(function(){var e=a.options.langPath+a.options.lang+"/images/";for(var t in s["static"]){var o=r(t);if(o){var d=o.tagName,c=s["static"][t];switch(c.src&&(c=i.extend({},c,!1),c.src=e+c.src),c.style&&(c=i.extend({},c,!1),c.style=c.style.replace(/url\s*\(/g,"url("+e)),d.toLowerCase()){case"var":o.parentNode.replaceChild(document.createTextNode(c),o);break;case"select":for(var l,w=o.options,m=0;l=w[m];)l.innerHTML=c.options[m++];for(var p in c)"options"!=p&&o.setAttribute(p,c[p]);break;default:n.setAttributes(o,c)}}}}))}})()}}]);