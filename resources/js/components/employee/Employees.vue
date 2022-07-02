<template>
    <Content title="Funcionarios">
        <b-table striped hover :items="getEmployees" :fields="fields">
            <template #cell(actions)="data">
                <b-button :to="{ name: 'update-employee', params: { id: data.item.id } }" size="sm" class="mr-2"
                    variant="primary">
                    Editar
                </b-button>
                <b-button @click="showModal(data.item)" size="sm" class="mr-2" variant="danger">
                    Excluir
                </b-button>
                <InfoModal :info="data.last_name" />
            </template>
        </b-table>
    </Content>
</template>

<script>

import { mapGetters } from "vuex"
import Content from '../layout/Content'
import InfoModal from "../InfoModal.vue";

export default {
    components: { Content, InfoModal },
    data() {
        return {
            id: null,
            fields: [
                {
                    key: "id",
                    label: "id",
                },
                {
                    key: "last_name",
                    label: "Nome",
                },
                {
                    key: "first_name",
                    label: "Sobre nome",
                },
                {
                    key: "cpf",
                },
                {
                    key: 'actions',
                    label: 'ações'
                }
            ],
        };
    },
    computed: {
        ...mapGetters(["getEmployees"]),
    },
    methods: {
        showModal(employee) {
            this.$store.commit('setEmployee', employee)
            return this.$store.commit('setModalShow', true)
        }
    },
    mounted() {
        this.$store.dispatch("actionEmployees");
    },
};
</script>
