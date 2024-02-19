import '../App.css'
import { useState, useEffect } from 'react'
import Logic from './Logic'
import axios from 'axios'
import useFetch from '../hooks/useFetch.js'

const Blog = () => {
    const [blog, setBlog] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    useFetch("http://localhost:5000/blogs/getBlogs", setBlog, setIsLoaded)

    const handleClick = (key) => {
        const filtBlog = blog.filter((blog) => {
            return blog.Blog_Id !== key
        })
        setBlog(filtBlog)
        axios.delete("http://localhost:5000/blogs/deleteBlogs", {
            data: {
                Blog_Id: key
            }
        })
    }
    return (
        <>
            {isLoaded && <Logic blog={blog} handleClick={handleClick} />}
        </>
    );
}

export default Blog;