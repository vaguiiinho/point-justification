
require('./bootstrap');

window.Vue = require('vue').default;

import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store/store'

Vue.use(BootstrapVue)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    store,
    el: '#app',
});
