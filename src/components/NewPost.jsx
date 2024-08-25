import React from "react";
import { useContext ,useRef} from "react";
import DataContext from "../context/DataContext";

const NewPost = () =>{
  const{ handleSubmit, postTitleRef,postBodyRef, } =
    useContext(DataContext);

    console.log("rerender");
  return (
    <>
      <main className="newPost">
        <h3>NewPost</h3>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            id="postTitle"
            type="text"
            required
            ref={postTitleRef}
          />
          <label>Body:</label>
          <input
            id="postBody"
            type="text"
            required
            ref={postBodyRef}
          />
          <button type="submit" className="btn btn-success my-3">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default NewPost;
