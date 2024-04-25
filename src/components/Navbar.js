import React from 'react';
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import { FaRegHospital } from "react-icons/fa";

const Navbar = () => {
  const nav = useNavigate();
  function logout() {
    sessionStorage.clear();
    nav("/");
  }
  return (
    <nav className='navbarstyle'>
      <Link to='/'>< FaRegHospital className=' bg-black  rounded-1 fs-1 ' /></Link>
      <Link to='/appointment'>Appointment</Link>
      <Link>
        <Dropdown >
          <Dropdown.Toggle variant="dark" className=' text-primary bg-black border-0  ' id="dropdown-basic">
            Speciality
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown bg-black  '>

            <Dropdown.Item to='/#' ><Link to='/#'>Hepatology</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Transplant Services</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Nephrology</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>HPb Surgery</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Laboratory Medicine</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Radiology and interventional Radiology</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Transfusion Medicine</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Anesthesia and Critical Care</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Cardiology</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Oncology</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Renal Transplant and Urology</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Pulmunary Medicine</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Link>

      <Link>
        <Dropdown >
          <Dropdown.Toggle variant="dark" className=' text-primary bg-black border-0  ' id="dropdown-basic">
            About Us
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown bg-black'>
            <Dropdown.Item to='/#' ><Link to='/#'>Vision</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/'>mission Services</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Messge From Chairman</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Governing Council</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>comittees</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Annual Reports</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>ILBS Phase</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>RTI</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>ILBS In News</Link></Dropdown.Item>
            <Dropdown.Item to='/#' ><Link to='/#'>Our Leadership</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Link>
      {sessionStorage.getItem("username") ?
        <>
          <Link to='/list'>Appointment List</Link>

          <Link
            onClick={logout}
            to="/"
          >
            Log Out
          </Link>
        </>
        :

        <>
          <Link to="/register" >Register</Link>
          <Link to="/login"
          // onClick={login}
          >
            Login
          </Link>
        </>
      }
      <Outlet />
    </nav>
  )
}

export default Navbar