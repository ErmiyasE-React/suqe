import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../../../asset/shopr.png";

function Navbar(){
   return (
       <>
       <div className="nav">
               <div className="nav-title">
                   <img src={Logo}/>
                  
               </div> 
  
       </div>
   
       </>
    
   );
}
export default Navbar