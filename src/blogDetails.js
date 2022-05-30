import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id}=useParams();
    const {data:blog, err , isLoading}= useFetch('http://localhost:8000/blogs/'+id)
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {err && <div>Error in fetching data</div>}
            {blog&&(<article>
                <h1>{blog.title}</h1>
                <h5>Written by {blog.author}</h5>
                <p>{blog.body}</p>
                </article>)}
        </div>
     );
}
 
export default BlogDetails;