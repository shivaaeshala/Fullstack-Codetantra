import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css"

const NewBlog = ({newBlog, setNewBlog, id, setId}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const navigate = useNavigate()
    
    const AddBlog = () => {
        if(title.length > 0 && body.length > 0){
            setNewBlog([...newBlog, {id:id+1, title: title, body: body}])
            setId(id+1)
        }
        navigate("/blogs")
    }

    return (
        <div className="newBContainer">
            <div className="addData">
                <h3>Title:</h3>
                {/* <br /> */}
                <input className="inputBox" type="text" onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter the title" />
            </div>
            <div className="addData">
                <h3>Content:</h3>
                {/* <br /> */}
                <textarea rows={15} cols={100} onChange={(e) => {setBody(e.target.value)}}></textarea>
            </div>
            <button onClick={AddBlog}>Add blog</button>
        </div>
    )
}

export default NewBlog