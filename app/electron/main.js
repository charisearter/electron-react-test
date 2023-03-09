const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
	let window = new BrowserWindow({
		width: 800,
		height: 600,
	});

	window.webContents.on('did-finish-load', () => {
		window.show();
		window.focus();
	});

	window.loadFile('index.html');
});
