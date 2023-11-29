import LyTableLast from "./commonTable/index.vue"; // 引入封装好的组件

const components = [LyTableLast];
const install = function (App, options) {
  components.forEach((component) => {
    // 这个name是你创建组件的时候要填写好的
    App.component(component.name, component);
  });
};
export default { install }; // 批量的引入*
