import { useContext, useState } from "react";
import { CartContext } from "../App";

const Addtocart = ({ menu, id }) => {

  const [ cart, setCart ] = useContext(CartContext);
  console.log("cart",cart);

  let itemincart = cart.findIndex((item) => item.dish_id === id) ; //1
  let count = cart?.find((item) => item.dish_id === id)?.count || 0;  
  console.log(itemincart);


  const handleIncrease = () => {  //2
    if (itemincart === -1) {
      let cartProduct = { ...menu, count: 1 };
      setCart((prev) => {
        console.log({ prev });
        return [...prev, cartProduct];
      });
      console.log("adding item to cart");
    } else { //3
      setCart((prev) => {  //array of objects 
        return prev?.map((item) => 
          item.dish_id === id ? { ...item, count: item.count + 1 } : item 
        );
      });
      console.log("increase count");
    }
  };

  const handleDecrease = () => {  //4
    if (count <= 1) { 
      setCart((prev) => {
        return prev.filter((item) => item.dish_id !== id); 
      });
    } else {
      setCart((prev) => {
        return prev?.map((item) =>
          item.dish_id === id ? { ...item, count: item.count - 1 } : item
        );
      });
    }
  };

  return (
    <>
    {menu.dish_Availability ? (
    <div className="button">
      <span className="min" onClick={handleDecrease}>
        -
      </span>
      <span> {count}</span>
      <span className="plus" onClick={handleIncrease}>
        +
      </span>
      <br />
    </div>
    ) : ""
}
    </>
  );
};

export default Addtocart;
