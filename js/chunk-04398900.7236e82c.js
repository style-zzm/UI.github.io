(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04398900"],{"0837":function(t,e,a){"use strict";a("28c8")},"28c8":function(t,e,a){var o=a("f093");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=a("499e").default;n("30cbe6a4",o,!0,{sourceMap:!1,shadowMode:!1})},a09f:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("columns",{attrs:{title:"窗口组件"}}),a("a-button",{staticStyle:{"margin-left":"400px"},attrs:{type:"primary"},on:{click:t.openPopover}},[t._v("弹框")]),a("a-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"primary"},on:{click:t.openPopover}},[t._v("弹框")]),a("sw-popover",{ref:"swPopover",attrs:{show:t.showPopover,"big-mask":!0,customClassName:"dictpopover","window-style":"dark",footerHeight:"72px"},on:{"update:show":function(e){t.showPopover=e}}}),a("columns",{attrs:{title:"API(基本属性)"}}),a("apitable",{attrs:{data:t.basicData}}),a("columns",{attrs:{title:"API(组件抛出事件)"}}),a("apitable",{attrs:{data:t.eventData}}),a("columns",{attrs:{title:"API(ref获取内部事件)"}}),a("apitable",{attrs:{data:t.refData}})],1)},n=[],r={name:"popover",components:{},props:{},data(){return{showPopover:!1,WindowStyle:"dark",basicData:[{parameter:"WindowStyle",instructions:"窗口风格",type:"String(normal | dark)",default:"normal"},{parameter:"bigMask",instructions:"弹窗黑色背景遮罩",type:"Boolean",default:"false"},{parameter:"show",instructions:"控制弹窗组件的显示隐藏",type:"Boolean",default:"false"},{parameter:"width",instructions:"窗口组件的宽度",type:"String",default:"520px"},{parameter:"height",instructions:"窗口组件的高度",type:"String",default:"500px"},{parameter:"footer",instructions:"窗口组件的按钮组(支持slot重写)",type:"Boolean",default:"true"},{parameter:"title",instructions:"窗口标题",type:"String",default:"Title"},{parameter:"operation",instructions:"窗口功能配置项(screenshots: 截图, minimize: 最小化, maximize: 最大化)",type:"Object<Boolean>",default:"{\n          screenshots: true,\n          minimize: true,\n          maximize: true\n        }"},{parameter:"left",instructions:"弹窗组件动画进入的X坐标",type:"Number",default:"0"},{parameter:"top",instructions:"弹窗组件动画进入的Y坐标",type:"Number",default:"0"},{parameter:"txtAlign",instructions:"标题文本位置",type:"String",default:"left"},{parameter:"mask",instructions:"窗口禁止操作属性",type:"Boolean",default:"false"},{parameter:"documentshadow",instructions:"传入的dom节点",type:"Object",default:"{}"},{parameter:"customClassName",instructions:"窗口整体样式",type:"Object",default:"{}"},{parameter:"rolling",instructions:"是否开启滚动加载功能",type:"Boolean",default:"false"},{parameter:"goBack",instructions:"弹窗组件返回键",type:"Boolean",default:"false"}],eventData:[{parameter:"on-close",instructions:"关闭弹窗触发,会抛出一个布尔值",type:"Funcion",default:"bool => {}"},{parameter:"on-fullScreen",instructions:"弹窗最大化触发,会抛出一个布尔值",type:"Funcion",default:"bool => {}"},{parameter:"on-minimize",instructions:"弹窗最小化触发,会抛出一个布尔值",type:"Funcion",default:"bool => {}"},{parameter:"on-confirm",instructions:"提交按钮按下触发事件",type:"Funcion",default:"() => {}"},{parameter:"on-cancel",instructions:"取消按钮按下触发事件",type:"Funcion",default:"() => {}"},{parameter:"on-back",instructions:"返回按钮按下触发事件",type:"Funcion",default:"() => {}"},{parameter:"on-scroll",instructions:"滚动加载触发事件",type:"Funcion",default:"() => {}"}],refData:[{parameter:"getScrollT",instructions:"获取当前滚动条滚动距离T",type:"Funcion",default:"0"},{parameter:"toScroll(scrollT)",instructions:"设置当前滚动条滚动距离T",type:"Funcion",default:"null"},{parameter:"close",instructions:"关闭弹窗",type:"Funcion",default:"null"}],visible:!1,form:this.$form.createForm(this,{name:"report-back"}),rules:{reason:{validateTrigger:["blur"],trigger:"blur",rules:[{required:!0,message:"请输入退回理由"}]}}}},computed:{},watch:{},mounted:function(){},methods:{openPopover(t){this.showPopover=!0},release(){this.$message.info("提交按钮已按下"),this.form.validateFields((t,e)=>{t||(this.$message.info("数据已被打印值控制台"),console.log(e,"表单数据"))})}}},i=r,s=(a("0837"),a("2877")),l=Object(s["a"])(i,o,n,!1,null,"dfe7e802",null);e["default"]=l.exports},f093:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".box[data-v-dfe7e802]{width:100%;height:100%;overflow-y:auto}.columns[data-v-dfe7e802]:not(first-child){margin-top:20px}.columns .container[data-v-dfe7e802]{padding-top:23px}.columns .footer[data-v-dfe7e802]{justify-content:center}.columns .footer[data-v-dfe7e802],.columns .whiteFooter[data-v-dfe7e802]{width:100%;height:100%;display:flex;align-items:center}.columns .whiteFooter[data-v-dfe7e802]{justify-content:flex-end}.columns .btn-item[data-v-dfe7e802]{margin:0 6px;width:120px;height:40px;font-size:16px;font-family:Microsoft YaHei;font-weight:700}",""]),t.exports=e}}]);