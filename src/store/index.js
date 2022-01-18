import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    getNewsData({ commit }) {
      axios
        .get(`${process.env.VUE_APP_API_ENDPOINT}${process.env.VUE_APP_API_KEY}`)
        .then((response) => {
          console.log(response.data.sources,'data received')
          commit("SET_NEWS", response.data.sources);
        });
    },
  },
  getters:{
    getAllNews: (state) => {
      return state.news
    }
  },
  modules: {},
});
