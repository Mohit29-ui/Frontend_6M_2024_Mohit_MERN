import { Link } from "react-router-dom";

export default function AdminHeader(){
    return(
        <div className="container-fluid bg-dark text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Admin Panel</h2>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/stats">Statistics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/admin/settings">Settings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    );
}