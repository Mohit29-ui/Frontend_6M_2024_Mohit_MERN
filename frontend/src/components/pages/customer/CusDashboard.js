import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CusDashboard() {
  var nav = useNavigate();
  useEffect(() => {
      const token = sessionStorage.getItem("token");
      const userType = sessionStorage.getItem("userType"); // Assuming userType is stored in sessionStorage
  
      if (!token || userType !== "2") {
        // Redirect to login
        nav("/login"); // Change this to your login route
        return;
      }
    }, [nav]);
  return (
    <>
      {/* User Dashboard Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">User Dashboard</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Profile Management</h5>
                  <p className="card-text">
                    View and edit your profile information.
                  </p>
                  <a href="/user/profile" className="btn btn-primary">
                    Go to Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">My Courses</h5>
                  <p className="card-text">Access your enrolled courses.</p>
                  <a href="/user/my-courses" className="btn btn-primary">
                    View My Courses
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Completed Courses</h5>
                  <p className="card-text">Review your completed courses.</p>
                  <a href="/user/completed-courses" className="btn btn-primary">
                    View Completed Courses
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Notifications</h5>
                  <p className="card-text">
                    Check your latest notifications and updates.
                  </p>
                  <a href="/user/notifications" className="btn btn-primary">
                    View Notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Account Settings</h5>
                  <p className="card-text">
                    Manage your account settings and preferences.
                  </p>
                  <a href="/user/settings" className="btn btn-primary">
                    Go to Settings
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Support</h5>
                  <p className="card-text">
                    Get help and support for your queries.
                  </p>
                  <a href="/user/support" className="btn btn-primary">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* User Dashboard End */}
    </>
  );
}
