import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Master from "./components/layout/Master";
import About from "./components/pages/About";
import Courses from "./components/pages/Courses";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import AdminMaster from "./components/layout/admin/AdminMaster";
import Dashboard from "./components/pages/admin/Dashboard";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import CusDashboard from "./components/pages/customer/CusDashboard";
import CusMaster from "./components/layout/customer/CusMaster";
import ManageSkills from "./components/pages/admin/ManageSkills";
import UpdateSkills from "./components/pages/admin/UpdateSkills";
import AddSkills from "./components/pages/admin/AddSkills";
import ChangePassword from "./components/pages/ChangePassword";
import ManageUsers from "./components/pages/admin/ManageUsers";
import ViewUser from "./components/pages/admin/ViewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master/>} >
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
          </Route>

          <Route path="/admin" element={<AdminMaster/>} >
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/admin/manageskills" element={<ManageSkills/>}/>
            <Route path="/admin/updateskills/:id" element={<UpdateSkills/>}/>
            <Route path="/admin/addskills" element={<AddSkills/>}/>
            <Route path="/admin/manageusers" element={<ManageUsers/>}/>
            <Route path="/admin/viewuser/:id/:userid" element={<ViewUser/>}/>
          </Route>

          <Route path="/customer" element={<CusMaster/>}>
            <Route path="/customer" element={<CusDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
