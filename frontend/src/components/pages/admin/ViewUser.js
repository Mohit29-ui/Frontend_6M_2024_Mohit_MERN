import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Link, useParams } from "react-router-dom";
import ApiServices from "../../layout/ApiServices";

export default function ViewUser() {
  var [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  //   console.log("params is ", params.id);
  var id = params.id;

  useEffect(() => {
    let data = {
      _id: id,
    };

    ApiServices.ViewUser(data)
      .then((res) => {
        console.log(res.data.data);
        setData(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);

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
            <Link className="text-decoration-none text-secondary" to={"/admin/viewuser/" + id}>View User</Link>
          </li>
        </ol>
      </nav>
      {/* Breadcrumb end */}
      <div className="container-fluid py-3">
        <div
          className="card py-4 px-1 shadow mx-auto"
          style={{ width: "18rem" }}
        >
          <img
            src={"http://localhost:5000/" + data.profilePhoto}
            className="card-img-top"
            alt={data.name}
          />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
              <span>{"+91 " + data.contact}</span>
              <div className="d-flex flex-column">
                <span className="fs-4">Skills</span>
                <span className="btn btn-primary my-2">
                  <Link
                    to={data.userId ? `/admin/viewfreeskill/${id}/${data.userId._id}` :`/admin/viewuser/${id}`}
                    className="text-light nav-link"
                  >
                    FreeSkills
                  </Link>
                </span>
                <span className="btn btn-primary my-2">
                  <Link
                    to={data.userId ? `/admin/viewpaidskill/${id}/${data.userId._id}` :`/admin/viewuser/${id}`}
                    className="text-light nav-link"
                  >
                    PaidSkills
                  </Link>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
      {/* card end */}
    </>
  );
}
