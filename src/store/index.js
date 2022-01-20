import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    news: [],
    loading: false
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_LOADING(state, loading){
      state.loading = loading
    }
  },
  actions: {
    getNewsData({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get(`${process.env.VUE_APP_API_ENDPOINT}/top-headlines?country=us&apiKey=${process.env.VUE_APP_API_KEY}`)
        .then((response) => {
          commit("SET_NEWS", response.data.articles);
          commit("SET_LOADING", false);
        }).catch((e)=>{
          commit("SET_LOADING", false);
          console.log(e)
        })
    },
    getSources({ commit }) {
      commit("SET_LOADING", true);
      axios
      .get(`${process.env.VUE_APP_API_ENDPOINT}/sources?apiKey=${process.env.VUE_APP_API_KEY}`)
      .then((response) => {
          commit("SET_NEWS", response.data.sources);
          commit("SET_LOADING", false);
        }).catch((e)=>{
          commit("SET_LOADING", false);
          console.log(e)
        })
    },
  },
  getters:{
    getAllNews: (state) => {
      return state.news
    },
    getLoading:(state)=>{
      return state.loading
    }
  },
  modules: {},
});
