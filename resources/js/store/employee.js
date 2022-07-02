import axios from "axios"
import { employee } from "../services/baseUrl"

export default {
    state: {
        employees: [],
        employee: {},
    },

    mutations: {
        setEmployees(state, employees) {
            state.employees = employees
        },
        setEmployee(state, employee) {
            state.employee = employee
        },
        addClearEmployee(state, employee) {
            state.employees.push(employee)
            state.employee = {}
        }
    },

    getters: {
        getEmployees(state) {
            return state.employees
        },
        getEmployee(state) {
            return state.employee
        },
    },

    actions: {
        actionEmployees({ commit }) {
            axios.get(employee)
                .then(res => {
                    commit('setEmployees', res.data)
                }).catch(err => console.log(err.response))
        },
        actionCreateEmployee({ commit }, data) {
            axios.post(employee, data)
                .then(res => commit('addClearEmployee', res.data))
                .catch(err => console.log(err.response))
        },
        actionShowEmployee({ commit }, id) {
            axios.get(`${employee}/${id}`)
                .then(res => commit('setEmployee', res.data))
                .catch(err => console.log(err.response))
        },
        actionUpdateEmployee({ getters }, data) {
            axios.put(`${employee}/${data.id}`, data)
                .then(() => getters('getEmployees'))
                .catch(err => console.log(err.response))
        },
        actionDeleteEmployee({ commit }, id) {
            axios.delete(`${employee}/${id}`)
                .then(() => getters('getEmployees'))
                .catch(err => console.log(err.response))
        }
    }
}

