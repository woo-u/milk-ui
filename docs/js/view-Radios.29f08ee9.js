(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Radios","view-CodeBox"],{"4ed3":function(e,i,t){"use strict";var l=t("81d8"),a=t.n(l);a.a},"7d46":function(e,i,t){e.exports=t.p+"img/img-radio-sizing.4cd2e0ae.svg"},"81d8":function(e,i,t){},8634:function(e,i,t){"use strict";t.r(i);var l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"milk-radios",attrs:{id:"content"}},[t("h2",{staticClass:"milk-font--title20"},[e._v("Radio")]),t("nav",[t("div",{class:"code"===e.nav?"active":"",on:{click:function(i){e.nav="code"}}},[e._v("Code")]),t("div",{class:"style"===e.nav?"active":"",on:{click:function(i){e.nav="style"}}},[e._v("Style")])]),"code"===e.nav?t("div",[t("h3",{staticClass:"milk-font--title10"},[e._v("Basic")]),t("div",{staticClass:"ui-box milk--border--light-gray-01"},e._l(e.items,function(e){return t("milk-radio",{key:e.id,attrs:{type:"group",id:e.id,name:e.name,label:e.item,checked:e.checked}})}),1),t("app-code-box",{attrs:{code:e.basicCode}}),t("h3",{staticClass:"milk-font--title10"},[e._v("Disabled")]),t("div",{staticClass:"ui-box milk--border--light-gray-01"},e._l(e.disabledItems,function(e){return t("milk-radio",{key:e.id,attrs:{type:"group",id:e.id,name:e.name,label:e.item,checked:e.checked,disabled:""}})}),1),t("app-code-box",{attrs:{code:e.disabledCode}})],1):e._e(),"style"===e.nav?t("div",{staticClass:"nav-style"},[t("h3",{staticClass:"milk-font--title10"},[e._v("Colors")]),t("div",[t("img",{attrs:{src:e.imgColor}}),e._m(0)]),t("h3",{staticClass:"milk-font--title10"},[e._v("Sizing")]),t("div",[t("img",{attrs:{src:e.imgSizing}}),e._m(1)])]):e._e()])},a=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"style-box"},[t("ul",[t("li",[t("strong",[e._v("Checked")])]),t("li",[e._v("Circle-fill: #87634D")]),t("li",[e._v("Circle-point: #FFFFFF")]),t("li",[e._v("Text color: #606266")])]),t("ul",[t("li",[t("strong",[e._v("Hover")])]),t("li",[e._v("Circle-border: #87634D")]),t("li",[e._v("Text color: #606266")])]),t("ul",[t("li",[t("strong",[e._v("Unchecked")])]),t("li",[e._v("Circle-border: #DCDFE6")]),t("li",[e._v("Text color: #606266")])]),t("ul",[t("li",[t("strong",[e._v("Unchecked disable")])]),t("li",[e._v("Circle-fill: #EBECF0")]),t("li",[e._v("Circle-border: #DCDFE6")]),t("li",[e._v("Text color: #909399")])]),t("ul",[t("li",[t("strong",[e._v("Checked disable")])]),t("li",[e._v("Circle-fill: #EBECF0")]),t("li",[e._v("Circle-border: #DCDFE6")]),t("li",[e._v("Circle-point: #909399")]),t("li",[e._v("Text color: #909399")])])])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"style-box"},[t("ul",[t("li",[t("strong",[e._v("Radio button size")])]),t("li",[e._v("Width: 18px")]),t("li",[e._v("Height: 18px")]),t("li",[e._v("Border: 1px")])]),t("ul",[t("li",[e._v("Font size: 14px")]),t("li",[e._v("Horizontal padding: 8px")]),t("li",[e._v("Vertical padding: 16px")])])])}],n=(t("cadf"),t("551c"),t("097d"),t("ae9b")),d={name:"radio",components:{AppCodeBox:n["default"]},props:{},data:function(){return{nav:"code",items:[{id:"item-1",name:"itemGroup",item:"Label 01",checked:!0},{id:"item-2",name:"itemGroup",item:"Label 02",checked:!1},{id:"item-3",name:"itemGroup",item:"Label 03",checked:!1}],disabledItems:[{id:"disabled-item-1",name:"disabledItemGroup",item:"Label 01",checked:!1},{id:"disabled-item-2",name:"disabledItemGroup",item:"Label 02",checked:!0}],imgColor:t("af9e"),imgSizing:t("7d46"),basicCode:"<template>\n  <div>\n    <milk-radio type=\"group\" v-for=\"item in items\" :key=\"item.id\" :id=\"item.id\" :name=\"item.name\" :label=\"item.item\" :checked=\"item.checked\"  />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        items: [\n          { 'id': 'item-1', 'name': 'itemGroup', 'item': 'Label 01', 'checked': true },\n          { 'id': 'item-2', 'name': 'itemGroup', 'item': 'Label 02', 'checked': false },\n          { 'id': 'item-3', 'name': 'itemGroup', 'item': 'Label 03', 'checked': false },\n        ]\n      };\n    }\n  };\n<\/script>",disabledCode:"<template>\n  <div>\n    <milk-radio type=\"group\" v-for=\"item in disabledItems\" :key=\"item.id\" :id=\"item.id\" :name=\"item.name\" :label=\"item.item\" :checked=\"item.checked\" disabled />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        disabledItems: [\n          { 'id': 'disabled-item-1', 'name': 'disabledItemGroup', 'item': 'Label 01', 'checked': false },\n          { 'id': 'disabled-item-2', 'name': 'disabledItemGroup', 'item': 'Label 02', 'checked': true },\n        ]\n      };\n    }\n  };\n<\/script>"}}},o=d,s=(t("4ed3"),t("2877")),c=Object(s["a"])(o,l,a,!1,null,null,null);c.options.__file="Radios.vue";i["default"]=c.exports},a0b9:function(e,i,t){},ae9b:function(e,i,t){"use strict";t.r(i);var l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"code-box"},[t("div",{staticClass:"header milk--bg--light-gray-04 milk--border--light-gray-01",on:{click:function(i){e.open=!e.open}}},[e.open?e._e():t("i",{staticClass:"mk-chevron-down"}),e.open?t("i",{staticClass:"mk-chevron-up"}):e._e()]),e.open?t("div",{staticClass:"content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code,expression:"code"}]},[t("code",{staticClass:"html"})])]):e._e()])},a=[],n={name:"",props:{code:{type:String,default:""}},data:function(){return{open:!1}}},d=n,o=(t("c37b"),t("2877")),s=Object(o["a"])(d,l,a,!1,null,null,null);s.options.__file="CodeBox.vue";i["default"]=s.exports},af9e:function(e,i,t){e.exports=t.p+"img/img-radio-color.1036c08f.svg"},c37b:function(e,i,t){"use strict";var l=t("a0b9"),a=t.n(l);a.a}}]);
//# sourceMappingURL=view-Radios.29f08ee9.js.map