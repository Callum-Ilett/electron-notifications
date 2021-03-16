const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  notification: {
    send(message) {
      ipcRenderer.send("notify", message);
    },
  },
});
