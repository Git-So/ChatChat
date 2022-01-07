import { app, screen } from "electron";
import { Application } from "./core/Application";

app.whenReady().then(() => {
  // 获取屏幕大小
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  const [minWidth, minHeight] = [(800 * width) / 1536, (650 * height) / 843];

  const app = new Application(minWidth, minHeight);
  app.run();
});
