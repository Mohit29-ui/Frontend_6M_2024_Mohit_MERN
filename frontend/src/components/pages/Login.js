// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import ApiServices from "../layout/ApiServices";

export default function Login() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleform = (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };

    // console.log(email);
    // console.log(password);

    setLoading(true);
    ApiServices.Login(data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          toast.success(res.data.message);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("_id", res.data.data._id);
          sessionStorage.setItem("userType", res.data.data.userType);
          if (res.data.data.userType === 1) {
            setTimeout(() => {
              setLoading(false);
              nav("/admin");
            }, 4000);
          } else {
            setTimeout(() => {
              setLoading(false);
              nav("/customer");
            }, 4000);
          }
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
        <div className="conatiner py-3">
          <h1 className="text-center">Log In</h1>
        </div>
        <div className="container w-50 py-3 mx-auto">
          <form onSubmit={handleform}>
            <ToastContainer />
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
                type="password"
                className="form-control my-1"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
