(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68212508"],{af48:function(t,s,i){var e=i("e37c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=i("499e").default;r("e00acbe4",e,!0,{sourceMap:!1,shadowMode:!1})},e37c:function(t,s,i){var e=i("24fb");s=e(!1),s.push([t.i,".viewport[data-v-c912cf00]{overflow-y:scroll;position:relative}.viewport .data-list[data-v-c912cf00]{position:absolute;left:0;top:0;width:100%}.viewport .row[data-v-c912cf00]{text-align:center;width:100%}",""]),t.exports=s},ec47:function(t,s,i){"use strict";i("af48")},fad8:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{ref:"viewport",staticClass:"viewport",on:{scroll:t.onScroll}},[i("div",{ref:"scrollbar",staticClass:"scrollbar"}),i("div",{staticClass:"data-list",style:{transform:"translateY("+t.offset+"px)"}},t._l(t.showList,(function(s,e){return i("div",{key:e,staticClass:"row",style:{height:t.rowHeight+"px"}},[t._v(" "+t._s(s)+" ")])})),0)])])},r=[],o={data(){return{list:[],start:0,end:10,remain:10,rowHeight:100,offset:""}},computed:{showList(){return this.list.slice(this.start,this.end)}},mounted(){this.$refs.scrollbar.style.height=this.list.length*this.rowHeight+"px",this.$refs.viewport.style.height=this.remain*this.rowHeight+"px"},created(){this.list=new Array(30).fill(null).map((t,s)=>s+1)},methods:{onScroll(){const t=this.$refs.viewport.scrollTop;this.start=Math.round(this.$refs.viewport.scrollTop/this.rowHeight),this.end=this.start+this.remain,this.offset=t;const s=this.$refs.viewport.scrollHeight-this.$refs.viewport.scrollTop<=this.$refs.viewport.clientHeight;if(console.log(s),s){const t=new Array(30).fill(null).map((t,s)=>this.list.length+s+1);this.list=this.list.concat(t),this.$refs.scrollbar.style.height=this.list.length*this.rowHeight+"px"}}}},l=o,a=(i("ec47"),i("2877")),c=Object(a["a"])(l,e,r,!1,null,"c912cf00",null);s["default"]=c.exports}}]);