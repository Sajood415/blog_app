import axios from 'axios'

const URL = 'http://localhost:5000'

export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post);
    } catch (e) {
        console.log("Error while creating post", e)
    }
}

export const getAllPosts = async () => {
    try {
        let response = await axios.get(`${URL}/posts`);
        return response.data
    } catch (e) {
        console.log("Error while getting all posts", e)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data
    } catch (e) {
        console.log("Error while getting a post", e)
    }
}

export const updatePost = async (id, post) => {
    try {
        await axios.post(`${URL}/update/${id}`, post);
    } catch (e) {
        console.log("Error while updating a post", e)
    }
}

export const deletePost = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`);
    } catch (e) {
        console.log("Error while deleting a post", e)
    }
}