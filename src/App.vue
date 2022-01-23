<template>
  <v-app>
    <v-main>
      <v-app-bar dark color="blue" elevation="4">
        <v-toolbar-title>News App</v-toolbar-title>
      </v-app-bar>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/test">History</router-link>
      </div>
      <router-view />
      <Loader />
      <Error />
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
import Loader from './components/shared/Loader.vue'
import Error from './components/shared/Error.vue'

export default {
  name: "App",
  components:{
    Loader,
    Error
  },
  computed: {
    ...mapGetters({
      loading: "getLoading",
    }),
  },
};
</script>
