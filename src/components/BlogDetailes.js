import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blogFromState = location.state?.blog;
  const dataFromState = location.state?.setdata;

  const [blog, setBlog] = useState(blogFromState || {});
  const [editMode, setEditMode] = useState(false);

  if (!blog || !blog.title) {
    return <p style={{ color: "red" }}>No blog data available.</p>;
  }

  const handleDelete = () => {
    alert("Blog deleted");
    navigate("/blogs");
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Blog updated");
  };

  return (
    <div className="blog-details">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" alt="" />
      
      {editMode ? (
        <div>
          <input
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <textarea
            value={blog.body}
            onChange={(e) => setBlog({ ...blog, body: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: "1rem", color: "red" }}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
