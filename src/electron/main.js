const { app, BrowserWindow, ipcMain, Notification } = require("electron");

const path = require("path");

const isDev = !app.packaged;

const URL = isDev
  ? "http://localhost:3000"
  : `file://${path.join(__dirname, "../../build/index.html")}`;

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(URL);

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
};

ipcMain.on("notify", (_, message) => {
  new Notification({ title: "Notification", body: message }).show();
});

app.on("ready", createWindow);

app.on("window-all-closed", () => process.platform !== "darwin" && app.quit());

app.on("activate", () => mainWindow === null && createWindow());
