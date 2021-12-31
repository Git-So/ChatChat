const vite = require("vite");
const { electronConfig, rendererConfing } = require("./config.cjs");
const electronBuild = require("electron-builder");

class BuildApp {
  async run() {
    await this.build();
    await this.pack();
  }

  async build() {
    // renderer 构建会清空 dist 目录
    await vite.build(rendererConfing);

    await vite.build(electronConfig);
  }

  async pack() {
    await electronBuild.build();
  }
}

const app = new BuildApp();
app.run();
