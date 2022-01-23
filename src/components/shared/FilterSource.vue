<template>
  <select @change="filter" v-model="selected">
    <option disabled value="">Filter By Source</option>
    <option v-for="item in sources" :key="item.url" >{{ item.name }}</option>
  </select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    selected: "",
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
    filter() {
      console.log('filter ', this.selected)
      this.$store.commit("SET_FILTER", this.selected);
      this.$store.dispatch("getNewsBySource");
    },
  },
};
</script>