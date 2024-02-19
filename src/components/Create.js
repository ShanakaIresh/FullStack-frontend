
import '../App.css'
import { useState } from 'react'
import axios from 'axios'


const Create = () => {

    const [inputValue, setinputValue] = useState()



    const onChangeHandler = (e) => {
        setinputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const onClickHandler = () => {

        axios.post("http://localhost:5000/blogs/postBlogs", {
            data: inputValue
        })

    }


    return (
        <div className="newBlog">
            <h2>Create Your Blog</h2>
            <div className="newTopic">
                <input type="text" name="Blog_name" placeholder="Enter Topic" onChange={onChangeHandler} />
            </div>
            <div className="newContent">
                <textarea name="Blog_content" cols="40" rows="10" placeholder='Enter Your Content' onChange={onChangeHandler}></textarea>
            </div>
            <div className="newAuthor">
                <input type="text" name="Blog_author" placeholder="Enter Author Name" onChange={onChangeHandler} />
            </div>
            <div className="submit"><button className='btn submitbtn' onClick={onClickHandler}>Submit</button></div>
        </div>
    );
}

export default Create;