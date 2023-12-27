import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import ProductLists from './components/ProductLists'
import Form from './components/Form';
 import store from './store'
 import Vuesax from 'vuesax'
 import 'vuesax/dist/vuesax.css'
 import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.use(Vuesax)
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/form',
    component: Form,
  },
  {
    path: '/productlist',
    component: ProductLists,
  },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
   store,
  render: (h) => h(App),
}).$mount('#app');
