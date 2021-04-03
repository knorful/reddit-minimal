import React from "react";

export const PostListItem = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h3>{post.data.title}</h3>
    </div>
  );
};
