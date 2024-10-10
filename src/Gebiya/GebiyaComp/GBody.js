import React from "react";
import GCard from "./GCard"; 
import data from "../data.json"; 

function GBody() {
  const handleAction = (productName) => {
    console.log(`${productName} action triggered!`);
  };

  return (
    <>
     
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.products.map((product) => (
          <GCard 
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

export default GBody;
