<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000">
      <template v-slot:activator="{ attrs }">
        <v-icon>fas fa-edit</v-icon>

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
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title class="text-h5 grey lighten-2">
            <v-textarea
              maxlength="300"
              required
              name="input-7-1"
              v-model="news.title"
              hint="Hint text"
              :rules="headingRules"
            ></v-textarea>
          </v-card-title>
        </v-form>
        <v-divider></v-divider>

        <v-card-actions>
          <p class="error-message" v-if="news.title.length > 200">
            Headling should be less than 200 characters
          </p>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="exit"> Exit </v-btn>
          <v-btn
            color="primary"
            text
            @click="save"
            :disabled="news.title.length > 200"
          >
            Save
          </v-btn>
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
      valid: true,
      news: null,
      headingRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  mounted() {
    //  get the news by id
    this.news = this.$store.getters.getNewsById(this.$route.params.id).pop();
  },
  methods: {
    save() {
      this.$store.commit("SET_TITLE", {
        id: this.$route.params.id,
        title: this.news.title,
      });
      this.dialog = false;
    },
    exit() {
      this.dialog = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.error-message {
  color: red;
  font-size: .6em;
}
</style>