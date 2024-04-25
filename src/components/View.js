import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import {  useEffect } from "react";
import { FaRegHospital } from "react-icons/fa";


const View = () => {
 const { id } = useParams();
 const [users, setUsers] = useState([]);
 const history = useNavigate();
 useEffect(() => {
  async function getUsers () {
   try {
    const user = await axios.get(`http://localhost:8000/appoints/${id}`,users)
    console.log(user.data);
    setUsers(user.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getUsers();
 }, [id])

 function handleClick() {
  history("/")
 }
 return (
  <>
  
  <div className="printable ">
  <div printablebtn>
    <button variant="contained" color="primary" onClick={handleClick}>Back to Home</button>
    <button variant="contained" color="primary" onClick={window.print}>Print</button>
   </div>
    
    <div className="slipheading1">
    <h1>< FaRegHospital  /></h1>
    <h2>BEST HOSPITAL</h2>
    <h3>Brahampuri, Seelampur, Delhi 110053 </h3>
    </div>
    <hr />
    <div className="slipheading2 d-flex justify-content-evenly ">
    <div className="patientDetails">
    Name:{users.name}<br/>
    AGE:{users.age}<br/>
    GENDER:{users.gender}<br/>
    </div>
    <div className="ptientAppointment">
    ID:{users.id}<br/>
    DATE:{users.date}<br/>
    TIME:{users.time}<br/>

    </div>
    </div>
    <hr />
    <div className="slipbody">
    <span>< FaRegHospital className='slipbodylogo'  /></span>
    </div>
  </div>
    
   
  </>
 )
}

export default View
