<template>
    <b-modal v-model="modalShow">
        <p>Deseja mesmo Excluir {{ info }} </p>
        <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="success" @click="deleteEmployee()">
                OK
            </b-button>
            <b-button size="sm" variant="danger" @click="back()">
                Cancel
            </b-button>
        </template>
    </b-modal>
</template>

<script>

import { mapActions } from "vuex";


export default {
    props: ['info'],
    name: 'InfoModalEmployee',
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
            this.actionDeleteEmployee(this.$route.params.id)
            this.$store.commit('setModalShow', false)
            this.$router.push({ name: 'employees' })
        },
        back() {
            this.$store.commit('setModalShow', false)
            this.$router.push({ name: 'employees' })
        }
    },
}
</script>

<style scoped>
</style>
