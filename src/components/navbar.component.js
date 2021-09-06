import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">K&Co.</Link>
            <div className="collpase navbar-collpase">
                <ul className="navbar-nav navbar-right">
                    <li className="navbar-item justify-content-end">
                        <Link to="/user" className="nav-link">User</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ="/admin" className="nav-link">Admin</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ="/signup" className="nav-link">Signup</Link>
                    </li>
                </ul>
            </div>
            </nav> 
        </div>
    )
}

export default Navbar
