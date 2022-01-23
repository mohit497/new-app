<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" lg="6" class="text-center">
        <v-text-field
          class="search-input"
          @change="search"
          v-model="searchText"
          label="Search News"
          solo
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" lg="3" offset-lg="2">
        <FilterSource />
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

<style lang="scss" scoped>
.search-input {
  max-width: 60%;
  margin: auto;
}
</style>