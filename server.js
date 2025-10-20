process.stdout.isTTY = true;
process.env.NODE_DISABLE_COLORS = '1';

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const appName = process.env.CONTAINER_NAME || "MyWebServer";

app.use('/', (req, res) => {
    console.error(`Request served by ${appName}`);
    res.sendFile(path.join(__dirname, 'index.html'));
    
});

app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}. Success!`);
})

