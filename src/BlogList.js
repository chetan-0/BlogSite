const blogComponent = (props) => {
    const blogs=props.blogs;
    // const delBlog=props.del;
    return ( 
        <div className="blogcomponent">
        {blogs.map((blog)=>(
            <div className="preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Authored by {blog.author}</p>
                <p>{blog.body}</p>
                {/* <button type="button" classsName="delbtn" onClick={()=>delBlog(blog.id)}>Delete Blog</button> */}
            </div>
        ))}
        </div>
     );
}
 
export default blogComponent;