// src/pages/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // match the dynamic param in the route
  return <h1>Blog Post ID: {id}</h1>;
};

export default BlogPost;
