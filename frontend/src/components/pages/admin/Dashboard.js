// import { useEffect } from "react";
import { Link,  } from "react-router-dom";

export default function Dashboard() {
  // var nav = useNavigate();
  // useEffect(()=>{
  //   const token = sessionStorage.getItem("token");
  //   const userType = sessionStorage.getItem("userType"); // Assuming userType is stored in sessionStorage

  //   if (!token || userType !== 1) {
  //     // Redirect to login or unauthorized page
  //     nav("/login"); // Change this to your login route
  //     return;
  //   }
  // })
  return (
    <>
      {/* Admin Dashboard Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">Admin Dashboard</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Manage Users</h5>
                  <p className="card-text">View and manage all users.</p>
                  <Link to="/admin/users" className="btn btn-primary">
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
                  <h5 className="card-title">Settings</h5>
                  <p className="card-text">Manage application settings.</p>
                  <Link to="/admin/settings" className="btn btn-primary">
                    Go to Settings
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Total skills Users</h5>
                  <p className="card-text">Total no. of skills.</p>
                  <Link to="/admin/users" className="btn btn-primary">
                    Go to Users
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
                  <p className="card-text">Total no. of Paid skills.</p>
                  <Link to="/admin/manageskills" className="btn btn-primary">
                    Go to Skills
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 ">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Free skills</h5>
                  <p className="card-text">Total no. of Free skills.</p>
                  <Link to="/admin/settings" className="btn btn-primary">
                    Go to Settings
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
