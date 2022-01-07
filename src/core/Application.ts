import { app, BrowserWindow } from "electron";
import path from "path";

export class Application {
  win: BrowserWindow;

  constructor(private minWidth: number, private minHeight: number) {
    this.win = new BrowserWindow({
      minWidth: this.minWidth,
      minHeight: this.minHeight,
      width: this.minWidth,
      height: this.minHeight,
      webPreferences: {
        sandbox: true,
        preload: path.join(__dirname, "preload.cjs"),
      },
    });
  }

  run() {
    this.start();
  }

  async start() {
    // 开发环境
    if (!app.isPackaged) {
      const { env } = await import("../../package.json");
      this.win?.loadURL(`http://${env.HOST}:${env.PORT}/`);
      return;
    }

    // 打包环境
    this.win?.loadFile(path.join(__dirname, "index.html"));
  }
}
