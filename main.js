const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // NOTE this is how we will get this to work when we want to run in desktop mode
  // win.loadFile("index.html");
  // win.loadURL(
  //   process.
  //     ? 'http://localhost:8080'
  //     : `file://${path.join(__dirname, '../docs/index.html')}`
  // );

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
