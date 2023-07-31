const express = require('express');
const path = require('path');
const app = express();
const port = 9000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require('./Model/Post');
const { Counter } = require('./Model/Counter');

app.listen(port, () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`Example app listening on port http://localhost:${port}`);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.post('/api/post/submit', (req, res) => {
    let temp = req.body;
    Counter.findOne({ name: 'counter' })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;
            const communityPost = new Post(temp);
            communityPost.save().then(() => {
                Counter.updateOne({ name: 'counter' }, { $inc: { postNum: 1 } }).then(() =>
                    res.status(200).json({ success: true })
                );
            });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});

app.post('/api/post/list', (req, res) => {
    Post.find()
        .exec()
        .then((doc) => {
            res.status(200).json({ success: true, postList: doc });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
    });

app.post('/api/post/detail', (req, res) => {
    Post.findOne({ postNum: Number(req.body.postNum) })
        .exec()
        .then((doc) => {
            console.log(doc)
            res.status(200).json({ success: true, postList: doc });
            })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});