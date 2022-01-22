<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12"  >
        <select v-model="selected">
          <option disabled value="">Filter By Source</option>
          <option v-for="(item) in sources" :key="item.url">{{item.name}}</option>
        </select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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