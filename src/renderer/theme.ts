import { Theme } from "./type";
import { GlobalThemeOverrides, darkTheme, useOsTheme } from "naive-ui";
import { computed } from "vue";
import store from "./store";

export const lightThemeOverrides: GlobalThemeOverrides = {
  Drawer: {
    bodyPadding: "16px",
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {};

export const themeOverrides = computed(() => {
  return !theme.value ? lightThemeOverrides : darkThemeOverrides;
});

// 主题
export const theme = computed(() => {
  if (store.state.theme == Theme.Auto)
    return useOsTheme().value == "dark" ? darkTheme : null;

  return store.state.theme == Theme.Dark ? darkTheme : null;
});
