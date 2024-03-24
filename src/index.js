const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    icon: path.join(__dirname, "icon.png"),
    resizable: false,
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.setTitle("Calculator");
  // and load the index.html of the app.
  mainWindow.loadFile("src/index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => app.quit());
