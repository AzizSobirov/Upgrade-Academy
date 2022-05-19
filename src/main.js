import { createApp } from "vue";
// import { IonicVue } from "@ionic/vue";.use(IonicVue)
import App from "./App.vue";
// import Meta from "vue-meta";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  // .use(Meta, {
  //   keyName: "metaInfo",
  //   attribute: "data-vue-meta",
  //   ssrAttribute: "data-vue-meta-server-rendered",
  //   tagIDKeyName: "vmid",
  //   refreshOnceOnNavigation: true,
  // })
  .mount("#app");
