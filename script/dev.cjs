const { createServer, build } = require("vite");
const { spawn } = require("child_process");
const electron = require("electron");
const { electronConfig, rendererConfing } = require("./config.cjs");

class DevApp {
  isInit = false;
  electronProcess = undefined;

  async run() {
    await this.start();
    this.isInit = true;
  }

  async start() {
    await this.rendererServer();
    await this.electronWatch();
  }

  async rendererServer() {
    const rendererServer = await createServer(rendererConfing);
    await rendererServer.listen();
  }

  async electronWatch() {
    // 挂载开发配置
    electronConfig.build.watch = {};
    electronConfig.plugins = [
      { writeBundle: () => this.restartElectron.apply(this) },
    ];

    await build(electronConfig);
  }

  restartElectron() {
    if (this.electronProcess && !this.isInit) return;
    if (this.electronProcess) this.electronProcess.kill();
    this.electronProcess = spawn(electron, ["."], {
      stdio: "inherit",
      env: Object.assign(process.env),
    });
  }
}

const app = new DevApp();
app.run();
