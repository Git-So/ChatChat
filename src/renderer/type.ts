import { Component, ComputedRef, Ref } from "vue";

export enum Theme {
  Auto,
  Light,
  Dark,
}

export enum MenuType {
  RouterLink,
  Button,
  Switch,
}
export interface Menu {
  type?: MenuType;
  icon?: Component;
  title: string;
  description?: string;
}

export interface MenuRouterLink extends Menu {
  route: string;
  replace?: boolean;
}

export interface MenuButton extends Menu {
  action(menu: MenuButton): void;
}

export interface MenuSwitch extends Menu {
  value: boolean;
  update(state: boolean): void;
}
