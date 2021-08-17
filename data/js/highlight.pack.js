/*! highlight.js v9.13.1 | BSD3 License | git.io/hljslicense */
!function (e) { var n = "object" == typeof window && window || "object" == typeof self && self; "undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function () { return n.hljs })) }(function (e) { function n(e) { return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") } function t(e) { return e.nodeName.toLowerCase() } function r(e, n) { var t = e && e.exec(n); return t && 0 === t.index } function a(e) { return k.test(e) } function i(e) { var n, t, r, i, o = e.className + " "; if (o += e.parentNode ? e.parentNode.className : "", t = M.exec(o)) return w(t[1]) ? t[1] : "no-highlight"; for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++)if (i = o[n], a(i) || w(i)) return i } function o(e) { var n, t = {}, r = Array.prototype.slice.call(arguments, 1); for (n in e) t[n] = e[n]; return r.forEach(function (e) { for (n in e) t[n] = e[n] }), t } function c(e) { var n = []; return function r(e, a) { for (var i = e.firstChild; i; i = i.nextSibling)3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({ event: "start", offset: a, node: i }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({ event: "stop", offset: a, node: i })); return a }(e, 0), n } function u(e, r, a) { function i() { return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r } function o(e) { function r(e) { return " " + e.nodeName + '="' + n(e.value).replace('"', "&quot;") + '"' } l += "<" + t(e) + E.map.call(e.attributes, r).join("") + ">" } function c(e) { l += "</" + t(e) + ">" } function u(e) { ("start" === e.event ? o : c)(e.node) } for (var s = 0, l = "", f = []; e.length || r.length;){ var g = i(); if (l += n(a.substring(s, g[0].offset)), s = g[0].offset, g === e) { f.reverse().forEach(c); do u(g.splice(0, 1)[0]), g = i(); while (g === e && g.length && g[0].offset === s); f.reverse().forEach(o) } else "start" === g[0].event ? f.push(g[0].node) : f.pop(), u(g.splice(0, 1)[0]) } return l + n(a.substr(s)) } function s(e) { return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function (n) { return o(e, { v: null }, n) })), e.cached_variants || e.eW && [o(e)] || [e] } function l(e) { function n(e) { return e && e.source || e } function t(t, r) { return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : "")) } function r(a, i) { if (!a.compiled) { if (a.compiled = !0, a.k = a.k || a.bK, a.k) { var o = {}, c = function (n, t) { e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) { var t = e.split("|"); o[t[0]] = [n, t[1] ? Number(t[1]) : 1] }) }; "string" == typeof a.k ? c("keyword", a.k) : B(a.k).forEach(function (e) { c(e, a.k[e]) }), a.k = o } a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.endSameAsBegin && (a.e = a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []), a.c = Array.prototype.concat.apply([], a.c.map(function (e) { return s("self" === e ? a : e) })), a.c.forEach(function (e) { r(e, a) }), a.starts && r(a.starts, i); var u = a.c.map(function (e) { return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b }).concat([a.tE, a.i]).map(n).filter(Boolean); a.t = u.length ? t(u.join("|"), !0) : { exec: function () { return null } } } } r(e) } function f(e, t, a, i) { function o(e) { return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m") } function c(e, n) { var t, a; for (t = 0, a = n.c.length; a > t; t++)if (r(n.c[t].bR, e)) return n.c[t].endSameAsBegin && (n.c[t].eR = o(n.c[t].bR.exec(e)[0])), n.c[t] } function u(e, n) { if (r(e.eR, n)) { for (; e.endsParent && e.parent;)e = e.parent; return e } return e.eW ? u(e.parent, n) : void 0 } function s(e, n) { return !a && r(n.iR, e) } function p(e, n) { var t = R.cI ? n[0].toLowerCase() : n[0]; return e.k.hasOwnProperty(t) && e.k[t] } function d(e, n, t, r) { var a = r ? "" : j.classPrefix, i = '<span class="' + a, o = t ? "" : I; return i += e + '">', i + n + o } function h() { var e, t, r, a; if (!E.k) return n(k); for (a = "", t = 0, E.lR.lastIndex = 0, r = E.lR.exec(k); r;)a += n(k.substring(t, r.index)), e = p(E, r), e ? (M += e[1], a += d(e[0], n(r[0]))) : a += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(k); return a + n(k.substr(t)) } function b() { var e = "string" == typeof E.sL; if (e && !L[E.sL]) return n(k); var t = e ? f(E.sL, k, !0, B[E.sL]) : g(k, E.sL.length ? E.sL : void 0); return E.r > 0 && (M += t.r), e && (B[E.sL] = t.top), d(t.language, t.value, !1, !0) } function v() { y += null != E.sL ? b() : h(), k = "" } function m(e) { y += e.cN ? d(e.cN, "", !0) : "", E = Object.create(e, { parent: { value: E } }) } function N(e, n) { if (k += e, null == n) return v(), 0; var t = c(n, E); if (t) return t.skip ? k += n : (t.eB && (k += n), v(), t.rB || t.eB || (k = n)), m(t, n), t.rB ? 0 : n.length; var r = u(E, n); if (r) { var a = E; a.skip ? k += n : (a.rE || a.eE || (k += n), v(), a.eE && (k = n)); do E.cN && (y += I), E.skip || E.sL || (M += E.r), E = E.parent; while (E !== r.parent); return r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), m(r.starts, "")), a.rE ? 0 : n.length } if (s(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"'); return k += n, n.length || 1 } var R = w(e); if (!R) throw new Error('Unknown language: "' + e + '"'); l(R); var x, E = i || R, B = {}, y = ""; for (x = E; x !== R; x = x.parent)x.cN && (y = d(x.cN, "", !0) + y); var k = "", M = 0; try { for (var C, A, S = 0; ;){ if (E.t.lastIndex = S, C = E.t.exec(t), !C) break; A = N(t.substring(S, C.index), C[0]), S = C.index + A } for (N(t.substr(S)), x = E; x.parent; x = x.parent)x.cN && (y += I); return { r: M, value: y, language: e, top: E } } catch (O) { if (O.message && -1 !== O.message.indexOf("Illegal")) return { r: 0, value: n(t) }; throw O } } function g(e, t) { t = t || j.languages || B(L); var r = { r: 0, value: n(e) }, a = r; return t.filter(w).filter(x).forEach(function (n) { var t = f(n, e, !1); t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t) }), a.language && (r.second_best = a), r } function p(e) { return j.tabReplace || j.useBR ? e.replace(C, function (e, n) { return j.useBR && "\n" === e ? "<br>" : j.tabReplace ? n.replace(/\t/g, j.tabReplace) : "" }) : e } function d(e, n, t) { var r = n ? y[n] : t, a = [e.trim()]; return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim() } function h(e) { var n, t, r, o, s, l = i(e); a(l) || (j.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, s = n.textContent, r = l ? f(l, s, !0) : g(s), t = c(n), t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = u(t, c(o), s)), r.value = p(r.value), e.innerHTML = r.value, e.className = d(e.className, l, r.language), e.result = { language: r.language, re: r.r }, r.second_best && (e.second_best = { language: r.second_best.language, re: r.second_best.r })) } function b(e) { j = o(j, e) } function v() { if (!v.called) { v.called = !0; var e = document.querySelectorAll("pre code"); E.forEach.call(e, h) } } function m() { addEventListener("DOMContentLoaded", v, !1), addEventListener("load", v, !1) } function N(n, t) { var r = L[n] = t(e); r.aliases && r.aliases.forEach(function (e) { y[e] = n }) } function R() { return B(L) } function w(e) { return e = (e || "").toLowerCase(), L[e] || L[y[e]] } function x(e) { var n = w(e); return n && !n.disableAutodetect } var E = [], B = Object.keys, L = {}, y = {}, k = /^(no-?highlight|plain|text)$/i, M = /\blang(?:uage)?-([\w-]+)\b/i, C = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, I = "</span>", j = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 }; return e.highlight = f, e.highlightAuto = g, e.fixMarkup = p, e.highlightBlock = h, e.configure = b, e.initHighlighting = v, e.initHighlightingOnLoad = m, e.registerLanguage = N, e.listLanguages = R, e.getLanguage = w, e.autoDetection = x, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = { b: "\\\\[\\s\\S]", r: 0 }, e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }, e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }, e.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, e.C = function (n, t, r) { var a = e.inherit({ cN: "comment", b: n, e: t, c: [] }, r || {}); return a.c.push(e.PWM), a.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }), a }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = { cN: "number", b: e.NR, r: 0 }, e.CNM = { cN: "number", b: e.CNR, r: 0 }, e.BNM = { cN: "number", b: e.BNR, r: 0 }, e.CSSNM = { cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0 }, e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }, e.TM = { cN: "title", b: e.IR, r: 0 }, e.UTM = { cN: "title", b: e.UIR, r: 0 }, e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }, e }); hljs.registerLanguage("bash", function (e) { var t = { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] }, s = { cN: "string", b: /"/, e: /"/, c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }] }, a = { cN: "string", b: /'/, e: /'/ }; return { aliases: ["sh", "zsh"], l: /\b-?[a-z\._]+\b/, k: { keyword: "if then else elif fi for while in do done case esac function", literal: "true false", built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp", _: "-ne -eq -lt -gt -f -d -e -s -l -a" }, c: [{ cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 }, { cN: "function", b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 }, e.HCM, s, a, t] } }); hljs.registerLanguage("java", function (e) { var a = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", t = a + "(<" + a + "(\\s*,\\s*" + a + ")*>)?", r = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do", s = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?", c = { cN: "number", b: s, r: 0 }; return { aliases: ["jsp"], k: r, i: /<\/|#/, c: [e.C("/\\*\\*", "\\*/", { r: 0, c: [{ b: /\w+@/, r: 0 }, { cN: "doctag", b: "@[A-Za-z]+" }] }), e.CLCM, e.CBCM, e.ASM, e.QSM, { cN: "class", bK: "class interface", e: /[{;=]/, eE: !0, k: "class interface", i: /[:"\[\]]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "new throw return else", r: 0 }, { cN: "function", b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: r, c: [{ b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM] }, { cN: "params", b: /\(/, e: /\)/, k: r, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }, c, { cN: "meta", b: "@[A-Za-z]+" }] } }); hljs.registerLanguage("xml", function (s) { var e = "[A-Za-z0-9\\._:-]+", t = { eW: !0, i: /</, r: 0, c: [{ cN: "attr", b: e, r: 0 }, { b: /=\s*/, r: 0, c: [{ cN: "string", endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] }] }; return { aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"], cI: !0, c: [{ cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] }, s.C("<!--", "-->", { r: 10 }), { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 }, { cN: "meta", b: /<\?xml/, e: /\?>/, r: 10 }, { b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{ b: "/\\*", e: "\\*/", skip: !0 }, { b: 'b"', e: '"', skip: !0 }, { b: "b'", e: "'", skip: !0 }, s.inherit(s.ASM, { i: null, cN: null, c: null, skip: !0 }), s.inherit(s.QSM, { i: null, cN: null, c: null, skip: !0 })] }, { cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: { name: "style" }, c: [t], starts: { e: "</style>", rE: !0, sL: ["css", "xml"] } }, { cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: { name: "script" }, c: [t], starts: { e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"] } }, { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, t] }] } }); hljs.registerLanguage("scss", function (e) { var t = "[a-zA-Z-][a-zA-Z0-9_-]*", i = { cN: "variable", b: "(\\$" + t + ")\\b" }, r = { cN: "number", b: "#[0-9A-Fa-f]+" }; ({ cN: "attribute", b: "[A-Z\\_\\.\\-]+", e: ":", eE: !0, i: "[^\\s]", starts: { eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "meta", b: "!important" }] } }); return { cI: !0, i: "[=/|']", c: [e.CLCM, e.CBCM, { cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", r: 0 }, { cN: "selector-class", b: "\\.[A-Za-z0-9_-]+", r: 0 }, { cN: "selector-attr", b: "\\[", e: "\\]", i: "$" }, { cN: "selector-tag", b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b", r: 0 }, { b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)" }, { b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)" }, i, { cN: "attribute", b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b", i: "[^\\s]" }, { b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" }, { b: ":", e: ";", c: [i, r, e.CSSNM, e.QSM, e.ASM, { cN: "meta", b: "!important" }] }, { b: "@", e: "[{;]", k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn", c: [i, e.QSM, e.ASM, r, e.CSSNM, { b: "\\s[A-Za-z0-9_.-]+", r: 0 }] }] } }); hljs.registerLanguage("css", function (e) { var c = "[a-zA-Z-][a-zA-Z0-9_-]*", t = { b: /[A-Z\_\.\-]+\s*:/, rB: !0, e: ";", eW: !0, c: [{ cN: "attribute", b: /\S/, e: ":", eE: !0, starts: { eW: !0, eE: !0, c: [{ b: /[\w-]+\(/, rB: !0, c: [{ cN: "built_in", b: /[\w-]+/ }, { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }] }, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "number", b: "#[0-9A-Fa-f]+" }, { cN: "meta", b: "!important" }] } }] }; return { cI: !0, i: /[=\/|'\$]/, c: [e.CBCM, { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ }, { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ }, { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" }, { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" }, { b: "@", e: "[{;]", i: /:/, c: [{ cN: "keyword", b: /\w+/ }, { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] }] }, { cN: "selector-tag", b: c, r: 0 }, { b: "{", e: "}", i: /\S/, c: [e.CBCM, t] }] } }); hljs.registerLanguage("javascript", function (e) { var r = "[A-Za-z$_][0-9A-Za-z$_]*", t = { keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as", literal: "true false null undefined NaN Infinity", built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise" }, a = { cN: "number", v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }], r: 0 }, n = { cN: "subst", b: "\\$\\{", e: "\\}", k: t, c: [] }, c = { cN: "string", b: "`", e: "`", c: [e.BE, n] }; n.c = [e.ASM, e.QSM, c, a, e.RM]; var s = n.c.concat([e.CBCM, e.CLCM]); return { aliases: ["js", "jsx"], k: t, c: [{ cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, { cN: "meta", b: /^#!/, e: /$/ }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, { b: /[{,]\s*/, r: 0, c: [{ b: r + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: r, r: 0 }] }] }, { b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM, { cN: "function", b: "(\\(.*?\\)|" + r + ")\\s*=>", rB: !0, e: "\\s*=>", c: [{ cN: "params", v: [{ b: r }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: s }] }] }, { b: /</, e: /(\/\w+|\w+\/)>/, sL: "xml", c: [{ b: /<\w+\s*\/>/, skip: !0 }, { b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: [{ b: /<\w+\s*\/>/, skip: !0 }, "self"] }] }], r: 0 }, { cN: "function", bK: "function", e: /\{/, eE: !0, c: [e.inherit(e.TM, { b: r }), { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s }], i: /\[|%/ }, { b: /\$[(.]/ }, e.METHOD_GUARD, { cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: "extends" }, e.UTM] }, { bK: "constructor", e: /\{/, eE: !0 }], i: /#(?!!)/ } });
hljs.initHighlightingOnLoad();