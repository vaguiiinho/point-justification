import axios from 'axios'
import HOST from '../services/config'

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
        query({ commit }) {
            axios.get(`${HOST.Employee}`)
                .then(res => {
                    commit('setEmployee', res.data)
                })
        }
    }
}

