import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ManageSkills() {
  var [data, setData] = useState([]);
  // var [status,setStatus] = useState("");
  var nav = useNavigate()
  useEffect(() => {
    console.log("useEffect hook call");
    axios
      .post("http://localhost:5000/customer/skill/all")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function changeStatus(id) {
    console.log("change status fun called", id);
    let data = new FormData();
    data.append("_id", id);
    data.append("status",false);
    axios
      .post("http://localhost:5000/customer/skill/delete", data, {
        headers: { Authorization: sessionStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          nav("/admin/manageskills");
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
            <div className=" offset-md-2 col-md-8">
              <table className="table table-bordered">
                <tr>
                  <th>Srno</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Change status</th>
                </tr>
                {data.map((el, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>
                      <img
                        src={"http://localhost:5000/" + el.thumbnail}
                        alt={el.name}
                        className="w-50 h-50"
                      />
                    </td>
                    <td>{el.status?"true":"false"}</td>
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
                      <button onClick={()=>{changeStatus(el._id)}}>change status</button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
