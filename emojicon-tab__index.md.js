(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10,7,8,9],{"5SBD":function(e,n,d){"use strict";d.r(n);var o=d("wx14"),i=d("q1tI"),t=d.n(i),a=(d("B2uJ"),d("+su7"),d("qOys"),d("5Yjd")),c=d.n(a),f=t.a.memo((function(){var e=d("TqRt"),n=e(d("q1tI")),o=e(d("P5YI")),i=function(){return n.default.createElement(o.default,null)};return n["default"].createElement(i)})),C=t.a.memo((function(){var e=d("TqRt"),n=e(d("q1tI")),o=e(d("kcbZ")),i=function(){return n.default.createElement(o.default,null)};return n["default"].createElement(i)})),l=t.a.memo((function(){var e=d("TqRt"),n=e(d("q1tI")),o=e(d("5i6u")),i=function(){return n.default.createElement(o.default,null)};return n["default"].createElement(i)}));n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"emojicontab"},t.a.createElement("a",{"aria-hidden":"true",href:"#emojicontab"},t.a.createElement("span",{className:"icon icon-link"})),"EmojiconTab"),t.a.createElement("p",null,"EmojiconTab \u8868\u60c5\u91c7\u7528\u6807\u7b7e\u9875\u7684\u65b9\u5f0f\uff0c\u4ee5\u53ca\u4f7f\u7528\u8868\u60c5\u7b26\u53f7\u8fdb\u884c\u8f93\u51fa"),t.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u4f7f\u7528"},t.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),t.a.createElement("h3",{id:"\u9ed8\u8ba4\u4f7f\u7528\u7b2c\u4e00\u4e2a\u8868\u60c5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u9ed8\u8ba4\u4f7f\u7528\u7b2c\u4e00\u4e2a\u8868\u60c5"},t.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u4f7f\u7528\u7b2c\u4e00\u4e2a\u8868\u60c5")),t.a.createElement(c.a,Object(o["a"])({source:{tsx:"import React from 'react';\nimport { EmojiconTab } from 'z-react-ui';\n\nexport default () => {\n  return (\n    <>\n      <div> \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09</div>\n      <EmojiconTab\n        onEmojiChange={(emoji: string) => alert('\u70b9\u51fb\u4e86:' + emoji)}\n      />\n      <div> \u9876\u90e8:</div>\n      <EmojiconTab\n        placement=\"top\"\n        onEmojiChange={(emoji: string) => alert('\u70b9\u51fb\u4e86:' + emoji)}\n      />\n    </>\n  );\n};\n",jsx:"import React from 'react';\nimport { EmojiconTab } from 'z-react-ui';\n\nexport default () => (\n  <>\n    <div> \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09</div>\n    <EmojiconTab onEmojiChange={emoji => alert(`\u70b9\u51fb\u4e86:${emoji}`)} />\n    <div> \u9876\u90e8:</div>\n    <EmojiconTab placement=\"top\" onEmojiChange={emoji => alert(`\u70b9\u51fb\u4e86:${emoji}`)} />\n  </>\n);\n"}},{path:"/_demos/base",dependencies:{},files:{}}),t.a.createElement(f,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"\u652f\u6301-emojitext-\u8fdb\u884c\u66ff\u6362\u8868\u60c5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u652f\u6301-emojitext-\u8fdb\u884c\u66ff\u6362\u8868\u60c5"},t.a.createElement("span",{className:"icon icon-link"})),"\u652f\u6301 emojiText \u8fdb\u884c\u66ff\u6362\u8868\u60c5")),t.a.createElement(c.a,Object(o["a"])({source:{tsx:"import React from 'react';\nimport { EmojiconTab } from 'z-react-ui';\n\nconst style = {\n  color: '#1890ff',\n};\n\nexport default () => {\n  return (\n    <>\n      <div> \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09</div>\n      <EmojiconTab\n        onEmojiChange={(emoji: string) => alert('\u70b9\u51fb\u4e86:' + emoji)}\n        emojiText={<span style={style}>\u8868\u60c5</span>}\n      />\n      <div> \u9876\u90e8:</div>\n      <EmojiconTab\n        placement=\"top\"\n        onEmojiChange={(emoji: string) => alert('\u70b9\u51fb\u4e86:' + emoji)}\n        emojiText={<span style={style}>\u8868\u60c5</span>}\n      />\n    </>\n  );\n};\n",jsx:"import React from 'react';\nimport { EmojiconTab } from 'z-react-ui';\n\nconst style = {\n  color: '#1890ff',\n};\nexport default () => (\n  <>\n    <div> \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09</div>\n    <EmojiconTab\n      onEmojiChange={emoji => alert(`\u70b9\u51fb\u4e86:${emoji}`)}\n      emojiText={<span style={style}>\u8868\u60c5</span>}\n    />\n    <div> \u9876\u90e8:</div>\n    <EmojiconTab\n      placement=\"top\"\n      onEmojiChange={emoji => alert(`\u70b9\u51fb\u4e86:${emoji}`)}\n      emojiText={<span style={style}>\u8868\u60c5</span>}\n    />\n  </>\n);\n"}},{path:"/_demos/text-emoj",dependencies:{},files:{}}),t.a.createElement(C,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"\u652f\u6301\u81ea\u5b9a\u5236\u5143\u7d20"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u652f\u6301\u81ea\u5b9a\u5236\u5143\u7d20"},t.a.createElement("span",{className:"icon icon-link"})),"\u652f\u6301\u81ea\u5b9a\u5236\u5143\u7d20")),t.a.createElement(c.a,Object(o["a"])({source:{tsx:"import React from 'react';\nimport { Button } from 'antd';\nimport { EmojiconTab } from 'z-react-ui';\n\nexport default () => {\n  return (\n    <>\n      <div> \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09</div>\n      <EmojiconTab onEmojiChange={(emoji: string) => alert('\u70b9\u51fb\u4e86:' + emoji)}>\n        <Button type=\"primary\">\u8868\u60c5</Button>\n      </EmojiconTab>\n      <div> \u9876\u90e8:</div>\n      <EmojiconTab\n        placement=\"top\"\n        onEmojiChange={(emoji: string) => alert('\u70b9\u51fb\u4e86:' + emoji)}\n      >\n        <Button type=\"primary\">\u8868\u60c5</Button>\n      </EmojiconTab>\n    </>\n  );\n};\n",jsx:"import React from 'react';\nimport { Button } from 'antd';\nimport { EmojiconTab } from 'z-react-ui';\n\nexport default () => (\n  <>\n    <div> \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09</div>\n    <EmojiconTab onEmojiChange={emoji => alert(`\u70b9\u51fb\u4e86:${emoji}`)}>\n      <Button type=\"primary\">\u8868\u60c5</Button>\n    </EmojiconTab>\n    <div> \u9876\u90e8:</div>\n    <EmojiconTab placement=\"top\" onEmojiChange={emoji => alert(`\u70b9\u51fb\u4e86:${emoji}`)}>\n      <Button type=\"primary\">\u8868\u60c5</Button>\n    </EmojiconTab>\n  </>\n);\n"}},{path:"/_demos/cus-emoj",CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.9.2"},files:{}}),t.a.createElement(l,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u5e38\u7528-api"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5e38\u7528-api"},t.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u7528 API"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53c2\u6570"),t.a.createElement("th",null,"\u8bf4\u660e"),t.a.createElement("th",null,"\u7c7b\u578b"),t.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),t.a.createElement("th",null,"\u7248\u672c"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,"defaultActiveKey"),t.a.createElement("td",null,"\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 key\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e activeKey"),t.a.createElement("td",null,"string"),t.a.createElement("td",null,'"0"'),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"activeKey"),t.a.createElement("td",null,"\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key"),t.a.createElement("td",null,"string"),t.a.createElement("td",null,"-"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"emojiTabs"),t.a.createElement("td",null,"\u9009\u62e9\u54ea\u51e0\u4e2a tab"),t.a.createElement("td",null,"string | number[]"),t.a.createElement("td",null,"[0, 1, 2, 3]"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"emojiTextTabs"),t.a.createElement("td",null,"\u4fee\u6539\u5bf9\u5e94 tab \u7684\u540d\u5b57",t.a.createElement("br",null),"\u5982\u679c\u4e2d\u95f4\u6709\u7a7a\u9879\uff0c\u5219\u4e0d\u66f4\u6539\u540d\u79f0"),t.a.createElement("td",null,"string[]"),t.a.createElement("td",null,"[]"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"emojiColumns"),t.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u8868\u60c5"),t.a.createElement("td",null,"EmojiconsArr[]"),t.a.createElement("td",null,"-"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"visible"),t.a.createElement("td",null,"\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u6d6e\u5c42\u663e\u9690"),t.a.createElement("td",null,"boolean"),t.a.createElement("td",null,"false"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"emojiText"),t.a.createElement("td",null,"\u4fee\u6539\u663e\u793a\u6587\u6848"),t.a.createElement("td",null,"React.ReactNode"),t.a.createElement("td",null,"\ud83d\ude00"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"emojiTextClassName"),t.a.createElement("td",null,"\u6587\u6848\u7c7b\u540d"),t.a.createElement("td",null,"string"),t.a.createElement("td",null,"false"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"placement"),t.a.createElement("td",null,"\u6c14\u6ce1\u6846\u4f4d\u7f6e\uff0c\u53ef\u9009 ",t.a.createElement("code",null,"top")," ",t.a.createElement("code",null,"left")," ",t.a.createElement("code",null,"right")," ",t.a.createElement("code",null,"bottom")," ",t.a.createElement("code",null,"topLeft")," ",t.a.createElement("code",null,"topRight")," ",t.a.createElement("code",null,"bottomLeft")," ",t.a.createElement("code",null,"bottomRight")," ",t.a.createElement("code",null,"leftTop")," ",t.a.createElement("code",null,"leftBottom")," ",t.a.createElement("code",null,"rightTop")," ",t.a.createElement("code",null,"rightBottom")),t.a.createElement("td",null,"string"),t.a.createElement("td",null,"top"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"overlayClassName"),t.a.createElement("td",null,"\u5361\u7247\u7c7b\u540d"),t.a.createElement("td",null,"string"),t.a.createElement("td",null,"-"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"onEmojiChange"),t.a.createElement("td",null,"\u9009\u62e9\u8868\u60c5\u89e6\u53d1"),t.a.createElement("td",null,t.a.createElement("code",null,"(emoji: string) => void")),t.a.createElement("td",null,"-"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"onClose"),t.a.createElement("td",null,"\u5173\u95ed\u8868\u60c5\u6846\u89e6\u53d1"),t.a.createElement("td",null,"() => void"),t.a.createElement("td",null,"-"),t.a.createElement("td",null)),t.a.createElement("tr",null,t.a.createElement("td",null,"children"),t.a.createElement("td",null,"react \u7684 children"),t.a.createElement("td",null,"React.ReactNode"),t.a.createElement("td",null,"-"),t.a.createElement("td",null)))),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u540c\u65f6\u652f\u6301 antd \u7684 Tabs \u91cc\u9762\u7684\u5c5e\u6027\uff0c\u5982\u9700\u914d\u7f6e\u5219\u524d\u5f80",t.a.createElement("a",{href:"https://ant.design/components/tabs-cn",target:"_blank",rel:"noopener noreferrer"},"Tabs \u6807\u7b7e\u9875",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\u8fdb\u884c\u67e5\u770b")),t.a.createElement("h2",{id:"faq"},t.a.createElement("a",{"aria-hidden":"true",href:"#faq"},t.a.createElement("span",{className:"icon icon-link"})),"FAQ"),t.a.createElement("ul",null,t.a.createElement("li",null,"v1.0.6 \u65b0\u589e tab \u8868\u60c5\u4e2d\u7684\u8868\u60c5"))))}},"5i6u":function(e,n,d){"use strict";d.r(n);d("Jntc");var o=d("MBhm"),i=(d("MaXC"),d("4IMT")),t=d.n(i),a=d("q1tI"),c=d.n(a);n["default"]=()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null," \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09"),c.a.createElement(o["a"],{onEmojiChange:e=>alert("\u70b9\u51fb\u4e86:"+e)},c.a.createElement(t.a,{type:"primary"},"\u8868\u60c5")),c.a.createElement("div",null," \u9876\u90e8:"),c.a.createElement(o["a"],{placement:"top",onEmojiChange:e=>alert("\u70b9\u51fb\u4e86:"+e)},c.a.createElement(t.a,{type:"primary"},"\u8868\u60c5")))},"Iua+":function(e,n,d){"use strict";d.d(n,"a",(function(){return o}));var o="zq"},Jntc:function(e,n,d){},MBhm:function(e,n,d){"use strict";d("/xgg");var o=d("aOJk"),i=d.n(o),t=d("wx14"),a=d("ODXe"),c=d("Ff2n"),f=d("q1tI"),C=d.n(f),l=d("TSYQ"),u=d.n(l),r=d("hSSh"),m=[{unifiedCode:"U+1f600",cnCode:"\ud83d\ude00"},{unifiedCode:"U+1f601",cnCode:"\ud83d\ude01"},{unifiedCode:"U+1f602",cnCode:"\ud83d\ude02"},{unifiedCode:"U+1f923",cnCode:"\ud83e\udd23"},{unifiedCode:"U+1f603",cnCode:"\ud83d\ude03"},{unifiedCode:"U+1f604",cnCode:"\ud83d\ude04"},{unifiedCode:"U+1f605",cnCode:"\ud83d\ude05"},{unifiedCode:"U+1f606",cnCode:"\ud83d\ude06"},{unifiedCode:"U+1f609",cnCode:"\ud83d\ude09"},{unifiedCode:"U+1f60a",cnCode:"\ud83d\ude0a"},{unifiedCode:"U+1f60b",cnCode:"\ud83d\ude0b"},{unifiedCode:"U+1f60e",cnCode:"\ud83d\ude0e"},{unifiedCode:"U+1f60d",cnCode:"\ud83d\ude0d"},{unifiedCode:"U+1f618",cnCode:"\ud83d\ude18"},{unifiedCode:"U+1f617",cnCode:"\ud83d\ude17"},{unifiedCode:"U+1f619",cnCode:"\ud83d\ude19"},{unifiedCode:"U+1f61a",cnCode:"\ud83d\ude1a"},{unifiedCode:"U+1f642",cnCode:"\ud83d\ude42"},{unifiedCode:"U+1f917",cnCode:"\ud83e\udd17"},{unifiedCode:"U+1f914",cnCode:"\ud83e\udd14"},{unifiedCode:"U+1f610",cnCode:"\ud83d\ude10"},{unifiedCode:"U+1f611",cnCode:"\ud83d\ude11"},{unifiedCode:"U+1f636",cnCode:"\ud83d\ude36"},{unifiedCode:"U+1f644",cnCode:"\ud83d\ude44"},{unifiedCode:"U+1f60f",cnCode:"\ud83d\ude0f"},{unifiedCode:"U+1f623",cnCode:"\ud83d\ude23"},{unifiedCode:"U+1f625",cnCode:"\ud83d\ude25"},{unifiedCode:"U+1f62e",cnCode:"\ud83d\ude2e"},{unifiedCode:"U+1f910",cnCode:"\ud83e\udd10"},{unifiedCode:"U+1f62f",cnCode:"\ud83d\ude2f"},{unifiedCode:"U+1f62a",cnCode:"\ud83d\ude2a"},{unifiedCode:"U+1f62b",cnCode:"\ud83d\ude2b"},{unifiedCode:"U+1f634",cnCode:"\ud83d\ude34"},{unifiedCode:"U+1f60c",cnCode:"\ud83d\ude0c"},{unifiedCode:"U+1f61b",cnCode:"\ud83d\ude1b"},{unifiedCode:"U+1f61c",cnCode:"\ud83d\ude1c"},{unifiedCode:"U+1f61d",cnCode:"\ud83d\ude1d"},{unifiedCode:"U+1f924",cnCode:"\ud83e\udd24"},{unifiedCode:"U+1f612",cnCode:"\ud83d\ude12"},{unifiedCode:"U+1f613",cnCode:"\ud83d\ude13"},{unifiedCode:"U+1f614",cnCode:"\ud83d\ude14"},{unifiedCode:"U+1f615",cnCode:"\ud83d\ude15"},{unifiedCode:"U+1f643",cnCode:"\ud83d\ude43"},{unifiedCode:"U+1f911",cnCode:"\ud83e\udd11"},{unifiedCode:"U+1f632",cnCode:"\ud83d\ude32"},{unifiedCode:"U+1f641",cnCode:"\ud83d\ude41"},{unifiedCode:"U+1f616",cnCode:"\ud83d\ude16"},{unifiedCode:"U+1f61e",cnCode:"\ud83d\ude1e"},{unifiedCode:"U+1f61f",cnCode:"\ud83d\ude1f"},{unifiedCode:"U+1f624",cnCode:"\ud83d\ude24"},{unifiedCode:"U+1f622",cnCode:"\ud83d\ude22"},{unifiedCode:"U+1f62d",cnCode:"\ud83d\ude2d"},{unifiedCode:"U+1f626",cnCode:"\ud83d\ude26"},{unifiedCode:"U+1f627",cnCode:"\ud83d\ude27"},{unifiedCode:"U+1f628",cnCode:"\ud83d\ude28"},{unifiedCode:"U+1f629",cnCode:"\ud83d\ude29"},{unifiedCode:"U+1f62c",cnCode:"\ud83d\ude2c"},{unifiedCode:"U+1f630",cnCode:"\ud83d\ude30"},{unifiedCode:"U+1f631",cnCode:"\ud83d\ude31"},{unifiedCode:"U+1f633",cnCode:"\ud83d\ude33"},{unifiedCode:"U+1f635",cnCode:"\ud83d\ude35"},{unifiedCode:"U+1f621",cnCode:"\ud83d\ude21"},{unifiedCode:"U+1f620",cnCode:"\ud83d\ude20"},{unifiedCode:"U+1f637",cnCode:"\ud83d\ude37"},{unifiedCode:"U+1f912",cnCode:"\ud83e\udd12"},{unifiedCode:"U+1f915",cnCode:"\ud83e\udd15"},{unifiedCode:"U+1f922",cnCode:"\ud83e\udd22"},{unifiedCode:"U+1f927",cnCode:"\ud83e\udd27"},{unifiedCode:"U+1f607",cnCode:"\ud83d\ude07"},{unifiedCode:"U+1f920",cnCode:"\ud83e\udd20"},{unifiedCode:"U+1f921",cnCode:"\ud83e\udd21"},{unifiedCode:"U+1f925",cnCode:"\ud83e\udd25"},{unifiedCode:"U+1f913",cnCode:"\ud83e\udd13"},{unifiedCode:"U+1f608",cnCode:"\ud83d\ude08"},{unifiedCode:"U+1f47f",cnCode:"\ud83d\udc7f"},{unifiedCode:"U+1f479",cnCode:"\ud83d\udc79"},{unifiedCode:"U+1f47a",cnCode:"\ud83d\udc7a"},{unifiedCode:"U+1f480",cnCode:"\ud83d\udc80"},{unifiedCode:"U+1f47b",cnCode:"\ud83d\udc7b"},{unifiedCode:"U+1f47d",cnCode:"\ud83d\udc7d"},{unifiedCode:"U+1f916",cnCode:"\ud83e\udd16"},{unifiedCode:"U+1f4a9",cnCode:"\ud83d\udca9"},{unifiedCode:"U+1f63a",cnCode:"\ud83d\ude3a"},{unifiedCode:"U+1f638",cnCode:"\ud83d\ude38"},{unifiedCode:"U+1f639",cnCode:"\ud83d\ude39"},{unifiedCode:"U+1f63b",cnCode:"\ud83d\ude3b"},{unifiedCode:"U+1f63c",cnCode:"\ud83d\ude3c"},{unifiedCode:"U+1f63d",cnCode:"\ud83d\ude3d"},{unifiedCode:"U+1f640",cnCode:"\ud83d\ude40"},{unifiedCode:"U+1f63f",cnCode:"\ud83d\ude3f"},{unifiedCode:"U+1f63e",cnCode:"\ud83d\ude3e"},{unifiedCode:"U+1f4aa",cnCode:"\ud83d\udcaa\ud83c\udffb"},{unifiedCode:"U+1f448",cnCode:"\ud83d\udc48\ud83c\udffb"},{unifiedCode:"U+1f449",cnCode:"\ud83d\udc49\ud83c\udffb"},{unifiedCode:"U+1f446",cnCode:"\ud83d\udc46"},{unifiedCode:"U+1f447",cnCode:"\ud83d\udc47\ud83c\udffb"},{unifiedCode:"U+1f64f",cnCode:"\ud83d\ude4f\ud83c\udffb"},{unifiedCode:"U+1f340",cnCode:"\ud83c\udf40"},{unifiedCode:"U+1f525",cnCode:"\ud83d\udd25"},{unifiedCode:"U+1f388",cnCode:"\ud83c\udf88"},{unifiedCode:"U+1f381",cnCode:"\ud83c\udf81"},{unifiedCode:"U+1f389",cnCode:"\ud83c\udf89"},{unifiedCode:"U+1f4da",cnCode:"\ud83d\udcda"},{unifiedCode:"U+1f4b0",cnCode:"\ud83d\udcb0"},{unifiedCode:"U+1f49d",cnCode:"\ud83d\udc9d"},{unifiedCode:"U+1f514",cnCode:"\ud83d\udd14"},{unifiedCode:"U+27a1",cnCode:"\u27a1"},{unifiedCode:"U+2757",cnCode:"\u2757"},{unifiedCode:"U+1f238",cnCode:"\ud83c\ude38"},{unifiedCode:"U+3299",cnCode:"\u3299"},{unifiedCode:"U+1f534",cnCode:"\ud83d\udd34"}],U=[{unifiedCode:"U+1f648",cnCode:"\ud83d\ude48"},{unifiedCode:"U+1f649",cnCode:"\ud83d\ude49"},{unifiedCode:"U+1f64a",cnCode:"\ud83d\ude4a"},{unifiedCode:"U+1f4a5",cnCode:"\ud83d\udca5"},{unifiedCode:"U+1f4a6",cnCode:"\ud83d\udca6"},{unifiedCode:"U+1f4a8",cnCode:"\ud83d\udca8"},{unifiedCode:"U+1f4ab",cnCode:"\ud83d\udcab"},{unifiedCode:"U+1f435",cnCode:"\ud83d\udc35"},{unifiedCode:"U+1f412",cnCode:"\ud83d\udc12"},{unifiedCode:"U+1f98d",cnCode:"\ud83e\udd8d"},{unifiedCode:"U+1f436",cnCode:"\ud83d\udc36"},{unifiedCode:"U+1f415",cnCode:"\ud83d\udc15"},{unifiedCode:"U+1f429",cnCode:"\ud83d\udc29"},{unifiedCode:"U+1f43a",cnCode:"\ud83d\udc3a"},{unifiedCode:"U+1f98a",cnCode:"\ud83e\udd8a"},{unifiedCode:"U+1f431",cnCode:"\ud83d\udc31"},{unifiedCode:"U+1f408",cnCode:"\ud83d\udc08"},{unifiedCode:"U+1f981",cnCode:"\ud83e\udd81"},{unifiedCode:"U+1f42f",cnCode:"\ud83d\udc2f"},{unifiedCode:"U+1f405",cnCode:"\ud83d\udc05"},{unifiedCode:"U+1f406",cnCode:"\ud83d\udc06"},{unifiedCode:"U+1f434",cnCode:"\ud83d\udc34"},{unifiedCode:"U+1f40e",cnCode:"\ud83d\udc0e"},{unifiedCode:"U+1f984",cnCode:"\ud83e\udd84"},{unifiedCode:"U+1f98c",cnCode:"\ud83e\udd8c"},{unifiedCode:"U+1f42e",cnCode:"\ud83d\udc2e"},{unifiedCode:"U+1f402",cnCode:"\ud83d\udc02"},{unifiedCode:"U+1f403",cnCode:"\ud83d\udc03"},{unifiedCode:"U+1f404",cnCode:"\ud83d\udc04"},{unifiedCode:"U+1f437",cnCode:"\ud83d\udc37"},{unifiedCode:"U+1f416",cnCode:"\ud83d\udc16"},{unifiedCode:"U+1f417",cnCode:"\ud83d\udc17"},{unifiedCode:"U+1f43d",cnCode:"\ud83d\udc3d"},{unifiedCode:"U+1f40f",cnCode:"\ud83d\udc0f"},{unifiedCode:"U+1f411",cnCode:"\ud83d\udc11"},{unifiedCode:"U+1f410",cnCode:"\ud83d\udc10"},{unifiedCode:"U+1f42a",cnCode:"\ud83d\udc2a"},{unifiedCode:"U+1f42b",cnCode:"\ud83d\udc2b"},{unifiedCode:"U+1f418",cnCode:"\ud83d\udc18"},{unifiedCode:"U+1f98f",cnCode:"\ud83e\udd8f"},{unifiedCode:"U+1f42d",cnCode:"\ud83d\udc2d"},{unifiedCode:"U+1f401",cnCode:"\ud83d\udc01"},{unifiedCode:"U+1f400",cnCode:"\ud83d\udc00"},{unifiedCode:"U+1f439",cnCode:"\ud83d\udc39"},{unifiedCode:"U+1f430",cnCode:"\ud83d\udc30"},{unifiedCode:"U+1f407",cnCode:"\ud83d\udc07"},{unifiedCode:"U+1f43f",cnCode:"\ud83d\udc3f"},{unifiedCode:"U+1f987",cnCode:"\ud83e\udd87"},{unifiedCode:"U+1f43b",cnCode:"\ud83d\udc3b"},{unifiedCode:"U+1f428",cnCode:"\ud83d\udc28"},{unifiedCode:"U+1f43c",cnCode:"\ud83d\udc3c"},{unifiedCode:"U+1f43e",cnCode:"\ud83d\udc3e"},{unifiedCode:"U+1f983",cnCode:"\ud83e\udd83"},{unifiedCode:"U+1f433",cnCode:"\ud83d\udc33"},{unifiedCode:"U+1f40b",cnCode:"\ud83d\udc0b"},{unifiedCode:"U+1f42c",cnCode:"\ud83d\udc2c"},{unifiedCode:"U+1f41f",cnCode:"\ud83d\udc1f"},{unifiedCode:"U+1f40c",cnCode:"\ud83d\udc0c"},{unifiedCode:"U+1f98b",cnCode:"\ud83e\udd8b"},{unifiedCode:"U+1f41b",cnCode:"\ud83d\udc1b"},{unifiedCode:"U+1f41c",cnCode:"\ud83d\udc1c"},{unifiedCode:"U+1f490",cnCode:"\ud83d\udc90"},{unifiedCode:"U+1f338",cnCode:"\ud83c\udf38"},{unifiedCode:"U+1f339",cnCode:"\ud83c\udf39"},{unifiedCode:"U+1f940",cnCode:"\ud83e\udd40"},{unifiedCode:"U+1f331",cnCode:"\ud83c\udf31"},{unifiedCode:"U+26c5",cnCode:"\u26c5"},{unifiedCode:"U+26c8",cnCode:"\u26c8"},{unifiedCode:"U+1f324",cnCode:"\ud83c\udf24"},{unifiedCode:"U+1f325",cnCode:"\ud83c\udf25"},{unifiedCode:"U+1f326",cnCode:"\ud83c\udf26"},{unifiedCode:"U+1f327",cnCode:"\ud83c\udf27"},{unifiedCode:"U+1f328",cnCode:"\ud83c\udf28"},{unifiedCode:"U+1f329",cnCode:"\ud83c\udf29"}],E=[{unifiedCode:"U+1f347",cnCode:"\ud83c\udf47"},{unifiedCode:"U+1f348",cnCode:"\ud83c\udf48"},{unifiedCode:"U+1f349",cnCode:"\ud83c\udf49"},{unifiedCode:"U+1f34a",cnCode:"\ud83c\udf4a"},{unifiedCode:"U+1f34b",cnCode:"\ud83c\udf4b"},{unifiedCode:"U+1f34c",cnCode:"\ud83c\udf4c"},{unifiedCode:"U+1f34d",cnCode:"\ud83c\udf4d"},{unifiedCode:"U+1f34e",cnCode:"\ud83c\udf4e"},{unifiedCode:"U+1f34f",cnCode:"\ud83c\udf4f"},{unifiedCode:"U+1f350",cnCode:"\ud83c\udf50"},{unifiedCode:"U+1f351",cnCode:"\ud83c\udf51"},{unifiedCode:"U+1f352",cnCode:"\ud83c\udf52"},{unifiedCode:"U+1f353",cnCode:"\ud83c\udf53"},{unifiedCode:"U+1f95d",cnCode:"\ud83e\udd5d"},{unifiedCode:"U+1f345",cnCode:"\ud83c\udf45"},{unifiedCode:"U+1f951",cnCode:"\ud83e\udd51"},{unifiedCode:"U+1f346",cnCode:"\ud83c\udf46"},{unifiedCode:"U+1f954",cnCode:"\ud83e\udd54"},{unifiedCode:"U+1f955",cnCode:"\ud83e\udd55"},{unifiedCode:"U+1f33d",cnCode:"\ud83c\udf3d"},{unifiedCode:"U+1f336",cnCode:"\ud83c\udf36"},{unifiedCode:"U+1f952",cnCode:"\ud83e\udd52"},{unifiedCode:"U+1f344",cnCode:"\ud83c\udf44"},{unifiedCode:"U+1f95c",cnCode:"\ud83e\udd5c"},{unifiedCode:"U+1f330",cnCode:"\ud83c\udf30"},{unifiedCode:"U+1f35e",cnCode:"\ud83c\udf5e"},{unifiedCode:"U+1f95e",cnCode:"\ud83e\udd5e"},{unifiedCode:"U+1f9c0",cnCode:"\ud83e\uddc0"},{unifiedCode:"U+1f356",cnCode:"\ud83c\udf56"},{unifiedCode:"U+1f357",cnCode:"\ud83c\udf57"},{unifiedCode:"U+1f953",cnCode:"\ud83e\udd53"},{unifiedCode:"U+1f354",cnCode:"\ud83c\udf54"},{unifiedCode:"U+1f35f",cnCode:"\ud83c\udf5f"},{unifiedCode:"U+1f355",cnCode:"\ud83c\udf55"},{unifiedCode:"U+1f32d",cnCode:"\ud83c\udf2d"},{unifiedCode:"U+1f32e",cnCode:"\ud83c\udf2e"},{unifiedCode:"U+1f32f",cnCode:"\ud83c\udf2f"},{unifiedCode:"U+1f959",cnCode:"\ud83e\udd59"},{unifiedCode:"U+1f95a",cnCode:"\ud83e\udd5a"},{unifiedCode:"U+1f373",cnCode:"\ud83c\udf73"},{unifiedCode:"U+1f958",cnCode:"\ud83e\udd58"},{unifiedCode:"U+1f372",cnCode:"\ud83c\udf72"},{unifiedCode:"U+1f957",cnCode:"\ud83e\udd57"},{unifiedCode:"U+1f35b",cnCode:"\ud83c\udf5b"},{unifiedCode:"U+1f35c",cnCode:"\ud83c\udf5c"},{unifiedCode:"U+1f35d",cnCode:"\ud83c\udf5d"},{unifiedCode:"U+1f360",cnCode:"\ud83c\udf60"},{unifiedCode:"U+1f36a",cnCode:"\ud83c\udf6a"},{unifiedCode:"U+1f382",cnCode:"\ud83c\udf82"},{unifiedCode:"U+1f37c",cnCode:"\ud83c\udf7c"},{unifiedCode:"U+1f95b",cnCode:"\ud83e\udd5b"},{unifiedCode:"U+1f375",cnCode:"\ud83c\udf75"},{unifiedCode:"U+1f376",cnCode:"\ud83c\udf76"},{unifiedCode:"U+1f37e",cnCode:"\ud83c\udf7e"},{unifiedCode:"U+1f377",cnCode:"\ud83c\udf77"},{unifiedCode:"U+1f378",cnCode:"\ud83c\udf78"},{unifiedCode:"U+1f379",cnCode:"\ud83c\udf79"},{unifiedCode:"U+1f37a",cnCode:"\ud83c\udf7a"},{unifiedCode:"U+1f37b",cnCode:"\ud83c\udf7b"},{unifiedCode:"U+1f942",cnCode:"\ud83e\udd42"},{unifiedCode:"U+1f943",cnCode:"\ud83e\udd43"}],s=[{unifiedCode:"U+1f93a",cnCode:"\ud83e\udd3a"},{unifiedCode:"U+1f3c7",cnCode:"\ud83c\udfc7"},{unifiedCode:"U+26f7",cnCode:"\u26f7"},{unifiedCode:"U+1f3c2",cnCode:"\ud83c\udfc2"},{unifiedCode:"U+1f3cc",cnCode:"\ud83c\udfcc"},{unifiedCode:"U+1f3c4",cnCode:"\ud83c\udfc4"},{unifiedCode:"U+1f3ca",cnCode:"\ud83c\udfca"},{unifiedCode:"U+26f9",cnCode:"\u26f9"},{unifiedCode:"U+1f3cb",cnCode:"\ud83c\udfcb"},{unifiedCode:"U+1f6b4",cnCode:"\ud83d\udeb4"},{unifiedCode:"U+1f6b5",cnCode:"\ud83d\udeb5"},{unifiedCode:"U+1f938",cnCode:"\ud83e\udd38"},{unifiedCode:"U+1f93c",cnCode:"\ud83e\udd3c"},{unifiedCode:"U+1f93d",cnCode:"\ud83e\udd3d"},{unifiedCode:"U+1f93e",cnCode:"\ud83e\udd3e"},{unifiedCode:"U+1f939",cnCode:"\ud83e\udd39"},{unifiedCode:"U+26bd",cnCode:"\u26bd"},{unifiedCode:"U+26be",cnCode:"\u26be"},{unifiedCode:"U+1f3c0",cnCode:"\ud83c\udfc0"},{unifiedCode:"U+1f3d0",cnCode:"\ud83c\udfd0"},{unifiedCode:"U+1f3c8",cnCode:"\ud83c\udfc8"},{unifiedCode:"U+1f3c9",cnCode:"\ud83c\udfc9"},{unifiedCode:"U+1f3be",cnCode:"\ud83c\udfbe"},{unifiedCode:"U+1f3b3",cnCode:"\ud83c\udfb3"},{unifiedCode:"U+1f3cf",cnCode:"\ud83c\udfcf"},{unifiedCode:"U+1f3d1",cnCode:"\ud83c\udfd1"},{unifiedCode:"U+1f3d2",cnCode:"\ud83c\udfd2"},{unifiedCode:"U+1f3d3",cnCode:"\ud83c\udfd3"},{unifiedCode:"U+1f3f8",cnCode:"\ud83c\udff8"},{unifiedCode:"U+1f94a",cnCode:"\ud83e\udd4a"},{unifiedCode:"U+1f94b",cnCode:"\ud83e\udd4b"},{unifiedCode:"U+1f945",cnCode:"\ud83e\udd45"},{unifiedCode:"U+26f3",cnCode:"\u26f3"},{unifiedCode:"U+26f8",cnCode:"\u26f8"},{unifiedCode:"U+1f3a3",cnCode:"\ud83c\udfa3"},{unifiedCode:"U+1f3bf",cnCode:"\ud83c\udfbf"},{unifiedCode:"U+1f3af",cnCode:"\ud83c\udfaf"},{unifiedCode:"U+1f3b1",cnCode:"\ud83c\udfb1"},{unifiedCode:"U+1f3ae",cnCode:"\ud83c\udfae"},{unifiedCode:"U+1f3f9",cnCode:"\ud83c\udff9"}],j=[{emoji:m,title:"\u8868\u60c5"},{emoji:U,title:"\u52a8\u7269\u4e0e\u5927\u81ea\u7136"},{emoji:E,title:"\u7f8e\u98df\u4e0e\u996e\u6599"},{emoji:s,title:"\u6d3b\u52a8"}],b=j,p=(d("Z8Mf"),d("j7zX")),v=d.n(p),h=d("Iua+"),g=v.a.TabPane,T=[0,1,2,3],y=[],x=[],k=e=>{var n=e.defaultActiveKey,d=void 0===n?"0":n,o=e.activeKey,i=e.onChange,a=e.emojiTabs,l=void 0===a?T:a,u=e.emojiTextTabs,r=void 0===u?y:u,m=e.emojiColumns,U=void 0===m?x:m,E=e.onEmojiChange,s=Object(c["a"])(e,["defaultActiveKey","activeKey","onChange","emojiTabs","emojiTextTabs","emojiColumns","onEmojiChange"]),j=Object(f["useMemo"])((()=>"".concat(h["a"],"-emoji-tab")),[]),p=Object(f["useMemo"])((()=>{if(Array.isArray(U)&&U.length)return U;var e=b.filter(((e,n)=>"string"===typeof l?l.split(",").includes(String(n)):l.includes(n)));return Array.isArray(r)&&r.length&&(e=e.map(((e,n)=>(r[n]&&(e.title=r[n]),e)))),e}),[l,U,r]),k=Object(f["useMemo"])((()=>{var e={};return i&&(e.onChange=i),o||(e.defaultActiveKey=d),e}),[i,o]);return C.a.createElement(v.a,Object(t["a"])({},k,s),p.map(((e,n)=>C.a.createElement(g,{tab:e.title,key:n},e.emoji.map((e=>C.a.createElement("span",{key:e.unifiedCode,className:"".concat(j,"-emoji"),onClick:()=>E(e.cnCode)},e.cnCode)))))))},O=k,N=[0,1,2,3],B=m[0].cnCode,w=[],q=[],I=e=>{var n=e.defaultActiveKey,d=void 0===n?"0":n,o=e.activeKey,l=e.onChange,m=e.emojiTabs,U=void 0===m?N:m,E=e.emojiTextTabs,s=void 0===E?w:E,j=e.emojiColumns,b=void 0===j?q:j,p=e.onEmojiChange,v=e.visible,h=e.onClose,g=e.children,T=e.emojiText,y=void 0===T?B:T,x=e.emojiTextClassName,k=e.placement,I=void 0===k?"bottom":k,A=e.overlayClassName,R=e.className,K=Object(c["a"])(e,["defaultActiveKey","activeKey","onChange","emojiTabs","emojiTextTabs","emojiColumns","onEmojiChange","visible","onClose","children","emojiText","emojiTextClassName","placement","overlayClassName","className"]),M=Object(f["useState"])(!1),S=Object(a["a"])(M,2),z=S[0],J=S[1],F=Object(r["b"])("emoji-tab");Object(f["useEffect"])((()=>{J(v)}),[v]);var $=Object(f["useCallback"])((()=>{J(!1),h&&h()}),[h]),_=Object(f["useCallback"])((e=>{J(!1),p&&p(e),$()}),[p,$]),D=Object(f["useCallback"])((()=>J(!0)),[]);Object(f["useEffect"])((()=>{z||J(!1)}),[z]);var P=Object(f["useCallback"])((e=>J(e)),[]);return C.a.createElement("div",{className:u()(F,{[R]:!!R})},C.a.createElement(i.a,{placement:I,visible:z,overlayClassName:u()("".concat(F,"-overlay"),{[A]:!!A}),onVisibleChange:P,content:C.a.createElement(O,Object(t["a"])({defaultActiveKey:d,activeKey:o,onChange:l,emojiTabs:U,emojiTextTabs:s,emojiColumns:b,onEmojiChange:_},K)),trigger:"click"},g||C.a.createElement("div",{className:u()("".concat(F,"-emojo-text"),{[x]:!!x}),onClick:D},y)))};n["a"]=I},P5YI:function(e,n,d){"use strict";d.r(n);d("Jntc");var o=d("MBhm"),i=d("q1tI"),t=d.n(i);n["default"]=()=>t.a.createElement(t.a.Fragment,null,t.a.createElement("div",null," \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09"),t.a.createElement(o["a"],{onEmojiChange:e=>alert("\u70b9\u51fb\u4e86:"+e)}),t.a.createElement("div",null," \u9876\u90e8:"),t.a.createElement(o["a"],{placement:"top",onEmojiChange:e=>alert("\u70b9\u51fb\u4e86:"+e)}))},hSSh:function(e,n,d){"use strict";d.d(n,"a",(function(){return f})),d.d(n,"b",(function(){return l}));var o=d("ODXe"),i=d("q1tI");function t(e){for(var n="",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=d.length,i=0;i<e;i++)n+=d.charAt(Math.floor(Math.random()*o));return n}var a=t;function c(){var e=Object(i["useState"])(""),n=Object(o["a"])(e,2),d=n[1],t=Object(i["useCallback"])((()=>d(a(6))),[]);return t}var f=c,C=d("Iua+");function l(e){return Object(i["useMemo"])((()=>"".concat(C["a"]).concat(e?"-"+e:"")),[e])}},kcbZ:function(e,n,d){"use strict";d.r(n);d("Jntc");var o=d("MBhm"),i=d("q1tI"),t=d.n(i),a={color:"#1890ff"};n["default"]=()=>t.a.createElement(t.a.Fragment,null,t.a.createElement("div",null," \u5e95\u90e8\uff08\u9ed8\u8ba4\uff09"),t.a.createElement(o["a"],{onEmojiChange:e=>alert("\u70b9\u51fb\u4e86:"+e),emojiText:t.a.createElement("span",{style:a},"\u8868\u60c5")}),t.a.createElement("div",null," \u9876\u90e8:"),t.a.createElement(o["a"],{placement:"top",onEmojiChange:e=>alert("\u70b9\u51fb\u4e86:"+e),emojiText:t.a.createElement("span",{style:a},"\u8868\u60c5")}))}}]);