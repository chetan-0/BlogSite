import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog-Site</h1>
                <div className="links">
                    <Link to="/">Home</Link>{"   "}
                    <Link to="/new">New Blog</Link>
                    <Link to="/">About us</Link>
                    <Link to="/">Logout</Link>
                    </div>
        </nav>
     );
                
}
 
export default Navbar;