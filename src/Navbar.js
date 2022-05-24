const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blog-Site</h1>
                <div className="links">
                    <a href="/">Home</a>{"   "}
                    <a href="/new">New Blog</a>
                    <a href="/new">About us</a>
                    <a href="/">Logout</a>
                </div>
        </nav>
     );
}
 
export default Navbar;