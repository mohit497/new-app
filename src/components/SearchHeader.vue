<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" lg="3">
        <FilterSource />
      </v-col>
      <v-col cols="12" lg="4">
        <v-text-field
          @change="search"
          v-model="searchText"
          label="Search"
          outlined
          dense
        ></v-text-field>
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
    searchText: "",
  }),
  mounted() {
    this.$store.dispatch("getSources");
  },
  computed: {
    ...mapGetters({
      sources: "getAllSources",
    }),
  },
  methods: {
    search() {
      this.$store.commit("SET_SEARCH", this.searchText);
      this.dialog = false;
      this.$store.dispatch("getNews");
    },
  },
};
</script>