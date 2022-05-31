import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const history=useHistory();
    const {id}=useParams();
    const {data:blog, err , isLoading}= useFetch('http://localhost:8000/blogs/'+id)
    const del=()=>{
        fetch("http://localhost:8000/blogs/"+blog.id,{
            method:'DELETE',
    
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {err && <div>Error in fetching data</div>}
            {blog&&(<article>
                <h1>{blog.title}</h1>
                <h5>Written by {blog.author}</h5>
                <p>{blog.body}</p>
                <button className="delbtn" onClick={del}>Delete</button>
                </article>)}
        </div>
     );
}
 
export default BlogDetails;