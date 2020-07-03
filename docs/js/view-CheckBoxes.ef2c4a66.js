(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-CheckBoxes","view-CodeBox"],{"7d14":function(e,i,l){e.exports=l.p+"img/img-checkboxes-sizing.172fa452.svg"},a7f5:function(e,i,l){},a88b:function(e,i,l){e.exports=l.p+"img/img-checkboxes-color.b44af907.svg"},ae9b:function(e,i,l){"use strict";l.r(i);var t=function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("div",{staticClass:"code-box"},[l("div",{staticClass:"header milk--bg--light-gray-04 milk--border--light-gray-01",on:{click:function(i){e.open=!e.open}}},[e.open?e._e():l("i",{staticClass:"mk-chevron-down"}),e.open?l("i",{staticClass:"mk-chevron-up"}):e._e()]),e.open?l("div",{staticClass:"content milk--bg--light-gray-03 milk--border--light-gray-01 milk-font--body10"},[l("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code,expression:"code"}]},[l("code",{staticClass:"html"})])]):e._e()])},c=[],o={name:"",props:{code:{type:String,default:""}},data:function(){return{open:!1}}},a=o,n=(l("c37b"),l("2877")),s=Object(n["a"])(a,t,c,!1,null,null,null);i["default"]=s.exports},c37b:function(e,i,l){"use strict";var t=l("e16a"),c=l.n(t);c.a},c841:function(e,i,l){"use strict";l.r(i);var t=function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("div",{staticClass:"milk-checkboxes",attrs:{id:"content"}},[l("h2",{staticClass:"milk-font--title20"},[e._v("Checkboxes")]),l("nav",[l("div",{class:"code"===e.nav?"active":"",on:{click:function(i){e.nav="code"}}},[e._v("Code")]),l("div",{class:"style"===e.nav?"active":"",on:{click:function(i){e.nav="style"}}},[e._v("Style")])]),"code"===e.nav?l("div",[l("h3",{staticClass:"milk-font--title10"},[e._v("Basic")]),l("div",{staticClass:"checkbox-box milk--border--light-gray-01"},[l("milk-checkbox",{attrs:{id:"item-0",label:"Checked Item"},model:{value:e.checked1,callback:function(i){e.checked1=i},expression:"checked1"}}),l("milk-checkbox",{attrs:{id:"item-1",label:"Unchecked Item"},model:{value:e.checked2,callback:function(i){e.checked2=i},expression:"checked2"}})],1),l("app-code-box",{attrs:{code:e.basicCode}}),l("h3",{staticClass:"milk-font--title10"},[e._v("Group")]),l("div",{staticClass:"checkbox-box milk--border--light-gray-01"},[l("milk-checkbox-group",{model:{value:e.checkGroups,callback:function(i){e.checkGroups=i},expression:"checkGroups"}})],1),l("app-code-box",{attrs:{code:e.groupCode}}),l("h3",{staticClass:"milk-font--title10"},[e._v("Indeterminate")]),l("div",{staticClass:"checkbox-box milk--border--light-gray-01"},[l("milk-checkbox-group",{attrs:{indeterminate:""},model:{value:e.checkGroups2,callback:function(i){e.checkGroups2=i},expression:"checkGroups2"}})],1),l("app-code-box",{attrs:{code:e.indeterminateCode}}),l("h3",{staticClass:"milk-font--title10"},[e._v("Disabled")]),l("div",{staticClass:"checkbox-box milk--border--light-gray-01"},[l("milk-checkbox",{attrs:{id:"item-diabled-0",label:"Checked Item",disabled:""},model:{value:e.checkedDisable1,callback:function(i){e.checkedDisable1=i},expression:"checkedDisable1"}}),l("milk-checkbox",{attrs:{id:"item-diabled-1",label:"Unchecked Item",disabled:""},model:{value:e.checkedDisable2,callback:function(i){e.checkedDisable2=i},expression:"checkedDisable2"}})],1),l("app-code-box",{attrs:{code:e.disabledCode}})],1):e._e(),"style"===e.nav?l("div",{staticClass:"nav-style"},[l("h3",{staticClass:"milk-font--title10"},[e._v("Colors")]),l("div",[l("img",{attrs:{src:e.imgColor}}),e._m(0)]),l("h3",{staticClass:"milk-font--title10"},[e._v("Sizing")]),l("div",[l("img",{attrs:{src:e.imgSizing}}),e._m(1)])]):e._e()])},c=[function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("div",{staticClass:"style-box"},[l("ul",[l("li",[l("strong",[e._v("Checked")])]),l("li",[e._v("Box-fill: #87634D")]),l("li",[e._v("Icon color: #FFFFFF")]),l("li",[e._v("Text color: #606266")])]),l("ul",[l("li",[l("strong",[e._v("Hover")])]),l("li",[e._v("Box-border: #87634D")]),l("li",[e._v("Text color: #606266")])]),l("ul",[l("li",[l("strong",[e._v("Unchecked")])]),l("li",[e._v("Box-border: #DCDFE6")]),l("li",[e._v("Text color: #606266")])]),l("ul",[l("li",[l("strong",[e._v("Unchecked disable")])]),l("li",[e._v("Box-fill: #EBECF0")]),l("li",[e._v("Box-border: #DCDFE6")]),l("li",[e._v("Text color: #909399")])]),l("ul",[l("li",[e._v("Checked disable")]),l("li",[e._v("Box-fill: #EBECF0")]),l("li",[e._v("Box-border: #DCDFE6")]),l("li",[e._v("Icon color: #909399")]),l("li",[e._v("Text color: #909399")])])])},function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("div",{staticClass:"style-box"},[l("ul",[l("li",[l("strong",[e._v("Checkbox size")])]),l("li",[e._v("Width: 18px")]),l("li",[e._v("Height: 18px")]),l("li",[e._v("Border: 1px")])]),l("ul",[l("li",[e._v("Font size: 14px")]),l("li",[e._v("Horizontal padding: 8px")]),l("li",[e._v("Vertical padding: 16px")])])])}],o=l("ae9b"),a={name:"checkboxes",components:{AppCodeBox:o["default"]},props:{},data:function(){return{nav:"code",checked1:!0,checked2:!1,checkedDisable1:!0,checkedDisable2:!1,checkGroups:[{value:!0,id:"group1-A",label:"Option A"},{value:!1,id:"group1-B",label:"Option B"},{value:!1,id:"group1-C",label:"Option C"}],checkGroups2:[{value:!0,id:"group2-A",label:"Option A"},{value:!1,id:"group2-B",label:"Option B"},{value:!1,id:"group2-C",label:"Option C"}],imgColor:l("a88b"),imgSizing:l("7d14"),basicCode:'<template>\n  <div>\n    <milk-checkbox id="item-0" label="Checked Item" v-model="checked1"  />\n    <milk-checkbox id="item-1" label="Unchecked Item" v-model="checked2"  />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true\n      };\n    }\n  };\n<\/script>',groupCode:'<template>\n  <div>\n    <milk-checkbox-group v-model="checkGroups" />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checkGroups: [\n          { value: true, id: \'group1-A\', label:"Option A" }, \n          { value: false, id: \'group1-B\', label:"Option B" }, \n          { value: false, id: \'group1-C\', label:"Option C" }, \n        ],\n      };\n    }\n  };\n<\/script>',indeterminateCode:'<template>\n  <div>\n    <milk-checkbox-group v-model="checkGroups2" indeterminate />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checkGroups2: [\n          { value: true, id: \'group2-A\', label:"Option A" }, \n          { value: false, id: \'group2-B\', label:"Option B" }, \n          { value: false, id: \'group2-C\', label:"Option C" }, \n        ],\n      };\n    }\n  };\n<\/script>',disabledCode:'<template>\n  <div>\n    <milk-checkbox id="item-diabled-0" label="Checked Item" v-model="checkedDisable1" disabled />\n    <milk-checkbox id="item-diabled-1" label="Unchecked Item" v-model="checkedDisable2" disabled />\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checkedDisable1: true,\n        checkedDisable2: false,\n      };\n    }\n  };\n<\/script>'}}},n=a,s=(l("ce99"),l("2877")),d=Object(s["a"])(n,t,c,!1,null,null,null);i["default"]=d.exports},ce99:function(e,i,l){"use strict";var t=l("a7f5"),c=l.n(t);c.a},e16a:function(e,i,l){}}]);
//# sourceMappingURL=view-CheckBoxes.ef2c4a66.js.map