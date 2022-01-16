import { Theme } from "./type";
import { createStore } from "vuex";

export default createStore({
  state: {
    theme: Theme.Light,
    isShowDrawer: false,
  },
  mutations: {
    updateDrawerState(state, isShow) {
      state.isShowDrawer = isShow;
    },
    enableDarkTheme(state, isEnable) {
      state.theme = isEnable ? Theme.Dark : Theme.Auto;
    },
  },
  getters: {
    isDarkTheme: (state): boolean => state.theme == Theme.Dark,
  },
});
