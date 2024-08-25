import React from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

export default function PostPage() {
  const { post, handleDelete } = useContext(DataContext)
  const { id } = useParams();
  const posts = post.find((post) => post.id.toString() === id);
  // console.log(`Searching for post with id: ${id}`);
  // console.log(posts, "post");
  return (
    <>
      <main className="postPage">
        <article className="post">
          {posts ? (
            <>
              <h2>{posts.title}</h2>
              <p className="postDate">{posts.time}</p>
              <p className="postBody">
                {posts.body.length <= 25
                  ? posts.body
                  : `${posts.body.slice(0, 25)}...`}
              </p>
              <Link to={`/edit/${posts.id}`}>
                <button
                  className="btn btn-success mx-2"
                >
                  Update
                </button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={(e) => handleDelete(posts.id)}
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <h6>Page Not found</h6>
              <p>
                <Link to="/">Visit your Home page</Link>
              </p>
            </>
          )}
        </article>
      </main>
    </>
  );
}
