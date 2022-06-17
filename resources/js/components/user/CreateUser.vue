<template>
    <div class="create-user">
        <b-container>
            <b-row>
                <div class="title"><h1>Criar novo usuario</h1></div>
            </b-row>
            <b-row class="mb-2">
                <b-col cols="6">
                    <b-form-group id="name" label="Nome:" label-for="name" required>
                        <b-form-input id="name" v-model="user.name" placeholder="Preencha o nome">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="mb-2">
                <b-col cols="6">
                    <b-form-group id="email" label="Email:" label-for="email">
                        <b-form-input id="email" v-model="user.email" type="email" placeholder="Preencha o email"
                            required trim>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="mb-2">
                <b-col cols="6">
                    <b-form-group id="password" label="Password" label-for="password">
                        <b-form-input id="password" v-model="user.email" type="password"
                            placeholder="Preencha o password" required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        }
    }
}
</script>

<style scoped>
.create-user{
    margin-left: 30%;
    margin-top: 50px;
}

</style>
