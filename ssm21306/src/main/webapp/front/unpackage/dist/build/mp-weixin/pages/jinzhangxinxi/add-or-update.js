(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jinzhangxinxi/add-or-update"],{"35fa":function(e,n,r){"use strict";(function(e){r("c2a9");t(r("66fd"));var n=t(r("47e7"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"3f41":function(e,n,r){"use strict";r.r(n);var t=r("ae64"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},"47e7":function(e,n,r){"use strict";r.r(n);var t=r("78b3"),i=r("3f41");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("e2ee");var u,o=r("f0c5"),c=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"9e9229e4",null,!1,t["a"],u);n["default"]=c.exports},"78b3":function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"bb30"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},ae64:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var o=e[a](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function o(e){a(u,t,i,o,c,"next",e)}function c(e){a(u,t,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("bb30"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{ruleForm:{bianhao:"",gonghao:"",qishouxingming:"",jine:"",beizhu:"",jinzhangshijian:"",userid:""},user:{},ro:{bianhao:!1,gonghao:!1,qishouxingming:!1,jine:!1,beizhu:!1,jinzhangshijian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var r=this;return u(t.default.mark((function i(){var a,u,o,c;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r.ruleForm.jinzhangshijian=r.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),i.next=4,r.$api.session(a);case 4:if(u=i.sent,r.user=u.data,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=14;break}return r.ruleForm.id=n.id,i.next=12,r.$api.info("jinzhangxinxi",r.ruleForm.id);case 12:u=i.sent,r.ruleForm=u.data;case 14:if(!n.cross){i.next=51;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 17:if((i.t1=i.t0()).done){i.next=49;break}if(c=i.t1.value,"bianhao"!=c){i.next=23;break}return r.ruleForm.bianhao=o[c],r.ro.bianhao=!0,i.abrupt("continue",17);case 23:if("gonghao"!=c){i.next=27;break}return r.ruleForm.gonghao=o[c],r.ro.gonghao=!0,i.abrupt("continue",17);case 27:if("qishouxingming"!=c){i.next=31;break}return r.ruleForm.qishouxingming=o[c],r.ro.qishouxingming=!0,i.abrupt("continue",17);case 31:if("jine"!=c){i.next=35;break}return r.ruleForm.jine=o[c],r.ro.jine=!0,i.abrupt("continue",17);case 35:if("beizhu"!=c){i.next=39;break}return r.ruleForm.beizhu=o[c],r.ro.beizhu=!0,i.abrupt("continue",17);case 39:if("jinzhangshijian"!=c){i.next=43;break}return r.ruleForm.jinzhangshijian=o[c],r.ro.jinzhangshijian=!0,i.abrupt("continue",17);case 43:if("userid"!=c){i.next=47;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,i.abrupt("continue",17);case 47:i.next=17;break;case 49:r.ruleForm.jine=0,r.ro.jine=!1;case 51:r.styleChange();case 52:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jinzhangshijianConfirm:function(e){console.log(e),this.ruleForm.jinzhangshijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var i,a;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("crossObj"),a=e.getStorageSync("crossTable"),i.jine=parseFloat(i.jine)+parseFloat(n.ruleForm.jine),r.next=5,n.$api.update("".concat(a),i);case 5:if(n.ruleForm.jine){r.next=8;break}return n.$utils.msg("金额不能为空"),r.abrupt("return");case 8:if(!n.ruleForm.jine||n.$validate.isIntNumer(n.ruleForm.jine)){r.next=11;break}return n.$utils.msg("金额应输入整数"),r.abrupt("return");case 11:if(!n.ruleForm.id){r.next=16;break}return r.next=14,n.$api.update("jinzhangxinxi",n.ruleForm);case 14:r.next=18;break;case 16:return r.next=18,n.$api.add("jinzhangxinxi",n.ruleForm);case 18:n.$utils.msgBack("提交成功");case 19:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])},e26b:function(e,n,r){},e2ee:function(e,n,r){"use strict";var t=r("e26b"),i=r.n(t);i.a}},[["35fa","common/runtime","common/vendor"]]]);