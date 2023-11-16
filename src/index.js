const {app, BrowserWindow,ipcMain,dialog} = require('electron');
const { event } = require('jquery');

function createWindow (){
    const win = new BrowserWindow({
        width: 1050,
        height: 700,
        minWidth:1050,
        minHeight:700,
        autoHideMenuBar:true,
        webPreferences: {
          nodeIntegration: true,
         contextIsolation: false
        }
      })

      win.loadFile('./src/menu_principal.html');
      
}



app.whenReady().then(createWindow);