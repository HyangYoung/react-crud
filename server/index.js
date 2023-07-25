const express = require('express')
const path = require("path");
const app = express();
const port = 9000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            console.log(`Example app listening on port http://localhost:${port}`);
    }).catch((err) => {
        console.log(`${err}`)
    })
        })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.post("/api/test", (req, res) =>{
    console.log(req.body);
    res.status(200).json({ success: true, text: "Hi!" });
})