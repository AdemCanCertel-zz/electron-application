const electron = require('electron') // Electron I defined
const path = require('path') // Path I defind

//Getting Node Api
const root = fs.readdirSync('/')


const { app, BrowserWindow  } = require('electron') // I have defined the Electron window Browser Window



function newWindow () {  // Creates a window in the browser
    const win = new BrowserWindow({
    width: 800, //Determines Window Width.
    height: 600, //Determines the Window Height.
    webPreferences: {
        nodeIntegration: true
}
    })
     
    // The window also opens the html file we specified.
win.loadFile("index.html")
    win.webContents.openDevTools() // Then DevTOOLS opens.

}

app.addRecentDocument('') //Project path
app.clearRecentDocuments()

app.whenReady().then(() => {
    yeniPencere()


// Turn off electron browser with Darwin
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0 ) newWindow()
  })
})
