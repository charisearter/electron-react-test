const { app, BrowserWindow } = require('electron');

function createWindow() {
	// create new window
	let window = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
	});

	window.webContents.on('did-finish-load', () => {
		window.show();
		window.focus();
	});

	window.loadFile('app/dist/index.html');
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
