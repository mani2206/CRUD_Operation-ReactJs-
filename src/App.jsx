// App.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./context/DataContext";

const Aboout = lazy(() => import("./components/Aboout"));
const Home = lazy(() => import("./components/Home"));
const Missing = lazy(() => import("./components/Missing"));
const Nav = lazy(() => import("./components/Nav"));
const NewPost = lazy(() => import("./components/NewPost"));
const EditPost = lazy(() => import("./components/EditPost"));
const PostPage = lazy(() => import("./components/PostPage"));

function App() {
  return (
    <DataProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboout />} />
          <Route path="/postpage">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Suspense>
    </DataProvider>
  );
}

export default App;
