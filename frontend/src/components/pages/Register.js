// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import ApiServices from "../layout/ApiServices";

export default function Register() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [contact, setContact] = useState("");
  var [address, setAddress] = useState("");
  var [profession, setProfession] = useState("");
  var [skills, setSkills] = useState("");
  var [emailError, setEmailError] = useState("");
  var [contactError, setContactError] = useState("");
  var [profilePhoto, setProfilePhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const validDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"]; // Add more valid domains as needed

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = email.split("@")[1];
    return emailPattern.test(email) && validDomains.includes(domain);
  };

  const validateContact = (contact) => {
    const contactPattern = /^(?:\+91|91)?[789]\d{9}$/;
    return contactPattern.test(contact);
  };

  const handleform = (e) => {
    console.log("form cannot be submitted empty");
    e.preventDefault();

    let hasError = false;
    if (!validateEmail(email)) {
      setEmailError("Invalid Email");
      toast.error("Invalid Email");
      hasError = true;
    } else {
      setEmailError("");
    }
    if (!validateContact(contact)) {
      setContactError("Invalid Contact");
      toast.error("Invalid Contact");
      hasError = true;
    } else {
      setContactError("");
    }
    if (hasError) {
      return;
    }
    setLoading(true);

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("contact", contact);
    data.append("address", address);
    data.append("profession", profession);
    data.append("skills", skills);
    data.append("profilePhoto", profilePhoto);

    ApiServices.Register(data)
      .then((res) => {
        // console.log(res.data);
        if (res.data.success === true) {
          toast.success(res.data.message);
          setTimeout(() => {
            setLoading(false);
            nav("/login");
          }, 3000);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <ClipLoader color="#3498db" loading={loading} size={50} />{" "}
          {/* Spinner */}
        </div>
      )}
      <div className=" container-fluid py-5">
        <div className="container w-50 border border-rounded bg-secondary-subtle rounded-3">
          <div className="conatiner py-3 w-75 mx-auto">
            <h1 className="text-center text-primary rounded-2 py-1 w-75 mx-auto">Registration Form</h1>
          </div>
          <div className="container w-75 py-3 mx-auto ">
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
                <span className="text-danger">{emailError}</span>
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
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
                <span className="text-danger">{contactError}</span>
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
                <label for="skills">Skills:</label>
                <input
                  type="text"
                  className="form-control my-1"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="eg like - CSS, Cooking"
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
                <button type="submit" className="btn btn-primary py-2 my-2">
                  Register
                </button>
              </div>
              <p className="text-center">
                If already have an account? ,
                <button className="btn btn-primary btn-sm">
                  <Link to="/login" className="text-light">
                    Login
                  </Link>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
