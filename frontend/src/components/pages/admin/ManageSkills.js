import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function ManageSkills() {
  var [data, setData] = useState([]);
  // var[status,setStatus] = useState("")
  var nav = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType"); // Assuming userType is stored in sessionStorage

    if (!token && userType !== 1) {
      // Redirect to login or unauthorized page
      nav("/login"); // Change this to your login route
      return;
    }
    console.log("useEffect hook call");
    axios
      .post("http://localhost:5000/admin/skill/all",)
      .then((res) => {
        console.log(res);
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nav]);

  function changeStatus(id, currentStatus) {
    console.log("change status fun called", id);
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
    axios
      .post("http://localhost:5000/admin/skill/delete", data, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!!");
      });
  }

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h1 className="text-dark display-3 mb-4">Manage Skills</h1>
        </div>
      </div>

      {/* header end */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="container text-center py-3">
            <Link to="/admin/addskills">
              <button className="btn btn-primary">Add Skills</button>
            </Link>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-sm-10 mx-auto">
              <ToastContainer />
              <table className="table table-bordered">
                <tr>
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
                {data?.filter(el => el.status===true).map((el,index)=>{
                  return(
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
                        <td>{el.status ? "true" : "false"}</td>
                        <td>
                          <button>
                            <Link
                              className="btn btn-primary"
                              to={"/admin/updateskills/" + el._id}
                            >
                              Edit
                            </Link>
                          </button>
                        </td>
                        <td>
                          <button
                            className=""
                            onClick={() => {
                              changeStatus(el._id, el.status);
                            }}
                          >
                            change status
                          </button>
                        </td>
                      </tr>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
