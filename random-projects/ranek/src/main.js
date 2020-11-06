import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter("numeroPreco", valor => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      "currency": "BRL"
    })
  }

  return 0;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
