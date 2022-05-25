import {useState,useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'Abc',body:'asdf sadf asdf asdf ',author:'a',id:1},
        {title:'Xyz',body:'asfd asfd asdf asdf sadf',author:'b',id:2},
        {title:'Pqr',body:'asfd asdf',author:'c',id:3}]);
    
        const delBlog = (id)=>{
            const newBlogs=blogs.filter(blog=>blog.id!=id)
            setBlogs(newBlogs);
        }
        const [a,setA]=useState("bus");

        useEffect(()=>{
            console.log("hi");
        },[a])
    return ( 
        <div className="homeContent">
            <BlogList blogs={blogs} del={delBlog}/>
            <button onClick={()=>setA('car')}>click me</button>
        </div>
    );
            }
export default Home;