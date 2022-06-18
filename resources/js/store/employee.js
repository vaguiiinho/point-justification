import '../services/axios'
import {baseUrl} from '../services/config'

export default {
    state: {
        employees: []
    },

    mutations: {
        setEmployee(state, employees) {
            state.employees = employees
        }
    },

    getters: {
        getEmployees(state) {
            return state.employees
        }
    },

    actions: {
        actionEmployees({ commit }) {
            axios.get(`${baseUrl}/employee`)
                .then(res => {
                    commit('setEmployee', res.data)
                }).catch(err => console.log(err.response))
        }
    }
}

