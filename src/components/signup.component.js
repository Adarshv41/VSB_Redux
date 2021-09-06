import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import axios from 'axios';

const Signup = () => {
  
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                name:name,
                email:email,
                password:password,
                loggedIn:true
            })
        )

        axios.post('http://localhost:5000/user/',login)
        // .then(res => console.log(res.data));
        // window.location='/signup';

    }

    return (
        <div className="conatiner">
            <h3 className="text-center my-2 display-3" >Signup</h3>
            <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group ">
                <label>Name: </label>
                <input type="name"
                required
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
               />
               </div>
                <div className="form-group ">
                <label>Email: </label>
                <input type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
               </div>
               <div className="form-group">
                <label>Password: </label>
                <input type="password"
                required
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div> 
                <div className="form-group ">
                    <input type="Submit"
                    // value="SignUp"
                    className="form-control my-3 btn btn-dark"/>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Signup
