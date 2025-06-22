import React from "react";
import posts from "../data/posts.json";

const PostList = () => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
