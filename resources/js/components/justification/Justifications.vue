<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="title">Justificativas</div>
        <b-table striped hover :items="getEmployees" :fields="fields"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      fields: [
        {
          key: "last_name",
          sortable: true,
          label: "Nome",
        },
        {
          key: "first_name",
          sortable: false,
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

<style>

</style>
