<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" lg="3">
        <FilterSource />
      </v-col>
      <v-col cols="12" lg="4">
        <v-text-field label="Search" outlined dense></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import FilterSource from "./FilterSource.vue";

export default {
  components: {
    FilterSource,
  },
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    selected: "",
  }),
  mounted() {
    this.$store.dispatch("getSources");
    console.log(this.sources);
  },
  computed: {
    ...mapGetters({
      sources: "getAllSources",
    }),
  },
};
</script>