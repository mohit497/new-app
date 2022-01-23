
<template>
  <v-container>
    <SearchBar />
    <v-row class="text-center my-2">
      <v-col
        cols="3"
        sm="6"
        lg="3"
        xs="12"
        md="4"
        v-for="(item, index) in news"
        :key="item.id"
      >
        <NewsCard
          :title="item.title"
          :description="item.description"
          :publishedAt="item.publishedAt"
          :id="index"
        />
      </v-col>
      <NoRecords :show="news.length === 0 && !loading" :message="message" />
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import SearchBar from "./shared/SearchHeader.vue";
import NoRecords from "./shared/NoRecords.vue";
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    NewsCard,
    SearchBar,
    NoRecords,
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
  computed: {
    ...mapGetters({
      news: "getAllNews",
      loading: "getLoading",
    }),
  },
  data: () => {
    return {
      message: " No Records Found",
    };
  },
};
</script>
