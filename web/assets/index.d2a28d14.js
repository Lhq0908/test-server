import{p as e,e as a,o as s,c as o,f as t,w as c,i as r,r as u}from"./vendor.8e4b4d0e.js";const l={data:()=>({value:"",workNo:"",focusClick:!0}),mounted(){this.$refs.focusClick.focus()},methods:{sendCode(e){this.workNo=e.replace(/\s+/g,"")},onQuery(){""!=this.value?this.$router.push({path:"/teacher/detail",query:{id:this.workNo}}):(this.$toast("请输入工号或姓名"),this.$refs.focusClick.focus())}}},n=c();e("data-v-0a7a3f4e");const d={class:"teacher-search"},i={class:""},f={class:"search-input"},h={class:"search-btn d-flex justify-content-center"},v=r("查询");a();const p=n(((e,a,c,r,l,p)=>{const k=u("van-nav-bar"),m=u("van-field"),C=u("van-button");return s(),o("div",d,[t("div",i,[t(k,{title:"教师查询"}),t("div",f,[t(m,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),placeholder:"请输入工号/姓名",onInput:p.sendCode,ref:"focusClick","auto-focus":"true"},null,8,["modelValue","onInput"])]),t("div",h,[t(C,{type:"danger",block:"",round:"",onClick:a[2]||(a[2]=e=>p.onQuery())},{default:n((()=>[v])),_:1})])])])}));l.render=p,l.__scopeId="data-v-0a7a3f4e";export default l;