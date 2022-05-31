import { useState } from "react";
import { useHistory } from "react-router-dom";
import (useHistory)
const NewBlog = () => {

    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("John");
    const [body,setBody]=useState("");
    const history = useHistory();
    const sub=(e)=>{
        e.preventDefault();
        const newblog={title,author,body}
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(newblog)
        }).then(()=>{
            console.log('added')
            // history.go(-1)
            history.push('/')
        })
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