<template>
  <v-card class="mx-auto news-card" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-left mb-2 date" color="grey">
          {{ publishedOn }}
        </div>
        <v-list-item-title class="text-h5 mb-1 text-wrap text-left">
          {{ details?.title }} <EditHeadline />
        </v-list-item-title>
        <v-list-item-subtitle class="text-wrap text-left">
          {{ details?.description }}
        </v-list-item-subtitle>

        <v-list-item-title class="text-h6 mt-4 text-wrap text-left source">
          Source</v-list-item-title
        >

        <v-list-item-subtitle class="text-wrap text-left">
          {{ details?.source?.name }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn class="text-right" outlined rounded text> Go Back </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import EditHeadline from './headline/EditHeadine.vue'

export default {
  components: {
    EditHeadline,
  },
  props: {
    title: String,
    description: String,
    publishedAt: String,
  },
  data() {
    return {
      shortDescription: this.description?.substring(0, 150),
      shortTitle: this.title,
      publishedOn: moment(this.publishedAt).format("LLL"),
      details: {},
    };
  },
  mounted() {
    //  get the news by id
    this.details = this.$store.getters.getNewsById(this.$route.params.id).pop();
  },
  methods: {
    ...mapGetters(["getNewsById"]),
  },
};
</script>

<style lang="scss" scoped>
.news-card {
  .v-list-item-title {
    min-height: 50px;
    color: blue;
    &.source {
      color: red;
      font-size: 0.7em;
    }
  }
  .date {
    font-size: 0.8em;
    color: grey;
  }
  .v-list-item-subtitle {
    min-height: 100px;
  }

}
</style>