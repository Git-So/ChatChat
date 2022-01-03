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
  },
});
