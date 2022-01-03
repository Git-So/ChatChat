import { Component, Ref } from "vue";

export enum Theme {
  Auto = 0,
  Light,
  Dark,
}

export enum MenuType {
  Button = 0,
  Switch,
}
export interface Menu {
  type?: MenuType;
  icon: Component;
  title: string;
  description?: string;
  value?: Ref<boolean>;
  event?: Function;
}
