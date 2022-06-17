
require('./bootstrap');

window.Vue = require('vue').default;


import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store/store'

Vue.use(BootstrapVue)

<<<<<<< HEAD
Vue.component('employees', require('./components/Employees').default);
Vue.component('justifications', require('./components/justification/Justifications').default);
=======
Vue.component('create-user', require('./components/user/CreateUser').default);
Vue.component('employees', require('./components/employee/Employees').default);
>>>>>>> f5096a1 (fist commit)


const app = new Vue({
    store,
    el: '#app',
});
