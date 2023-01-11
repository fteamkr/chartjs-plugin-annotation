(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{529:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"top-level-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top-level-options"}},[t._v("#")]),t._v(" Top level options")]),t._v(" "),a("p",[t._v("The following options are available at the top level. They apply to all annotations unless they are overwritten on a per-annotation basis.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/guide/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#animations"}},[a("code",[t._v("animations")])])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[a("a",{attrs:{href:"#default-animations"}},[t._v("see here")])]),t._v(" "),a("td",[t._v("To configure which element properties are animated and how.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clip")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Are the annotations clipped to the chartArea.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#common"}},[a("code",[t._v("common")])])]),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("To configure common options apply to all annotations")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/guide/options.html#interaction"}},[a("code",[t._v("interaction")])])],1),t._v(" "),a("td",[a("code",[t._v("Object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[a("code",[t._v("options.interaction")])]),t._v(" "),a("td",[t._v("To configure which events trigger plugin interactions")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Setting "),a("code",[t._v("clip")]),t._v(" to "),a("code",[t._v("false")]),t._v(", you can enable the possibility to draw part of the annotation outside of the chart area.")]),t._v(" "),a("p",[t._v("Nevertheless events are only caught over the chartArea.")])]),t._v(" "),a("h2",{attrs:{id:"animations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animations"}},[t._v("#")]),t._v(" Animations")]),t._v(" "),a("p",[t._v("Animations options configures which element properties are animated and how, with the same configuration of "),a("a",{attrs:{href:"https://www.chartjs.org/docs/latest/configuration/animations.html#animations-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("chart.js"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("annotation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("animations")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("numbers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("properties")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'radius'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("box1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("xMin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("xMax")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("yMin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("yMax")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("backgroundColor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(255, 99, 132, 0.5)'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"default-animations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-animations"}},[t._v("#")]),t._v(" Default animations")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("numbers")])]),t._v(" "),a("td",[a("code",[t._v("properties")])]),t._v(" "),a("td",[a("code",[t._v("['x', 'y', 'x2', 'y2', 'width', 'height', 'centerX', 'centerY', 'pointX', 'pointY', 'radius']")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("numbers")])]),t._v(" "),a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("number")])])])])]),t._v(" "),a("h2",{attrs:{id:"common"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[t._v("#")]),t._v(" Common")]),t._v(" "),a("p",[t._v("The following options apply to all annotations unless they are overwritten on a per-annotation basis.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/guide/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("drawTime")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'afterDatasetsDraw'")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/guide/options.html#draw-time"}},[t._v("drawTime")]),t._v(".")],1)])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("The following options are available for all annotation types. These options can be specified per annotation, or at the top level which apply to all annotations.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Chart event"),a("sup",[t._v("1")])]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("click")])]),t._v(" "),a("td",[a("code",[t._v("(context, event) => boolean | void")])]),t._v(" "),a("td",[a("code",[t._v("'click'")])]),t._v(" "),a("td",[t._v("Called when a single click occurs on the annotation.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("enter")])]),t._v(" "),a("td",[a("code",[t._v("(context, event) => boolean | void")])]),t._v(" "),a("td",[a("code",[t._v("'mousemove'")])]),t._v(" "),a("td",[t._v("Called when the mouse enters the annotation.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("leave")])]),t._v(" "),a("td",[a("code",[t._v("(context, event) => boolean | void")])]),t._v(" "),a("td",[a("code",[t._v("'mousemove'")])]),t._v(" "),a("td",[t._v("Called when the mouse leaves the annotation.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("strong",[a("sup",[t._v("1")])]),t._v(" "),a("a",{attrs:{href:"https://www.chartjs.org/docs/latest/configuration/interactions.html#events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chart.js events"),a("OutboundLink")],1),t._v(" that need to be enabled in order to get the associated annotation event working. Note that by default Chart.js enables "),a("code",[t._v("'mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'")]),t._v(", meaning that annotation events work out-of-the-box.")])]),t._v(" "),a("p",[t._v("If the event callbacks explicitly returns "),a("code",[t._v("true")]),t._v(", the chart will re-render automatically after processing the event completely. This is important when there are the annotations that require re-draws (for instance, after a change of a rendering options).")])])}),[],!1,null,null,null);e.default=n.exports}}]);