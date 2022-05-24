import {useState} from 'react';

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'abc',body:'asdf sadf asdf asdf ',author:'a',id:1},
        {title:'xyz',body:'asfd asfd asdf asdf sadf',author:'b',id:2},
        {title:'pqr',body:'asfd asdf',author:'c',id:3}]);
    
    return ( 
        <div className="homeContent">
            {blogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Authored by {blog.author}</p>
                    <p>{blog.body}</p>
                </div>
            ))}

        </div>
    );
            }
export default Home;