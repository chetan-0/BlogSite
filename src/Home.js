import {useState} from 'react';

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:'hi',body:'bye',author:'me',id:1},
        {title:'supp',body:'asfd',author:'oo',id:2},
        {title:'u',body:'me',author:'sic',id:3}]);
    
    return ( 
        <div className="homeContent">
            {blogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                    <h2>{}</h2>
                </div>
            ))}

        </div>
    );
            }
export default Home;