import React from "react";
import emptyBox from '../../../asset/Inbox Empty.png'

function OpenSuqe(){
  
  return(
      <>
        <h1>Gebiya OpenSuqe</h1>

        <img src={emptyBox} alt="Empty Box"/>

        <div className="btncon">
              <button className="btn2">Add Now / አሁን ልጨምር </button>
            </div>
      </>
  );

}
export default OpenSuqe