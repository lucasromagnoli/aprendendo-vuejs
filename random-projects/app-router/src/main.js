import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log("Antes da navegacão");
  console.log("to", to);
  console.log("from", from);
  next();
})

router.afterEach(() => {
  console.log("Depois da navegacao")
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
