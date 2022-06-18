import '../services/axios'
import {baseUrl} from '../services/config'

export default {
    state: {
        justifications: []
    },

    mutations: {
        setJustification(state, justifications) {
            state.justifications = justifications
        }
    },

    getters: {
        getJustifications(state) {
            return state.justifications
        }
    },

    actions: {
        actionJustifications({ commit }) {
            axios.get(`${baseUrl}/justification`)
                .then(res => {
                    commit('setJustification', res.data)
                }).catch(err => console.log(err.response.data))
        }
    }
}

