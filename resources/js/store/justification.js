import {justification} from '../services/baseUrl'

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
            axios.get(justification)
                .then(res => {
                    commit('setJustification', res.data)
                }).catch(err => console.log(err.response.data))
        }
    }
}

