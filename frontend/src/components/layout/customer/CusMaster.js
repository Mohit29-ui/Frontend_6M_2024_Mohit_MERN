import { Outlet } from "react-router-dom";
import CusHeader from "./CusHeader";
import Footer from "../Footer";

export default function CusMaster() {
  return (
    <>
      <CusHeader />
      <Outlet />
      <Footer />
    </>
  );
}
