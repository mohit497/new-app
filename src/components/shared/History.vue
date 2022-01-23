<template>
  <v-container>
    <v-row class="text-left my-2">
      <v-list shaped>
        <v-subheader>History</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            @click="visitHistory(item.index)"
            v-for="(item, i) in visited"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
    <v-row>
      <NoRecords :message="NoRecordsText" :show="visited.length === 0" />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import NoRecords from "./NoRecords.vue";
export default {
  components: {
    NoRecords,
  },
  data: () => ({
    NoRecordsText: "Nothing to show , please come back later",
  }),
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
  width: 100%;
}
</style>