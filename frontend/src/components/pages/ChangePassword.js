// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import ApiServices from "../layout/ApiServices";

export default function ChangePassword() {
  var [email, setEmail] = useState("");
  var [oldPassword, setOldPassword] = useState("");
  var [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleform = (e) => {
    e.preventDefault();

    let data = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    // console.log(email);
    // console.log(password);

    setLoading(true);
    ApiServices.ChangePassword(data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          setLoading(true);
          toast.success(res.data.message);
          setTimeout(()=>{
            nav("/login");
          },2000)
        } else {
          toast.error(res?.data?.message)
          setLoading(false);
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
          <h1 className="text-center">Change Password</h1>
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
              <label for="oldpassword">Old Password:</label>
              <input
                type="password"
                className="form-control my-1"
                id="oldpassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter Old Password"
              />
            </div>

            <div className="form-group">
              <label for="oldpassword">New Password:</label>
              <input
                type="password"
                className="form-control my-1"
                id="newpassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Set New Password"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
