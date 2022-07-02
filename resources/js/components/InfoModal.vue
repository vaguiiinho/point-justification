<template>
    <b-modal v-model="modalShow">
        <p>Deseja mesmo Excluir {{ info }} </p>
        <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="success" @click="deleteEmployee()">
                OK
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
                Cancel
            </b-button>
        </template>
    </b-modal>
</template>

<script>

import { mapActions } from "vuex";


export default {
    props: ['info', 'id'],
    name: 'InfoModal',
    computed: {
        modalShow: {
            get() {
                return this.$store.getters.getModalShow
            },
            set(value) {
                return this.$store.commit('setModalShow', value)
            }

        }
    },
    methods: {
        ...mapActions(["actionDeleteEmployee"]),
        deleteEmployee() {
            console.log(this.getEmployee)
            // this.actionDeleteEmployee(this.id)
            //     .then(() => this.$store.commit('setModalShow', false))
        }
    },
}
</script>

<style scoped>
</style>
