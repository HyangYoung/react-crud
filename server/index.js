const express = require('express')
const path = require("path");
const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, "../client/build")))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})