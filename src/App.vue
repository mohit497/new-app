<template>
  <v-app>
    <v-main>
      <v-app-bar dark color="blue" elevation="4">
        <v-toolbar-title>News App</v-toolbar-title>
      </v-app-bar>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/test">test</router-link>
      </div>
      <router-view />
      <v-progress-circular
        v-if="loading"
        :size="70"
        :width="7"
        color="blue"
        indeterminate
      ></v-progress-circular>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      loading: "getLoading",
    }),
  },
};
</script>
