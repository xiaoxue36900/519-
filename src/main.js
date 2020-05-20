import Vue from "vue";

import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./test/es-module/test2";
import "./test/es-module/test4";

import "@/styles/index.scss"; 

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons";
import "@/permission";

import { hasBtnPermission } from "./utils/permission";
import * as API from "@/api";
import HintButton from "@/components/HintButton";
import CategorySelector from "@/components/CategorySelector";

// 注册全局组件
Vue.component("HintButton", HintButton);
Vue.component("CategorySelector", CategorySelector);

Vue.prototype.$hasBP = hasBtnPermission;
// 将包含所有接口请求函数的对象让所有组件可见
Vue.prototype.$API = API;

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
