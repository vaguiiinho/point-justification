
require('./bootstrap');

window.Vue = require('vue').default;


import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue';

// router
import router from './routes.js';


import store from './store/store'

Vue.use(router)
Vue.use(BootstrapVue)

Vue.component('employees', require('./components/employee/Employees').default);
Vue.component('justifications', require('./components/justification/Justifications').default);
Vue.component('create-employee', require('./components/employee/CreateEmployee').default);




const app = new Vue({
    router,
    store,
    el: '#app',
}).$mount('#app');
