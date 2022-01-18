<template>
  <v-container>
    <v-row class="text-center my-2">
      <v-col cols="3">
        <NewsCard />
      </v-col>
      <v-col cols="3">
        <NewsCard />
      </v-col>
      <v-col cols="3">
        <NewsCard />
      </v-col>
      <v-col cols="3">
        <NewsCard />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/logo.svg";
import NewsCard from "./NewsCard.vue";

export default {
  name: "HelloWorld",
  components: {
    NewsCard,
  },
  NewsCarddata: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    logo,
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Roadmap",
        href: "https://vuetifyjs.com/introduction/roadmap/",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
