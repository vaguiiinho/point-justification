import Vue from 'vue'
import VueRouter from 'vue-router'

import routerEmployee from './router.employee'
import routerJustification from './router.justification'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        ...routerEmployee,
        ...routerJustification,
    ]
});
