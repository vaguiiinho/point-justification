<template>
    <Content title="Novo funcionario">
        <FormEmployee>
            <b-row>
                <b-col cols="10" class="my-2">
                    <b-button class="my-3" @click="update" variant="primary">Editar</b-button>
                </b-col>
            </b-row>
        </FormEmployee>
    </Content>
</template>

<script>

import Content from "../layout/Content";
import FormEmployee from "./FormEmployee.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
    name: 'UpdateEmployee',
    components: {
        Content,
        FormEmployee,
    },
    computed: {
        ...mapGetters(['getEmployee'])
    },
    created() {
        this.$store.dispatch('actionShowEmployee', this.$route.params.id)
    },
    methods: {
        ...mapActions(["actionUpdateEmployee"]),
        update() {
            this.actionUpdateEmployee(this.getEmployee)
            this.$router.push({ name: 'employees' })
        },
    },
};
</script>

<style scoped>
.form {
    margin: 5%;
    margin-left: 20%;
}
</style>
