(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{503:function(n,t,a){"use strict";a.r(t);var o=a(22),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"point"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#point"}},[this._v("#")]),this._v(" Point")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:3>\nconst DATA_COUNT = 12;\nconst MIN = 0;\nconst MAX = 100;\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'label',\n  backgroundColor: 'rgba(245,245,245, 0.5)',\n  content: (ctx) => 'Maximum value is ' + maxValue(ctx).toFixed(2),\n  font: {\n    size: 16\n  },\n  padding: {\n    top: 6,\n    left: 6,\n    right: 6,\n    bottom: 12\n  },\n  point: {\n    enabled: true,\n    backgroundColor: 'transparent',\n    borderColor: (ctx) => ctx.chart.data.datasets[0].borderColor,\n    pointStyle: 'rectRounded',\n    radius: 10\n  },\n  position: {\n    x: (ctx) => maxIndex(ctx) <= 3 ? 'start' : maxIndex(ctx) >= 10 ? 'end' : 'center',\n    y: 'end'\n  },\n  xValue: (ctx) => maxLabel(ctx),\n  yAdjust: -6,\n  yValue: (ctx) => maxValue(ctx)\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'point',\n  backgroundColor: 'transparent',\n  borderColor: (ctx) => ctx.chart.data.datasets[0].borderColor,\n  pointStyle: 'rectRounded',\n  radius: 10,\n  xValue: (ctx) => maxLabel(ctx),\n  yValue: (ctx) => maxValue(ctx)\n};\n// </block:annotation2>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    layout: {\n      padding: {\n        right: 10\n      },\n    },\n    scales: {\n      y: {\n        beginAtZero: true,\n        max: 120,\n        min: 0\n      }\n    },\n    plugins: {\n      annotation: {\n        clip: false,\n        annotations: {\n          annotation1,\n          annotation2\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:4>\nfunction maxValue(ctx) {\n  let max = 0;\n  const dataset = ctx.chart.data.datasets[0];\n  dataset.data.forEach(function(el) {\n    max = Math.max(max, el);\n  });\n  return max;\n}\n\nfunction maxIndex(ctx) {\n  const max = maxValue(ctx);\n  const dataset = ctx.chart.data.datasets[0];\n  return dataset.data.indexOf(max);\n}\n\nfunction maxLabel(ctx) {\n  return ctx.chart.data.labels[maxIndex(ctx)];\n}\n// </block:utils>\n\nvar actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);