import React from 'react'
import Navbar from "../Navbar";
import i1 from "../assets/christ_flag.png"
import '../index.css';
// import { useForm } from "react-hook-form";



export const Register  = () => {
 

// console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>  
      <div className="row">
        <Navbar />
      </div>
      <div class="container-flex " style={{
          position: "fixed",
          top: "0",
          width: "100%",
        }}>
      <div style={{fontFamily:"KrossNeueGrotesk-Light"}} >
        <div className="row m-0 p-0 mt-5 bg-black">
           
          <div className="col-md-6 m-0 p-0 mt-0  bg-white christ" >
            <div className="col">
              <img   src={i1} alt="..." />
            </div>
          </div>
          

          <div className="col-md-6  m-0 mt-0 p-2 bg-white" style={{ color: "black" }}>
            <div className="row m-0 p-0  ">
            <div className="row m-0 p-0 justify-content-center">
              <div className='col-md-9 col-12  m-0 p-0 mt-4' >
                <h1> <center>Welcome To Gateways 2022 </center></h1>
                <h2 style={{fontFamily:"KrossNeueGrotesk-Light"}} >
                 <center> Registration </center>
                </h2>
              </div>
            </div>
            <form>
            <div className="row m-0 p-4  " >
              <div className="col-lg-12 m-2">
                <label htmlFor="">Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="email"
              
                  required
                />
              </div>
            
              <div className="col-lg-12 m-2">
                <label htmlFor="">University/College</label>
                <select class="form-control"
                  id="inputName"
                  placeholder="College" 
                  name="college" >
                  <option value="0" selected="selected"  disabled >Select Your College</option>
                  <option value="1">Christ (Deemed to be University)</option>
                  <option value="2">Jain University</option>
                  <option value="3">RV University</option>
                  <option value="4">University</option>
                </select>
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Phone Number</label>
                <input
                  name="phno"
                  type="text"
                  class="form-control"
                  id="phno"
              
                  required
                />
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"               
                  required
                />
              </div>
              <div className="d-flex justify-content-end pt-2">
                <input type="submit" className="btn" style={{backgroundColor:"#CBE5FF"}}  name="Submit form"/>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div> 
      </div>    
      </div>   
     
      {/* <div >
        <div className="row m-0 p-0 mt-0 " style={{
          position: "fixed",
          top: "0",
          width: "100%",
        }}>
          <div className="col-lg-6 d-flex m-0 p-0 mt-0   ">
            <div>
              <img className="m-0 w-100" src={i1} alt="..."  />
            </div>
          </div>

          <div className="col-lg-6  m-0 mt-5 p-4 bg-white" style={{ color: "black" }}>
            <div className="row m-0 p-2 ">
              <cenetr><div className='col-lg-8 col-12  m-0 p-0'>
                <h1>Welcome To Gateways 2022</h1>
                <h2>
                  Registration
                </h2>
              </div></cenetr>
            </div>
            <form>
            <div className="row m-0 p-4 ">
              <div className="col-lg-12 m-2">
                <label htmlFor="">Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
            
              <div className="col-lg-12 m-2">
                <label htmlFor="">University/College</label>
                <select class="form-control"
                  id="inputName"
                  placeholder="College" 
                  name="college" >
                  <option value="0" selected="selected"  disabled >Select Your College</option>
                  <option value="1">Christ (Deemed to be University)</option>
                  <option value="2">Jain University</option>
                  <option value="3">RV University</option>
                  <option value="4">University</option>
                </select>
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Phone Number</label>
                <input
                  name="phno"
                  type="text"
                  class="form-control"
                  id="phno"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="col-lg-12 m-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-flex justify-content-end pt-3">
                <input type="submit" className="btn bg-blue ms-2" name="Submit form"/>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div> */}


    </>

  )
}
