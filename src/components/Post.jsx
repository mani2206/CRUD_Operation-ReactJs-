import React from "react";
import { Link } from "react-router-dom";
// 1

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article className="post">
      <Link to={`/postpage/${post.id}`}>
        <h2>{post.title}</h2>
      
        <p className="postDate">{post.time}</p>
    

      <p className="postBody">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
      </Link>
      <hr />
    </article>
  );
}
