import axios from "axios";
import React, { useState } from "react";

const AddLog = () => {
  const [input, changeInput] = useState({
    name: "",
    dept: "",
    sem: "",
    course: "",
    Sysno: "",
    logintime: "",
    logouttime: "",
  });
  const inputHandler =(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
  }
  const readValues =()=>{
    console.log(input)
    axios.post("http://localhost:3000/add-log",input).then(
        (response)=>{
            console.log(response.data)
            alert("details added")
        }
    ).catch()
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Lab Entry Form</h3>

            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={input.name}
                onChange={inputHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="dept"
                value={input.dept}
                onChange={inputHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Semester</label>
              <input
                type="text"
                className="form-control"
                name="sem"
                value={input.sem}
                onChange={inputHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Course</label>
              <input
                type="text"
                className="form-control"
                name="course"
                value={input.course}
                onChange={inputHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">System Number</label>
              <input
                type="text"
                className="form-control"
                name="Sysno"
                value={input.Sysno}
                onChange={inputHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Login Time</label>
              <input
                type="time"
                className="form-control"
                name="logintime"
                value={input.logintime}
                onChange={inputHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Logout Time</label>
              <input
                type="time"
                className="form-control"
                name="logouttime"
                value={input.logouttime}
                onChange={inputHandler}
              />
            </div>

            <button className="btn btn-primary w-100" onClick={readValues}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;
