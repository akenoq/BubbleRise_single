function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function playPageTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug":".play-page__play-field.play-field\n.play-page__panel-buttons.panel\n    .panel__button-back\n        img.panel__button-back_img(src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\")\n    .panel__button-restart\n        img.panel__button-restart_img(src=\".\u002F..\u002F..\u002Fimg\u002Frestart.png\")\n    .panel__score-label\n        p score:\n    strong\n        .panel__score-box(align=\"right\")\n"};
;pug_debug_line = 1;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cdiv class=\"play-page__play-field play-field\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cdiv class=\"play-page__panel-buttons panel\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel__button-back\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cimg class=\"panel__button-back_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel__button-restart\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cimg class=\"panel__button-restart_img\" src=\".\u002F..\u002F..\u002Fimg\u002Frestart.png\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel__score-label\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "score:\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cstrong\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fstatic\u002Fviews\u002Fplay-page\u002Fplay-page.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel__score-box\" align=\"right\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}