import backTop from "./buttonComp.vue";
const backTop = {
  install(Vue, options) {
    Vue.component(backTop.name, backTop);
  }
};
if (typeof window !== "undefined" && window.Vue) {
  window.backTop = backTop;
  Vue.use(backTop);
}
export default backTop;
