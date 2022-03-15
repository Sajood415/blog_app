import React from "react";
import Post from "./Post";

import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getAllPosts } from "../Service/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async ()=> {
      let data = await getAllPosts();
      setPosts(data) 
    }
    fetchData();
  }, []);

  return posts.map((post) => (
    <Grid item>
      <Link
        to={`/details/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Post post={post}/>
      </Link>
    </Grid>
  ));
};

export default Posts;
