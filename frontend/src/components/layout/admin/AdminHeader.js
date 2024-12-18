import { Link } from "react-router-dom";

export default function AdminHeader(){
    return(
      <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/admin"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3" />
            eLEARNING
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/admin" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/admin" className="nav-item nav-link active">
              Profile
            </Link>
            <Link to="/admin" className="nav-item nav-link">
              Manage Skills
            </Link>
            <Link to="/admin" className="nav-item nav-link">
              Manage Users
            </Link>
            <Link to="/" className="nav-item nav-link d-lg-none d-sm-inline">
              Log Out
            </Link>
          </div>
          <Link
            to="/"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Log Out
            <i className="fa fa-arrow-right ms-3" />
          </Link>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
    );
}