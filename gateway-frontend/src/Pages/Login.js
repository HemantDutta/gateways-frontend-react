import React from 'react'
import Navbar from "../Navbar";
import i1 from "../assets/christ_flag.png"
import '../index.css';
// import { useForm } from "react-hook-form";



export const Login = () => {


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
        <div style={{ fontFamily: "KrossNeueGrotesk-Light" }} >
          <div className="row m-0 p-0 mt-5 bg-black">

            <div className="col-md-6 m-0 p-0 mt-0  bg-white christ" >
              <div className="col">
                <img src={i1} alt="..." />
              </div>
            </div>


            <div className="col-md-6  m-0 mt-0 p-2 bg-white" style={{ color: "black" }}>
              <div className="row m-0 p-0  ">
                <div className="row m-0 p-0 mt-3 justify-content-center">
                  <div className='col-md-9 col-12  m-0 p-3 mt-4' >
                    <h1> <center>Welcome To Gateways 2022 </center></h1>
                    <h2 style={{ fontFamily: "KrossNeueGrotesk-Light" }} >
                    <br/> <center> Login </center>
                    </h2>
                  </div>
                </div>
                <form>
                  <div className="row m-4 p-5  " >
                    
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
                      <label htmlFor="">Password</label>
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        id="password"
                        required
                      />
                    </div>
                    <div className="row p-5  pt-2 ">
                    <div className="col-3 m-0 p-0 ">
                       <a href='/register'  style={{color:"black",textDecoration:"none"}}>Not Registered ? Register Now</a>
                      </div>
                      <div className="col-8 m-0 p-0"></div>
                      <div className="col-1 m-0 p-0">
                      <input type="submit" className="btn" style={{ backgroundColor: "#CBE5FF" }} name="Submit form" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}
