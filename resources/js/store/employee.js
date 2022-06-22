import { employee } from "../services/axios"

export default {
    state: {
        employees: []
    },

    mutations: {
        setEmployees(state, employees) {
            state.employees = employees
        },
        addEmployee(state, employee) {
            state.employees.push(employee)
        }
    },

    getters: {
        getEmployees(state) {
            return state.employees
        }
    },

    actions: {
        actionEmployees({ commit }) {
            axios.get(employee)
                .then(res => {
                    commit('setEmployees', res.data)
                }).catch(err => console.log(err.response))
        },
        actionCreateEmployee({commit}, data) {
            axios.post(employee, data)
                .then(res => commit('addEmployee', res.data))
                .catch(err => console.log(err.response))
        }
    }
}

