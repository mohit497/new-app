<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000">
      <template v-slot:activator="{ attrs }">
        <v-btn
          color="lighten-2"
          dark
          v-bind="attrs"
          @click.stop="dialog = true"
        >
          Edit
        </v-btn>
      </template>

      <v-card width="1000">
        <v-card-title class="text-h5 grey lighten-2">
          <v-textarea
            name="input-7-1"
            v-model="news.title"
            hint="Hint text"
          ></v-textarea>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      news: null,
    };
  },
  mounted() {
    //  get the news by id
    this.news = this.$store.getters.getNewsById(this.$route.params.id).pop();
  },
};
</script>