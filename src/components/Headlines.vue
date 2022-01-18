
<template>
  <v-container>
    <v-row class="text-center my-2">
      <v-col cols="3" v-for="item in news" :key="item.id">
        {{ item.id }}  <NewsCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    NewsCard,
  },
  mounted() {
    this.$store.dispatch("getNewsData");
    console.log(this.news[0]?.id, "all news");
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      news: "getAllNews",
    }),
  }
};
</script>
