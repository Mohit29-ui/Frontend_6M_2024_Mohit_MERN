// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";

export default function Dashboard() {
  var nav = useNavigate();
  var [data,setData] = useState([])
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType"); // Assuming userType is stored in sessionStorage

    if (!token || userType !== "1") {
      // Redirect to login or unauthorized page
      nav("/login"); // Change this to your login route
      return;
    }

    ApiServices.Dashboard()
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[nav]);
  return (
    <>
      {/* Admin Dashboard Start */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-secondary-subtle py-3 d-flex justify-content-center">
          <li className="breadcrumb-item  fs-3">
            <Link to="/admin">Home</Link>
          </li>
        </ol>
        <h1 className="text-center my-4">Admin Dashboard</h1>
      </nav>
      <div className="container-fluid bg-light py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Manage Users</h5>
                  <p className="card-text">View and manage all users.</p>
                  <Link to="/admin/manageusers" className="btn btn-primary">
                    Go to Users
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Manage Skills</h5>
                  <p className="card-text">View and manage all skills.</p>
                  <Link to="/admin/manageskills" className="btn btn-primary">
                    Go to Skills
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Requests</h5>
                  <p className="card-text">Total no. of requests.{" "+data.totalRequests}</p>
                  <Link to="/admin/settings" className="btn btn-primary">
                    Requests
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total skills</h5>
                  <p className="card-text">Total no. of skills.{" "+data.totalSkills}</p>
                  <Link to="/admin/users" className="btn btn-primary">
                    Skills
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Paid Skills</h5>
                  <p className="card-text">Total no. of Paid skills.{" "+data.totalPaidSessions}</p>
                  <Link to="/admin/manageskills" className="btn btn-primary">
                    Paid Skills
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Free skills</h5>
                  <p className="card-text">Total no. of Free skills.{" "+data.totalFreeSkills}</p>
                  <Link to="/admin/settings" className="btn btn-primary">
                   Free Skills
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Admin Dashboard End */}
    </>
  );
}
