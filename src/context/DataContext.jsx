import { createContext, useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const defaultPosts = [
    {
      id: 1,
      title: "Default Post 1",
      time: format(new Date(), "MMM dd, yyyy pp"),
      body: "This is the body of the default post 1.",
    },
    {
      id: 2,
      title: "Default Post 2",
      time: format(new Date(), "MMM dd, yyyy pp"),
      body: "This is the body of the default post 2.",
    },
  ];

  const [post, setPost] = useState(() => {
    // Retrieve posts from localStorage or return an empty array if none exist
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  });
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Save posts to localStorage whenever they change
    localStorage.setItem("posts", JSON.stringify(post));
  }, [post]);

  const postTitleRef = useRef(null);
  const postBodyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (post?.[post.length - 1]?.id ?? 0) + 1;
    const time = format(new Date(), "MMM dd, yyyy pp");
    const postTitle = postTitleRef.current.value;
    const postBody = postBodyRef.current.value;
    const newPost = {
      id,
      title: postTitle,
      time,
      body: postBody,
    };

    // Add new post to state and clear input fields
    const allPosts = [...post, newPost];
    setPost(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  useEffect(() => {
    if (!Array.isArray(post)) return;

    const filterResult = post.filter((p) =>
      [p.title, p.body].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
    );

    setSearchResult(filterResult.reverse());
  }, [post, search]);

  const handleDelete = (id) => {
    const deleteItem = post.filter((items) => items.id !== id);
    setPost(deleteItem);
    navigate("/");
  };

  const handleEdit = (id) => {
    const time = format(new Date(), "MMM dd, yyyy pp");
    const updatePost = {
      id,
      title: editTitle,
      time,
      body: editBody,
    };

    setPost(
      post.map((post) => (post.id === id ? { ...updatePost } : post))
    );
    setEditTitle("");
    setEditBody("");
    navigate("/");
  };

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        setSearchResult,
        handleSubmit,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        handleDelete,
        post,
        handleEdit,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        postTitleRef,
        postBodyRef,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
