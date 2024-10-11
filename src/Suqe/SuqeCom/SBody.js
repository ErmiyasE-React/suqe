import React from "react";
import SCard from "./SCard"; 
import data from "../Sdata.json"; 
import { useNavigate } from 'react-router-dom';

function SBody() {
  const handleAction = (productName) => {
    console.log(`${productName} action triggered!`);
  };
  const navigate = useNavigate();
  

  const handleChange = () => {
    navigate('/Suqe/OpenSuqe'); 
  };
  return (
    <>
     
          <div className="btncon">
              <button onClick={handleChange} className="btn2">Open Shop / ሱቄን ልክፍት</button>
            </div>
     
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.products.map((product) => (
          <SCard 
            key={product.id}
            title={product.name} 
            description={product.description} 
            imageUrl={product.imageUrl} 
            onAction={() => handleAction(product.name)} 
          />
        ))}
      </div>
    </>
  );
}

export default SBody;
