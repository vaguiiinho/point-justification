import Vue from 'vue'
import VueRouter from 'vue-router'

import Employees from './components/employee/Employees';

Vue.use(VueRouter);

const routes = [
    {
        name: 'test',
        path: '/test',
        component: Employees
    }
]


export default new VueRouter({
    routes
});
