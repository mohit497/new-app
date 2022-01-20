
<template>
  <v-container>
    <v-row class="text-center my-2">
      <v-col cols="3" v-for="item in news" :key="item.id">
        <NewsCard :title="item.title" :description="item.description" :publishedAt="item.publishedAt" />
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
  },
  computed: {
    ...mapGetters({
      news: "getAllNews",
    }),
  }
};
</script>
