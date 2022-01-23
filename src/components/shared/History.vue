<template>
  <v-container>
    <v-row class="text-left my-2">
      <v-list shaped>
        <v-subheader>History</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item @click="visitHistory(item.index)" v-for="(item, i) in visited" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
  },
    methods: {
    visitHistory(id) {
      this.$router.push(`/details/${id}`);
    },
  },

};
</script>

<style lang="scss" scoped>
.v-list-item {
  background-color: lightgrey;
  margin-top: 1%;
  border: black 1px solid;
}
</style>