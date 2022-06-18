<template>
    <Content title="Funcionarios">
        <b-table striped hover :items="getEmployees" :fields="fields"></b-table>
    </Content>
</template>

<script>

import { mapGetters } from "vuex";
import Content from '../layout/Content'

export default {
    components: { Content },
    data() {
        return {
            fields: [
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
            ],
        };
    },
    computed: {
        ...mapGetters(["getEmployees"]),
    },

    mounted() {
        this.$store.dispatch("actionEmployees");
    },
};
</script>
