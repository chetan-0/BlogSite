import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './blogDetails';
import NewBlog from './NewBlog';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/new">
          <NewBlog/>
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails/>
        </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
