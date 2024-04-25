import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import List from "./List";

const Appointment = () => {

  // const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [age, agechange] = useState("");
  const [time, timechange] = useState("");
  const [phone, phonechange] = useState("");
  const [date, datechange] = useState("");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    // if (id === null || id === '') {
    //   isproceed = false;
    //   errormessage += ' Username';
    // }
    if (name === null || name === '') {
      isproceed = false;
      errormessage += ' name';
    }
    if (date === null || date === '') {
      isproceed = false;
      errormessage += ' Date';
    }

    if (age === null || age === '') {
      isproceed = false;
      errormessage += ' age';
    }

    if (!isproceed) {
      toast.warning(errormessage)
    }
    // else {
    //   if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

    //   } else {
    //     isproceed = false;
    //     toast.warning('Please enter the valid email')
    //   }
    // }
    return isproceed;
  }


  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { name, age, phone, date, address, gender,time };
    console.log(regobj)
    if (IsValidate()) {

      fetch("http://localhost:8000/appoints", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
      }).then((res) => {
        toast.success('Registered successfully.')
        navigate('/');
      }).catch((err) => {
        toast.error('Failed :' + err.message);
      });
    }
  }
  return (
    <div className=" col-12 d-flex ">
      <div className=" col-4 m-3 ">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card Appointment">
            <div className="card-header">
              <h1>Appointment</h1>
            </div>
            <div className="card-body">

              <div className="row">
                
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Name <span className="errmsg">*</span></label>
                    <input value={name} onChange={e => namechange(e.target.value)} type="text" className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Age<span className="errmsg">*</span></label>
                    <input value={age} onChange={e => agechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Date <span className="errmsg">*</span></label>
                    <input type="date" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone <span className="errmsg"></span></label>
                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Time Slab</label>
                    <br></br>
                    <input type="radio" checked={time === '08:00am-10:00am'} onChange={e => timechange(e.target.value)} name="time" value="08:00am-10:00am" className="app-check"></input>
                    <label>08:00am-10:00am</label><br />
                    <input type="radio" checked={time === '10:00am-12:00am'} onChange={e => timechange(e.target.value)} name="time" value="10:00am-12:00am" className="app-check"></input>
                    <label>10:00am-12:00am</label><br />
                    <input type="radio" checked={time === '12:00am-02:00pm'} onChange={e => timechange(e.target.value)} name="time" value="12:00am-02:00pm" className="app-check"></input>

                    <label>12:00am-02:00pm</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br></br>
                    <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                    <label>Male</label><br />
                    <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                    <label>Female</label>
                  </div>
                </div>

              </div>

            </div>
            <div className="card-footer d-flex justify-content-center   ">
              <button type="submit" className="btn btn-primary fs-6 ">Book</button>
              <Link to={'/login'} className="btn btn-danger fs-6 ">Close</Link>
            </div>
          </div>
        </form>
      </div>
      <div className=" col-7 m-3 ">
        <List />
      </div>

    </div>
  );
}

export default Appointment;