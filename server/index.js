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

const { Post } = require("./Model/Post")

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

app.post("/api/post/submit", (req, res) => {
    let temp = req.body;
    console.log(temp);
    const communityPost = new Post(temp);
    communityPost.save().then(() => {
        res.status(200).json({success: true});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
})


/*
1. Post MongoDB Model
2. Client CSS (Bootstrap, Emotion)
 */