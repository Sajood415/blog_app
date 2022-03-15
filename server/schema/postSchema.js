const mongoose = require('mongoose')

const PostSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date
    }
});

const post = mongoose.model('post', PostSchema)
module.exports = post