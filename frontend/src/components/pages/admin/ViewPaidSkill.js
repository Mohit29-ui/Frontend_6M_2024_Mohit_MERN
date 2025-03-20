import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Link, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";
import { ToastContainer } from "react-toastify";

export default function ViewPaidSkill() {
  var [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  var id = params.id;
  var userid = params.userid;

  useEffect(() => {
    ApiServices.PaidSkillAll()
      .then((res) => {
        console.log(res?.data);
        setData(res?.data?.data);
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
            <Link to="/admin/manageusers">Manage Users</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"/admin/viewuser/"+id}>View User</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-decoration-none text-secondary" to={"/admin/viewpaidskill/"+id+"/"+userid}>View PaidSkills</Link>
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
              <table id="freeskill" className="table table-bordered border-secondary-subtle table-striped">
                <thead className="table-secondary border-secondary">
                  <tr className="text-center">
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Technology</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Thumbnail</th>
                    <th>Created By</th>
                  </tr>
                </thead>
                <tbody>
                  {data.filter(el => el.userId._id===userid).map((el, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{el.name}</td>
                          <td>{el.technology}</td>
                          <td>{el.description}</td>
                          <td>{el.duration}</td>
                          <td>
                            <img
                              src={"http://localhost:5000/" + el.thumbnail}
                              alt={el.name}
                            />
                          </td>
                          <td>{el.userId.email}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
