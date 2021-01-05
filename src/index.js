import backTopComp from "./buttonComp.vue";
const backTop = {
  install(Vue, options) {
    Vue.component(backTopgi, backTopComp);
  }
};
if (typeof window !== "undefined" && window.Vue) {
  window.backTop = backTop;
  Vue.use(backTop);
}
export default backTop;
