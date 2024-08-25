import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";


export default function Nav() {
  const {search, setSearch} = useContext(DataContext)
  
  return (
    <>
      <nav>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="search"
            placeholder="Search Post"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/postpage">PostPage</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
