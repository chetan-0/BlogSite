import { useState } from "react";
const NewBlog = () => {

    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("John");
    const [body,setBody]=useState("");
    const sub=(e)=>{
        e.preventDefault();
        const newblog={title,author,body}
        
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2><br/>
            <form onSubmit={sub}>
            <label>Blog title - </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/><br/>
            <label>Author - </label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value=" John">John</option>
                <option value="Sam">Sam</option>
            </select><br/><br/>
            <lable>Blog body - </lable>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea><br/><br/>
            <button type="submit" className="addbtn">Add Blog</button>
            </form>
        </div>
     );
}
 
export default NewBlog;