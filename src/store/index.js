import { createStore } from 'vuex';

export default createStore({
  state: {
    isDark: false,
  },
  mutations: {
    setDark(state, payload) {
      state.isDark = payload;
    },
  },
  actions: {},
  getters: {
    isDark(state) {
      return state.isDark;
    },
  },
  modules: {},
});
