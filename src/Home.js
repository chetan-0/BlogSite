import {useState,useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch'
const Home = () => {
    
        // const delBlog = (id)=>{
        //     const newBlogs=blogs.filter(blog=>blog.id!=id)
        //     setBlogs(newBlogs);
        // }
        // const [a,setA]=useState("bus");

        const {data:blogs,Loading,error}=useFetch("http://localhost:8000/blogs")
    return ( 
        <div className="homeContent">
            {error && <div>{error}</div>}
            {Loading && <div>Loading...</div>}
            {blogs &&<BlogList blogs={blogs}/>}
            {/* <button type="button" class="btn btn-info">Info</button> */}
        </div>
    );
            }
export default Home;