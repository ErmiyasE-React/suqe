import GNavbar from './GebiyaComp/GNavbar';
import { Outlet } from "react-router-dom";
import GFooter from "./GebiyaComp/GFooter";


function Gebiya() {
  return (
    <div className="gebiya-container">
      <GNavbar />
      <div className="content">
        <Outlet />
      </div>
      <GFooter className="footer"/>
    </div>
  );
}

export default Gebiya;
