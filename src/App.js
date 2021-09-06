import {BrowserRouter as Router,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/react-toastify.esm"
import { ToastContainer } from 'react-toastify';

import Navbar from "./components/navbar.component";
import Signup from './components/signup.component';
import Admin from './components/admin.component';
import User from './components/user.component';
import About from './components/about.component';

function App() {
  return (
    
    <Router>
    
    <Navbar/>
    <br/>
    <ToastContainer/>
    <Route path="/" exact component={About}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/user" exact component={User}/>
    <Route path="/admin" exact component={Admin}/>
    </Router>
   
    
  );
}

export default App;
