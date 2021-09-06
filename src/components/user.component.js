import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookService } from '../features/bookingSlice';



 const User = () => {
    const [name,setName] = useState("");
    const [model,setModel] = useState("");
    const [mobile,setMobile] = useState("");
    const [servicetype,setServicetype] = useState("");

    const dispatch = useDispatch();

    const handleBooking = (e) => {
        e.preventDefault()

        dispatch(
            bookService({
                name:name,
                model:model,
                mobile:mobile,
                servicetype:servicetype,
            })
            
        )
         console.log(e)
        // return {handleBooking}
        axios.post('http://localhost:5000/booking')
        .then(res=>console.log(res.data));
    }
    return (
        <div className="container">
            <h3 className="display-3 my-5 text-center">Book Your Service Here</h3>
            <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={(e) => handleBooking(e)}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                    required
                    className="form-control"
                    name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}/>
                   
                </div>
                <div className="form-group">
                    <label>Vehicle Model: </label>
                    <input type="text"
                    required
                    className="form-control"
                    name="vehiclemodel"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}/>
                    
                </div>
                <div className="form-group">
                    <label>Mobile: </label>
                    <input type="tel"
                    required
                    className="form-control"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                   
                </div>
                <div className="form-group">
                    <label>Service Type: </label>
                    <input type="text"
                    required
                    className="form-control"
                    name="service"
                    value={servicetype}
                    onChange={(e) => setServicetype(e.target.value)}
                    />
                   
                </div>
                <div className="form-group">
                    <input type="Submit"
                    
                    className="form-control btn btn-block btn-dark my-3" />
                </div>
            </form>
            
            </div>
            </div>
        </div>
    )
}

export default User
