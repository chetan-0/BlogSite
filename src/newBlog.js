import { useState } from "react";
const NewBlog = () => {

    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [body,setBody]=useState("");
    return ( 
        <div className="create">
            <h2>Add a new blog</h2><br/>
            <label>Blog title - </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/><br/>
            <label>Author - </label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value=" John">John</option>
                <option value="Sam">Sam</option>
            </select><br/><br/>
            <lable>Blog body - </lable>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea><br/><br/>
            <button className="addbtn">Add Blog</button>
        </div>
     );
}
 
export default NewBlog;