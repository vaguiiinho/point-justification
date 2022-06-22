import { employee } from "../services/axios"

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
            axios.get(employee)
                .then(res => {
                    commit('setEmployee', res.data)
                }).catch(err => console.log(err.response))
        },
        actionCreateEmployee(context) {
            console.log('context')
            // axios.post(employee, context)
            //     .catch(err => console.log(err.response))
        }
    }
}

