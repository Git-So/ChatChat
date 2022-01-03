export interface ExposeDrawer {
  onUpdateShowState(isShow: boolean): void;
  onShow(): void;
  onHide(): void;
}
