<template>
    <b-container fluid>
        <b-form class="form">
            <b-row>
                <b-col cols="10" class="my-2">
                    <b-form-group id="input-group-2" label="Nome:" label-for="input-2">
                        <b-form-input id="input-1" v-model="employee.first_name" type="text"
                            placeholder="Preencha o nome" required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="10" class="my-2">
                    <b-form-group id="input-group-2" label="Sobrenome:" label-for="input-2">
                        <b-form-input id="input-2" v-model="employee.last_name" placeholder="Preencha o sobre nome">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="10" class="my-2">
                    <b-form-group id="input-group-3" label="CPF:" label-for="input-3">
                        <b-form-input id="input-3" type="number" v-model="employee.cpf" placeholder="Preencha o CPF"
                            required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <slot></slot>
        </b-form>
    </b-container>
</template>

<script>

export default {
    name: 'FormEmployee',
    computed: {
        employee: {
            get() {
                return this.$store.getters.getEmployee
            },
            set(value) {
                return this.$store.commit('setEmployee', value)
            }

        }
    },
};
</script>

<style scoped>
.form {
    margin: 5%;
    margin-left: 20%;
}
</style>
