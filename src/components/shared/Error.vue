<template>
  <v-container v-if="errors.length > 0">
    <v-row class="text-center my-2">
      <v-col cols="12">
        <v-card class="message" outlined v-for="item in errors" :key="item.test">
          <v-alert border="top" colored-border type="error" elevation="2">
            {{ item.code }}
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    message: String,
  },
  computed: {
    ...mapGetters({
      errors: "getErrors",
    }),
  },
  mounted(){
      console.log(this.errors[1])
  }
};
</script>

<style lang="scss" scoped>
.message.v-card {
  margin: 5%;
}
</style>