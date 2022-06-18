
require('./bootstrap');

window.Vue = require('vue').default;


import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store/store'

Vue.use(BootstrapVue)

Vue.component('employees', require('./components/employee/Employees').default);
Vue.component('justifications', require('./components/justification/Justifications').default);

const app = new Vue({
    store,
    el: '#app',
});
