<template>
  <v-card class="mx-auto news-card" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-left mb-2 date" color="grey">{{publishedAt}}</div>
        <v-list-item-title class="text-h6 mb-1 text-wrap text-left"> {{ shortTitle }}</v-list-item-title>
        <v-list-item-subtitle class="text-wrap text-left">
            {{ shortDescription }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn class="text-right" outlined rounded text> Read More </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    publishedAt: String
  },
  data() {
    return {
      shortDescription: this.description?.substring(0,150),
      shortTitle: this.title?.substring(0,25),
    };
  },
  computed:{

  }
};
</script>

<style lang="scss" scoped>
.news-card{
  .v-list-item-title{
    min-height: 50px;
    color: blue
  }
  .date{
    font-size: .6em;
  }
  .v-list-item-subtitle{
    min-height: 100px;
  }
}

</style>