const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
}, { collation: "Posts" });

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };