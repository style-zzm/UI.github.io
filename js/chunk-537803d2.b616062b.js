(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-537803d2"],{"53e3":function(e,t,a){"use strict";a.r(t);var d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("columns",{attrs:{title:"自定义树状列表展示"}}),a("tree"),a("columns",{attrs:{title:"API(基本属性)"}})],1)},n=[];const o=[{title:"角色名称",dataIndex:"name",width:"400px",key:"name"},{title:"角色编码",dataIndex:"code",width:"400px",key:"code"},{title:"角色分类",width:"150px",dataIndex:"type",key:"type",scopedSlots:{customRender:"type"}},{title:"创建时间",width:"250px",dataIndex:"createTime",key:"createTime"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}];var s={name:"tabletree",data(){return{columns:o,expandedRowKeys:[],basicData:[{parameter:"columns",instructions:"窗口组件的表头数据",type:"Object",default:""},{parameter:"height",instructions:"窗口组件的高度",type:"String",default:"38rem"},{parameter:"documentshadow",instructions:"传入的dom节点",type:"Object",default:"{}"}]}},methods:{expandedRowsChange(e,t){e?(this.expandedRowKeys.push(t.id),!t.children||t.children.length):this.expandedRowKeys.splice(this.expandedRowKeys.indexOf(t.id),1)}}},i=s,c=(a("77bc"),a("2877")),r=Object(c["a"])(i,d,n,!1,null,"65fb041d",null);t["default"]=r.exports},"77bc":function(e,t,a){"use strict";a("d78a")},"8a2c":function(e,t,a){var d=a("24fb");t=d(!1),t.push([e.i,".box[data-v-65fb041d]{width:100%;height:100%;overflow-x:hidden;overflow-y:auto}.columns[data-v-65fb041d]:not(first-child){margin-top:20px}",""]),e.exports=t},d78a:function(e,t,a){var d=a("8a2c");"string"===typeof d&&(d=[[e.i,d,""]]),d.locals&&(e.exports=d.locals);var n=a("499e").default;n("69aa2faa",d,!0,{sourceMap:!1,shadowMode:!1})}}]);