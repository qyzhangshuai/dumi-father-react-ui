(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10,9],{"7vVh":function(e,n,t){},BsWD:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("a3WO");function r(e,n){if(e){if("string"===typeof e)return Object(a["a"])(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(a["a"])(e,n):void 0}}},Ff2n:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("zLVn");function r(e,n){if(null==e)return{};var t,r,l=Object(a["a"])(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}},ODXe:function(e,n,t){"use strict";function a(e){if(Array.isArray(e))return e}function r(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done);a=!0)if(t.push(o.value),n&&t.length===n)break}catch(c){r=!0,l=c}finally{try{a||null==i["return"]||i["return"]()}finally{if(r)throw l}}return t}}t.d(n,"a",(function(){return i}));var l=t("BsWD");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,n){return a(e)||r(e,n)||Object(l["a"])(e,n)||o()}},TSYQ:function(e,n,t){var a,r;(function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=l.apply(null,a);o&&e.push(o)}else if("object"===r)for(var i in a)t.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(l["default"]=l,e.exports=l):(a=[],r=function(){return l}.apply(n,a),void 0===r||(e.exports=r))})()},TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},a3WO:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}t.d(n,"a",(function(){return a}))},cEIA:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),r=t("q1tI"),l=t.n(r),o=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),i=t.n(o),c=l.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("gzrj")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)}));n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"foo-\u7ec4\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#foo-\u7ec4\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"Foo \u7ec4\u4ef6"),l.a.createElement("p",null,"Demo:")),l.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { OrgTree } from 'z-react-ui';\nimport { DataProps } from 'z-react-ui/lib/org-tree';\n\nconst horizontal = false; // true\uff1a\u6a2a\u5411  false\uff1a\u7eb5\u5411\nconst collapsable = false; // true\uff1a\u53ef\u6298\u53e0 false\uff1a\u4e0d\u53ef\u6298\u53e0\nconst expandAll = true; // true: \u5168\u90e8\u5c55\u5f00 false\uff1a\u5168\u90e8\u6298\u53e0\n\ninterface DemoProps {\n  // \u81ea\u5df1\u6dfb\u52a0\n}\n\nconst Demo: React.FC<DemoProps> = ({}) => {\n  const [value, setValue] = useState();\n\n  const data: DataProps = {\n    id: 0,\n    label: '\u4e00\u7ea7',\n    children: [\n      {\n        id: 1,\n        label: <div>\u4e8c\u7ea7\u5185\u5bb91</div>,\n        conditionList: '\u6761\u4ef6\u9879',\n        children: [\n          {\n            id: 4,\n            label: '\u4e09\u7ea7\u5185\u5bb91',\n            conditionList: '\u5e74\u540e111',\n          },\n          {\n            id: 5,\n            label: '\u4e09\u7ea7\u5185\u5bb92',\n          },\n        ],\n      },\n      {\n        id: 2,\n        label: <div>\u4e8c\u7ea7\u5185\u5bb91</div>,\n        children: [{ id: 44, label: 'demo' }],\n      },\n    ],\n  };\n\n  const handleClick = (_e: any, data: any) => {\n    console.log('data', data);\n  };\n\n  return (\n    <OrgTree\n      data={data}\n      activeId={value}\n      horizontal={horizontal}\n      collapsable={collapsable}\n      expandAll={expandAll}\n      onClick={handleClick}\n    />\n  );\n};\n\nexport default Demo;\n",jsx:"import React, { useState } from 'react';\nimport { OrgTree } from 'z-react-ui';\n\nconst horizontal = false; // true\uff1a\u6a2a\u5411  false\uff1a\u7eb5\u5411\n\nconst collapsable = false; // true\uff1a\u53ef\u6298\u53e0 false\uff1a\u4e0d\u53ef\u6298\u53e0\n\nconst expandAll = true; // true: \u5168\u90e8\u5c55\u5f00 false\uff1a\u5168\u90e8\u6298\u53e0\n\nconst Demo = ({}) => {\n  const [value, setValue] = useState();\n  const data = {\n    id: 0,\n    label: '\u4e00\u7ea7',\n    children: [\n      {\n        id: 1,\n        label: <div>\u4e8c\u7ea7\u5185\u5bb91</div>,\n        conditionList: '\u6761\u4ef6\u9879',\n        children: [\n          {\n            id: 4,\n            label: '\u4e09\u7ea7\u5185\u5bb91',\n            conditionList: '\u5e74\u540e111',\n          },\n          {\n            id: 5,\n            label: '\u4e09\u7ea7\u5185\u5bb92',\n          },\n        ],\n      },\n      {\n        id: 2,\n        label: <div>\u4e8c\u7ea7\u5185\u5bb91</div>,\n        children: [\n          {\n            id: 44,\n            label: 'demo',\n          },\n        ],\n      },\n    ],\n  };\n\n  const handleClick = (_e, data) => {\n    console.log('data', data);\n  };\n\n  return (\n    <OrgTree\n      data={data}\n      activeId={value}\n      horizontal={horizontal}\n      collapsable={collapsable}\n      expandAll={expandAll}\n      onClick={handleClick}\n    />\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/base-1",dependencies:{},files:{}}),l.a.createElement(c,null)))}},gzrj:function(e,n,t){"use strict";t.r(n);t("7vVh");var a=t("wx14"),r=t("VTBJ"),l=t("Ff2n"),o=t("q1tI"),i=t.n(o),c=t("TSYQ"),d=t.n(c),s=(e,n)=>{var t=n.node;return!(Array.isArray(e[t.children])&&e[t.children].length>0)},u=(e,n)=>{var t=n.node,a=["org-tree-node"];return s(e,n)?a.push("is-leaf"):n.collapsable&&!e[t.expand]&&a.push("collapsed"),i.a.createElement("div",{key:e[t.id],className:a.join(" ")},f(e,n),!n.collapsable||e[t.expand]?b(e.children,n):null)},p=(e,n)=>{var t=n.onExpand,a=n.node,r=["org-tree-node-btn"];return e[a.expand]&&r.push("expanded"),i.a.createElement("span",{key:e[a.id],className:r.join(" "),onClick:n=>{n.stopPropagation(),"function"===typeof t&&t(n,e)}})},f=(e,n)=>{var t=n.node,a=e[t.label],r=n.renderContent,l=n.onClick,o=[];if("function"===typeof r){var c=r(e);c&&o.push(c)}else o.push(a);n.collapsable&&!s(e,n)&&o.push(p(e,n));var d=["org-tree-node-label-inner","org-tree-node-cursor"],u=["org-tree-node-label-inner","org-tree-node-condition"],f=n.labelWidth,b=n.labelClassName,h=n.conditionClassName,m=n.activeId,v=n.onConditionClick;return b&&d.push(b),m===e[t.id]&&d.push("org-tree-node-active"),h&&u.push(h),i.a.createElement("div",{key:"label_".concat(e[t.id]),className:"org-tree-node-label"},e.conditionList?i.a.createElement("div",{key:"label_inner_condition_".concat(e[t.id]),className:u.join(" "),onClick:n=>"function"===typeof v&&v(n,e)},e.conditionList):null,i.a.createElement("div",{key:"label_inner_".concat(e[t.id]),className:d.join(" "),style:{width:f?parseInt(f)+"px":"auto"},onClick:n=>"function"===typeof l&&l(n,e)},o.map(((e,n)=>i.a.createElement("div",{key:n},e)))))},b=(e,n)=>{if(Array.isArray(e)&&e.length){var t=e.map((e=>u(e,n)));return i.a.createElement("div",{key:"children_".concat(t[0].key),className:"org-tree-node-children"},t)}return""},h=e=>u(e.data,e),m=h,v=t("ODXe");function y(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*a));return n}var x=y;function g(){var e=Object(o["useState"])(""),n=Object(v["a"])(e,2),t=n[1],a=Object(o["useCallback"])((()=>t(x(6))),[]);return a}var O=g,j={id:"id",label:"label",expand:"expand",children:"children"},k=e=>{var n=O(),t=Object(o["useMemo"])((()=>e),[e]),c=t.horizontal,s=t.expandAll,u=t.activeId,p=t.node,f=t.data,b=t.onClick,h=t.onConditionClick,v=t.renderContent,y=void 0===v?e=>e.label:v,x=Object(l["a"])(t,["horizontal","expandAll","activeId","node","data","onClick","onConditionClick","renderContent"]);Object(o["useEffect"])((()=>{s&&C(f,!0)}),[]);var g=(e,t)=>{"expand"in t?(t.expand=!t.expand,!t.expand&&t.children&&k(t.children),n()):(t.expand=!0,n())},k=e=>{e.forEach((e=>{e.expand&&(e.expand=!1),e.children&&k(e.children)}))},C=(e,t)=>{Array.isArray(e)?e.forEach((e=>{e.expand=t,e.children&&C(e.children,t)})):(e.expand=t,e.children&&C(e.children,t)),n()};return i.a.createElement("div",{className:"org-tree-container"},i.a.createElement("div",{className:d()("org-tree",{horizontal:c})},i.a.createElement(m,Object(a["a"])({data:f,activeId:u,node:Object(r["a"])(Object(r["a"])({},j),p),onExpand:(e,n)=>g(e,n),onClick:(e,n)=>b&&b(e,n),onConditionClick:(e,n)=>h&&h(e,n),renderContent:y},x))))},C=k;function E(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var A=!1,w=!1,z=!0,I=e=>{E(e);var n=Object(o["useState"])(),t=Object(v["a"])(n,2),a=t[0],r=(t[1],{id:0,label:"\u4e00\u7ea7",children:[{id:1,label:i.a.createElement("div",null,"\u4e8c\u7ea7\u5185\u5bb91"),conditionList:"\u6761\u4ef6\u9879",children:[{id:4,label:"\u4e09\u7ea7\u5185\u5bb91",conditionList:"\u5e74\u540e111"},{id:5,label:"\u4e09\u7ea7\u5185\u5bb92"}]},{id:2,label:i.a.createElement("div",null,"\u4e8c\u7ea7\u5185\u5bb91"),children:[{id:44,label:"demo"}]}]}),l=(e,n)=>{console.log("data",n)};return i.a.createElement(C,{data:r,activeId:a,horizontal:A,collapsable:w,expandAll:z,onClick:l})};n["default"]=I}}]);