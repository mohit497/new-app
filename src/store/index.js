import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    news: [],
    loading: false,
    sources: [],
    filters: {
      source: "",
    },
    search: {
      headline: "",
    },
    history: [],
    errors: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_SOURCES(state, sources) {
      state.sources = sources;
    },
    SET_SEARCH(state, text) {
      state.search.headline = text;
    },
    SET_FILTER(state, source) {
      state.filters.source = source;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_TITLE(state, payload) {
      state.news = state.news.map((a, index) => {
        if (index === payload.id) {
          return { ...a, title: payload.title };
        }
        return a;
      });
    },
    SET_HISTORY(state, index) {
      const news = state.news[index];
      state.history = [...state.history, { title: news.title, index: index}];
    },
    SET_ERROR(state, error) {
      state.errors = [...state.errors, error];
    },
    CLEAR_ERRORS(state) {
      state.errors = [];
    },
  },
  actions: {
    getNews({ commit, state }) {
      commit("SET_LOADING", true);
      axios
        .get(
          `${process.env.VUE_APP_API_ENDPOINT}/top-headlines?q=${state.search.headline}&country=us&apiKey=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          commit("SET_NEWS", response.data.articles);
          commit("SET_LOADING", false);
        })
        .catch((e) => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", e);
        });
    },
    getNewsBySource({ commit, state }) {
      commit("SET_LOADING", true);
      axios
        .get(
          `${process.env.VUE_APP_API_ENDPOINT}/top-headlines?q=${state.search.headline}&sources=${state.filters.source}&apiKey=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          commit("SET_NEWS", response.data.articles);
          commit("SET_LOADING", false);
        })
        .catch((e) => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", e);
        });
    },
    getSources({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get(
          `${process.env.VUE_APP_API_ENDPOINT}/sources?apiKey=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          commit("SET_SOURCES", response.data.sources);
          commit("SET_LOADING", false);
        })
        .catch((e) => {
          commit("SET_LOADING", false);
          commit("SET_ERROR", e);
        });
    },
  },
  getters: {
    getAllNews: (state) => {
      return state.news;
    },
    getAllSources: (state) => {
      return state.sources;
    },
    getLoading: (state) => {
      return state.loading;
    },
    getNewsById: (state) => (id) => {
      return state.news.filter((a, index) => index === Number(id));
    },
    getHistory: (state) => {
      return state.history;
    },
    getErrors: (state) => {
      return state.errors;
    },
  },
  modules: {},
});
