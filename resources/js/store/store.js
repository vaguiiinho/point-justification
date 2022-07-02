import Vue from 'vue'
import Vuex from 'vuex'


import employee from './employee'
import justification from './justification'
import infoModal from './infoModal'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        employee,
        justification,
        infoModal
    }
})

