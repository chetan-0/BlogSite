const blogComponent = (props) => {
    const blogs=props.blogs;
    // const delBlog=props.del;
    return ( 
        <div className="blogcomponent">
        {blogs.map((blog)=>(
            <div className="preview" key={blog.id}>
                <h1>{blog.title}</h1>
                <p><b>Authored by {blog.author}</b></p>
                <p>{blog.body}</p>
                {/* <button type="button" classsName="delbtn" onClick={()=>delBlog(blog.id)}>Delete Blog</button> */}
            </div>
        ))}
        </div>
     );
}
 
export default blogComponent;