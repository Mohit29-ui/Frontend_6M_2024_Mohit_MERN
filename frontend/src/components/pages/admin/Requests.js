import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { ToastContainer } from "react-toastify";

export default function Requests() {
  var [data, setData] = useState([]);
  var [users, setUsers] = useState([]);
  var [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiServices.RequestAll()
      .then((res) => {
        console.log(res?.data);
        setData(res?.data?.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });

    ApiServices.AllUsers()
      .then((res) => {
        console.log(res?.data);
        setUsers(res?.data?.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });

    ApiServices.PaidSkillAll()
      .then((res) => {
        console.log(res?.data);
        setSkill(res?.data?.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {/* Breadcrumb start */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-secondary-subtle py-4 fs-4 d-flex justify-content-center">
          <li className="breadcrumb-item">
            <Link to="/admin">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/admin/managerequests">Manage Requests</Link>
          </li>
        </ol>
      </nav>
      {/* Breadcrumb end */}
      {/* Table start */}
      <div className="container-fluid about py-3">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-sm-10 mx-auto">
              <ToastContainer />
              { <table id="freeskill" className="table table-bordered border-secondary-subtle table-striped">
                <thead className="table-secondary border-secondary">
                  <tr className="text-center">
                    <th>Srno</th>
                    <th>Learner's Name</th>
                    <th>Skill</th>
                    <th>Skill Creator</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{el.learnerID.name}</td>
                          <td>{el.paidSessionID.name}</td>
                          <td>{el.skilledPersonID.name}</td>
                          <td>{el.RequestMessage}</td>
                          <td className="d-flex justify-content-center">
                            <button className="btn btn-success mx-1">
                              Accept
                            </button>
                            <button className="btn btn-danger mx-1">
                              Reject
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
