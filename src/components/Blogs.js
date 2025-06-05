import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Blogs.css"

const Blogs = ({newBlog, id}) => {
    const [data, setData] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [blogClicked, setBlogClicked] = useState(false)
    const [blogItem, setBlogItem] = useState()
    var newData = {}
    // let count = 0

    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const BlogPost = (item) => {
        setBlogClicked(true)
        setBlogItem(item)
    }


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if(!response.ok){
                    throw new Error("Error occurred")
                }
                return response.json()
            })
            .then((d) => {
                setData(d)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if(loading) return <p style={{margin:'auto', position:"relative", top:"25vh"}}>Loading...</p>
    if(error) return <p style={{color:"red", margin:'auto', position:"relative", top:"25vh"}}>Error: {error}</p>

    return (
        <div className="container">
            {   !blogClicked &&
                data.slice(0,9).map((item) => {
                    return (
                        <Link key={item.id} to={`/blog/${item.id}`} className="blogLinks" state={{blog: item, newdata:newData}}>
                            <div className="blog">
                                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" alt="" />
                                <div className="content">
                                    <h3 className="title"><strong>{capitalizeFirstLetter(item.title)}</strong></h3>
                                    <p className="data">{capitalizeFirstLetter(item.body)}</p>
                                </div>
                            </div>
                        </Link> 
                    )
                })
            }
            {
                !blogClicked &&
                newBlog.map((item) => {
                    return (
                        <Link key={item.id} to={`/blog/${item.id}`} className="blogLinks" state={{blog: item}}>
                            <div className="blog">
                                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" alt="" />
                                <div className="content">
                                    {/* <h3 className="title"><strong>{item.title}</strong></h3> */}
                                    <h3 className="title"><strong>{capitalizeFirstLetter(item.title)}</strong></h3>
                                    <p className="data">{capitalizeFirstLetter(item.body)}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
            {
                blogClicked && blogItem &&
                <div>
                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" alt="" />
                    <div>
                        <h2>{blogItem.title}</h2>
                        <p>{blogItem.body}</p>
                    </div>
                </div>
            }
            

        </div>
    )
}

export default Blogs