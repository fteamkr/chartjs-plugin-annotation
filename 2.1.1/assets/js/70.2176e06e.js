(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{564:function(n,t,a){"use strict";a.r(t);var o=a(26),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"using-images-as-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-images-as-content"}},[this._v("#")]),this._v(" Using images as content")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:3>\nconst DATA_COUNT = 12;\nconst MIN = 0;\nconst MAX = 100;\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'label',\n  drawTime: 'afterDraw',\n  content: Utils.getImage(),\n  width: 100,\n  height: 100,\n  xValue: 4,\n  yValue: 30,\n  xAdjust: 150,\n  yAdjust: -150,\n  borderWidth: 1,\n  borderDash: [6, 6],\n  callout: {\n    display: true,\n    position: 'left'\n  }\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'point',\n  drawTime: 'afterDraw',\n  xValue: 4,\n  yValue: 30,\n  radius: 10\n};\n// </block:annotation2>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true,\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);