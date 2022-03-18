const post = require('../schema/postSchema')


const createPost = async (req, res) => {
    try {
        const singlePost = await new post(req.body)
        singlePost.save();
        res.status(200).json("Post Saved");
    } catch (e) {
        res.status(500).json(e)
    }
    console.log(req.body)
}

const getAllPosts = async (req, res) => {
    try {
      let posts = await post.find({});
      res.status(200).json(posts)
    } catch (e) {
        res.status(500).json(e)
    }
}
const getPost = async (req, res) => {
    try {
      let detailPost = await post.findById(req.params.id);
      res.status(200).json(detailPost)
    } catch (e) {
        res.status(500).json(e)
    }
}

const updatePost = async (req, res) => {
    try {
      await post.findByIdAndUpdate(req.params.id, {$set: req.body });
      res.status(200).json("Blog updated Successfully")
    } catch (e) {
        res.status(500).json(e)
    }
}

const deletePost = async (req, res) => {
    try {
      let deletePost = await post.findById(req.params.id);
      await post.deleteOne(deletePost);
      res.status(200).json("Blog updated Successfully")
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}
