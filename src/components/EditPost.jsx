import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

export default function EditPost() {
  const { post, handleEdit, editTitle, setEditTitle, editBody, setEditBody } =
    useContext(DataContext);
  const { id } = useParams();
  const posts = post.find((post) => post.id.toString() === id);
   console.log(post, "post----");

  useEffect(() => {
    if (posts) {
      setEditTitle(posts.title);
      setEditBody(posts.body);
    }
  }, [post, posts, setEditTitle, setEditBody]);

  return (
    <>
      <main className="editPost">
        <h2>Edit Post</h2>
        {posts ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Title</label>
            <input
              required
              id="postTitle"
              type="text"
              className="editPost"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label>Body:</label>
            <input
              required
              type="text"
              id="postBody"
              className="editPost"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              className="btn btn-success my-2"
              onClick={(e) => handleEdit(posts.id)}
            >
              SUBMIt
            </button>
          </form>
        ) : (
          <p>No data found</p>
        )}
      </main>
    </>
  );
}
