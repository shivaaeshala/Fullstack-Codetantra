import React from "react";
import {Link} from "react-router-dom"
import "../App.css"

function Navbar() {

    return (
        <div className="mainNav">
            <nav className="nav">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/blogs">Blogs</Link>
                <Link className="links" to="/newblog">New Blog  <i class="fa-solid fa-plus"></i></Link>
            </nav>
        </div>
    )
}

export default Navbar