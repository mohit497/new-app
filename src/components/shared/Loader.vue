<template>
  <div v-if="loading" id="loader">
    <v-progress-circular
      :size="70"
      :width="7"
      color="blue"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters({
      loading: "getLoading",
    }),
  },
};
</script>

<style lang="scss" scoped>
#loader {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0.5;
  background-color: white;
  .v-progress-circular {
    display: flex;
    margin: 0 auto;
  }
}
</style>