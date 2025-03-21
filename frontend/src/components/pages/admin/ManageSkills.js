import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import ApiServices from "../../layout/ApiServices";

export default function ManageSkills() {
  var [data, setData] = useState([]);
  var [refresh, setRefresh] = useState("");
  const [loading, setLoading] = useState(true);

  var nav = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType"); // Assuming userType is stored in sessionStorage

    if (!token || userType !== "1") {
      // Redirect to login or unauthorized page
      nav("/login"); // Change this to your login route
      return;
    }

    ApiServices.AllSkills()
      .then((res) => {
        // console.log(res);
        setData(res?.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Something went wrong!!");
        setLoading(false);
      });
  }, [loading]);

  function changeStatus(id, currentStatus) {
    var newStatus;
    if (currentStatus === true) {
      newStatus = "false";
    } else {
      newStatus = "true";
    }
    let data = {
      _id: id,
      status: newStatus,
    };
    setLoading(true);
    ApiServices.DeleteSkill(data)
      .then((res) => {
        // console.log(res);
        if (res.data.success === true) {
          toast.success("Status changed");
          setLoading(true);
          setRefresh((prev) => !prev);
          setData((prevData) => {
            prevData.map((item) => {
              if (item._id === id) {
                return { ...item, status: newStatus };
              } else {
                return item;
              }
            });
          });
        } else {
          toast.error(res.data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Something went wrong!!");
        setLoading(false);
      });
  }

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
            <Link className="text-decoration-none text-secondary" to="/admin/manageskills">Manage Skills</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/admin/addskills">Add Skills</Link>
          </li>
        </ol>
      </nav>
      {/* Breadcrumb end */}
      
      <div className="container-fluid about py-3">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-sm-10 mx-auto">
              <ToastContainer />
              <table className="table table-bordered border-secondary-subtle table-striped">
                <thead className="table-secondary border-secondary">
                  <tr className="text-center">
                    <th>Srno</th>
                    <th>Name</th>
                    <th>Technology</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Change status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((el, index) => {
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
                            // style={{height:"150px",width:"250px"}}
                            className="w-50 h-50"
                          />
                        </td>
                        <td>
                          {el.status ? (
                            <span className="text-success">Active</span>
                          ) : (
                            <span className="text-danger">Inactive</span>
                          )}
                        </td>
                        <td>
                          <button className="btn btn-sm btn-primary">
                            <Link
                              className="text-light text-decoration-none"
                              to={"/admin/updateskills/" + el._id}
                            >
                              Edit
                            </Link>
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => {
                              changeStatus(el._id, el.status);
                            }}
                          >
                            change status
                          </button>
                        </td>
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
