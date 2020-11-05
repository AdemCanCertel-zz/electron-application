const electron = require('electron') // Electron tanımladım
const path = require('path') // path tanımladım

//Node Api alma
const root = fs.readdirSync('/')


const { app, BrowserWindow  } = require('electron') // Electron pencere Browser Window(Tarayıcı Penceresi) tanımladım



function yeniPencere () {  // Tarayıcı da pencere oluşturur
    const win = new BrowserWindow({
    width: 800, //Pencere Genişliğini Belirler.
    height: 600, //Pencere Yüksekliğini Belirler.
    webPreferences: {
        nodeIntegration: true
}
    })
     
    // Pencere de belirlediğimiz html dosyasını açar.
win.loadFile("index.html")
    win.webContents.openDevTools() // Ardından DevTOOLS açar.

}

app.addRecentDocument('Users\User\OneDrive\Masaüstü\electron application') //Proje yolu
app.clearRecentDocuments()

app.whenReady().then(() => {
    yeniPencere()


// Darwin ile electron tarayıcısını kapatma
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0 ) yeniPencere()
  })
})
