export default function Dashboard() {
  return (
    <>
      {/* Admin Dashboard Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">Admin Dashboard</h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Manage Users</h5>
                  <p className="card-text">View and manage all users.</p>
                  <a href="/admin/users" className="btn btn-primary">
                    Go to Users
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">View Statistics</h5>
                  <p className="card-text">Analyze user data and statistics.</p>
                  <a href="/admin/stats" className="btn btn-primary">
                    View Stats
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Settings</h5>
                  <p className="card-text">Manage application settings.</p>
                  <a href="/admin/settings" className="btn btn-primary">
                    Go to Settings
                  </a>
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
