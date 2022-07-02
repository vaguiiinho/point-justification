export default {
    state: {
        modalShow: false
    },

    mutations: {
        setModalShow(state, modalShow) {
            state.modalShow = modalShow
        }
    },

    getters: {
        getModalShow(state) {
            return state.modalShow
        }
    }
}
