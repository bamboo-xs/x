(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-group-components-groupSetting"],{2430:function(t,i,n){var e=n("a5da");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("2b9b08ba",e,!0,{sourceMap:!1,shadowMode:!1})},2834:function(t,i,n){"use strict";n.r(i);var e=n("5e97"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"5e97":function(t,i,n){"use strict";n("a4d3"),n("e01a"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{array:["所有人都可加入","输入邀请码才可加入"],index:0,id:"",groupInfo:{}}},methods:{goGroupTag:function(){uni.navigateTo({url:"/pages/group/components/groupTag?id=".concat(this.id)})},editDescription:function(){var t=this;uni.showLoading({title:"提交中"}),this.$request({action:"group/update",data:{group_id:this.id,description:this.groupInfo.description}}).then((function(i){uni.hideLoading(),t.$refs.popup.close(),uni.showToast({title:"编辑成功",icon:"none"}),uni.$emit("updateGroupInfo"),uni.$emit("refreshGroup")}))},switchChange:function(t){var i=t.detail.value,n={group_id:this.id,check_type:i?"2":"1"};this.$request({action:"group/update",data:n})},bindPickerChange:function(t){var i=t.detail.value;this.index=i,this.$request({action:"group/update",data:{group_id:this.id,join_type:this.index+1}})},getGroupInfo:function(){var t=this;this.$request({action:"group/get",data:{group_id:this.id}}).then((function(i){switch(i.data.join_type){case 1:t.index=0;break;case 2:t.index=1;break}t.groupInfo=i.data}))}},onLoad:function(t){var i=t.id;this.id=i,this.getGroupInfo()}};i.default=e},a5da:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".footer[data-v-446af895]{margin:%?20?% auto;width:%?160?%;height:%?64?%;font:700 %?30?% PingFang;text-align:center;line-height:%?64?%;color:#333;background:#ffc926;border:%?4?% solid #000;border-radius:%?32?%}.tips[data-v-446af895]{position:relative}.tips-front[data-v-446af895]{width:%?536?%;font:500 %?30?% PingFang;background:#fff;border:%?4?% solid #30154a;border-radius:%?10?%}.tips-front .content[data-v-446af895]{margin:%?18?% %?39?% 0 %?50?%;padding-bottom:%?18?%;width:%?447?%;font:500 %?30?% PingFang SC;border-bottom:%?1?% solid #ccc;color:#333;line-height:%?48?%}.tips-front .top[data-v-446af895]{height:%?86?%;text-align:center;line-height:%?86?%;color:#fff;background:#5430cb}.tips-behind[data-v-446af895]{position:absolute;top:7px;left:7px;z-index:-1;width:%?536?%;height:100%;background:#1c0b2d;border-radius:%?10?%}.setting[data-v-446af895]{padding:0 %?22?%;background-color:#fff;border-top:%?1?% solid #d9d9d9}.setting-switch[data-v-446af895]{-webkit-transform:scale(.7);transform:scale(.7)}.setting-options[data-v-446af895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.setting-options-text[data-v-446af895]{margin-right:%?21?%;font:500 %?30?% PingFang SC;color:#999}.setting-options-icon[data-v-446af895]{width:%?16?%;height:%?28?%}.setting-label[data-v-446af895]{font:500 %?30?% PingFang SC;color:#333}.setting-item[data-v-446af895]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?50?% %?14?%;border-bottom:%?1?% solid #d9d9d9}.setting-item[data-v-446af895]:last-child{border-bottom:none}uni-page-body[data-v-446af895]{background:#f5f5f5}",""]),t.exports=i},bca9:function(t,i,n){"use strict";var e=n("2430"),a=n.n(e);a.a},c3da:function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var e={customPopup:n("f181").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"setting"},[n("v-uni-view",{staticClass:"setting-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$refs.popup.open()}}},[n("v-uni-view",{staticClass:"setting-label"},[t._v("编辑圈子简介")]),n("v-uni-view",{staticClass:"setting-options"},[n("v-uni-image",{staticClass:"setting-options-icon",attrs:{src:"/static/icon_next@3x.png"}})],1)],1),n("v-uni-view",{staticClass:"setting-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goGroupTag.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"setting-label"},[t._v("圈子话题管理")]),n("v-uni-view",{staticClass:"setting-options"},[n("v-uni-image",{staticClass:"setting-options-icon",attrs:{src:"/static/icon_next@3x.png"}})],1)],1)],1),n("custom-popup",{ref:"popup",attrs:{type:"center",animation:!1}},[n("v-uni-view",{staticClass:"tips"},[n("v-uni-view",{staticClass:"tips-front"},[n("v-uni-view",{staticClass:"top"},[t._v("编辑简介")]),n("v-uni-textarea",{staticClass:"content",attrs:{"auto-height":!0},on:{blur:function(i){arguments[0]=i=t.$handleEvent(i),t.bindTextAreaBlur.apply(void 0,arguments)}},model:{value:t.groupInfo.description,callback:function(i){t.$set(t.groupInfo,"description",i)},expression:"groupInfo.description"}}),n("v-uni-view",{staticClass:"footer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editDescription.apply(void 0,arguments)}}},[t._v("提交")])],1),n("v-uni-view",{staticClass:"tips-behind"})],1)],1)],1)},o=[]},e43d:function(t,i,n){"use strict";n.r(i);var e=n("c3da"),a=n("2834");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("bca9");var s,r=n("f0c5"),d=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"446af895",null,!1,e["a"],s);i["default"]=d.exports}}]);