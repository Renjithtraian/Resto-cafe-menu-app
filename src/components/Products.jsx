import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ShowProducts from "./ShowProducts";

const Products = () => {
  // const [data,setData] = useState([])
  return (
    <div className="products-comp">
      <div className="row">
        <ShowProducts></ShowProducts>
      </div>
    </div>
  );
};

export default Products;
