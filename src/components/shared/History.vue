<template>
  <v-container v-if="show">
    <v-row class="text-center my-2">
      <v-col cols="12" class="my-2" v-for="item in visited" :key="item.title">
        <v-card class="message" outlined>
          {{ item.title }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      visited: "getHistory",
    }),
  }
};
</script>