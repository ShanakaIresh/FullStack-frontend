const Logic = (prop) => {
    const blog = prop.blog
    const handleClick = prop.handleClick
    return (
        <>
            {
                blog.map((blog) => {
                    return (
                        <div className="blog" key={blog.Blog_Id}>
                            <div className="blogTopic"><h3>{blog.Blog_name}</h3></div>
                            <div className="blogContent"><p>{blog.Blog_content}</p></div>
                            <div className="blogAuthor"><p>{blog.Blog_author}</p></div>
                            <div className="delete"><button className="btn" onClick={() => { handleClick(blog.Blog_Id) }}>Delete</button></div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Logic;