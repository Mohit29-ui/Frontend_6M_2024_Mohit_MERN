import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddSkills() {
  var [name, setName] = useState("");
  var [technology, setTechnology] = useState("");
  var [description, setDescription] = useState("");
  var [duration, setDuration] = useState("");
  var [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState("");
  const nav = useNavigate();

  const handleform = (e) => {
    console.log("form cannot be submitted empty");
    e.preventDefault();

    setLoading(true);

    let data = new FormData();
    data.append("name", name);
    data.append("technology", technology);
    data.append("description", description);
    data.append("duration", duration);
    data.append("thumbnail", thumbnail);

    axios
      .post("http://localhost:5000/admin/skill/add", data,
        {headers: { Authorization: sessionStorage.getItem("token") }}
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.success === true) {
          toast.success(res.data.message);
          setTimeout(() => {
            setLoading(false);
            nav("/admin/manageskills");
          }, 3000);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

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
      <div className="container-fluid py-5">
        <div className="container py-3">
          <h1 className="text-center mb-4">Add Skill</h1>
        </div>
        <div className="container w-50 py-3 mx-auto">
          <form onSubmit={handleform}>
            <ToastContainer />
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control my-2"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Skill Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="technology">Technology:</label>
              <input
                type="text"
                className="form-control my-2"
                id="technology"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                placeholder="Enter Technology"
              />
              {/* <span className="text-danger">{emailError}</span> */}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                className="form-control my-2"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration:</label>
              <input
                type="text"
                className="form-control my-2"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Duration"
              />
              {/* <span className="text-danger">{contactError}</span> */}
            </div>
            <div className="form-group">
              <label htmlFor="thumbnail">Thumbnail:</label>
              <input
                type="file"
                className="form-control my-2"
                id="thumbnail"
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Update Skill
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
