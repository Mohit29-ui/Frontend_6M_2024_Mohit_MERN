import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Register() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [contact, setContact] = useState("");
  var [address, setAddress] = useState("");
  var [profession, setProfession] = useState("");
  var [emailError, setEmailError] = useState("");
  var [contactError, setContactError] = useState("");
  var [profilePhoto, setProfilePhoto] = useState("");
  const nav = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateContact = (contact) => {
    const contactPattern = /^(?:\+91|91)?[789]\d{9}$/;
    return contactPattern.test(contact);
  };

  const handleform = (e) => {
    console.log("form cannot be submitted empty");
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      toast.error(emailError);
    }
    if (!validateContact(contact)) {
      setContactError("Invalid Contact");
      toast.error(contactError);
    } 
    else {
      let data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("password", password);
      data.append("contact", contact);
      data.append("address", address);
      data.append("profession", profession);
      data.append("profilePhoto", profilePhoto);

      axios
        .post("http://localhost:5000/customer/profile/add/", data)
        .then((res) => {
          // console.log(res.data);
          if (res.data.success === true) {
            toast.success(res.data.message);
            setTimeout(()=>{
                nav('/login');
            },4000)
          } 
          else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className=" container-fluid py-5">
        <div className="conatiner py-3">
          <h1 className="text-center">Registeration Form</h1>
          <p className="text-center">If already have an account,
            <button className="btn btn-primary btn-sm">
              <Link to="/login" className="text-light">Login</Link>
            </button>
          </p>
        </div>
        <div className="container w-50 py-3 mx-auto">
          <form onSubmit={handleform}>
            <ToastContainer />
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control my-1"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input
                type="text"
                className="form-control my-1"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {/* <span className="text-danger">{emailError}</span> */}
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input
                type="text"
                className="form-control my-1"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set Password"
              />
            </div>
            <div className="form-group">
              <label for="contact">Contact:</label>
              <input
                type="text"
                className="form-control my-1"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter contact no."
              />
              {/* <span className="text-danger">{contactError}</span> */}
            </div>

            <div className="form-group">
              <label for="address">Address:</label>
              <input
                type="text"
                className="form-control my-1"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your Address"
              />
            </div>
            <div className="form-group">
              <label for="profession">Profession:</label>
              <input
                type="text"
                className="form-control my-1"
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="Enter your Profession"
              />
            </div>
            <div className="form-group">
              <label for="profession">Profile Photo</label>
              <input
                type="file"
                className="form-control my-1"
                id="profession"
                onChange={(e) => setProfilePhoto(e.target.files[0])}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
