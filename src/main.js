import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


// 打包之前测试
// import LyTableLast from './package';
// 打包之后测试方法
// import LyTableLast from "../dist/common-table.es.js";
// 上线之后测试
import LyTableLast from "ly-table-last";

createApp(App).use(ElementPlus).use(LyTableLast).mount("#app");
