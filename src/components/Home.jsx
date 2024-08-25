import React from "react";
import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";


// 3

 const Home = () =>{
 const {searchResult, fetchError, isLoading,post } = useContext(DataContext)
  return (
    // <main className='home'>

    //   {post && post.length ? (
    //     <Feed post={post} />
    //   ) : (
    //     <p>No posts to display</p>
    //   )}
    // </main>
    <main className="home">
      {isLoading && <p className="statusMsg">Loading post...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg text-danger">{fetchError}</p>
      )}
      {!isLoading && !fetchError && post.length ? (
        <Feed post={searchResult} />
      ) : (
        <p>No posts to display</p>
      )}
    </main>
  );
}

export default Home
