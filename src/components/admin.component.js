import React from 'react'
import EditUser from './edituser.component'



const Admin = () => {
   
    
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-12  text-right mx-auto">
           <h3 className="text-center">Booking Log</h3>
           <table className="table table-hover">
               <thead className="text-white bg-dark text-center shadow">
                   <tr>
                       <th>Name</th>
                       <th>Vehicle Model</th>
                       <th>Mobile</th>
                       <th>Service Type</th>
                       {/* <th>Date</th> */}
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
                  {/* {
                      response.map((response)=> (
                          <tr>
                              <td>{response.name}</td>
                              <td>{response.vehiclemodel}</td>
                              <td>{response.mobile}</td>
                              <td>{response.servicetype}</td>
                          </tr>
                      ))
                  } */}
               </tbody>
           </table>
           <EditUser/>
        </div>
        </div>
        </div>
    )
}

export default Admin
