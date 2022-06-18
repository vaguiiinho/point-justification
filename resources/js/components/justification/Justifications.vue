<template>
    <Content title="Justificativas">
        <b-table striped hover :items="getJustifications" :fields="fields">
            <template #cell(actions)="row">
                <b-button size="sm" class="mr-2">
                    Editar
                </b-button>
            </template>
        </b-table>
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
                    key: "start_date",
                    label: "Data de inicio",
                },
                {
                    key: "end_date",
                    label: "Data de termino",
                },
                {
                    key: 'justification',
                    label: 'justificação'
                },
                {
                    key: 'actions',
                    label: 'ações'
                }

            ],
        };
    },
    computed: {
        ...mapGetters(["getJustifications"]),
    },

    mounted() {
        this.$store.dispatch("actionJustifications");
    },
};
</script>
