import Vue from 'vue';
import App from './App.vue';
import store from './store';
import openFormular from './shared/open-formular-directive';

Vue.config.productionTip = false;

Vue.directive('openForm', openFormular);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
