import BlogDetails from "./blogDetails";
import { Link } from "react-router-dom";
const blogComponent = (props) => {
    const blogs=props.blogs;
    // const delBlog=props.del;
    return ( 
        <div className="blogcomponent">
        {blogs.map((blog)=>(
            <div className="preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h1>{blog.title}</h1>
            </Link>
                <p><b>Authored by {blog.author}</b></p>
                <p>{blog.body}</p>
                {/* <button type="button" classsName="delbtn" onClick={()=>delBlog(blog.id)}>Delete Blog</button> */}
            </div>
        ))}
        </div>
     );
}
 
export default blogComponent;