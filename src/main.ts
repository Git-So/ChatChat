import { app } from "electron";
import { Application } from "./core/Application";

app.whenReady().then(() => {
  const app = new Application();
  app.run();
});
