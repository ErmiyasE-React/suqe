import Navbar from './HomeCss/HomePageComp/Navbar';
import { Outlet } from "react-router-dom";
import Footer from "./HomeCss/HomePageComp/Footer";
function Home(){
  
  return(
      <>
        <Navbar />
          <Outlet/>
        </>
  );

}
export default Home