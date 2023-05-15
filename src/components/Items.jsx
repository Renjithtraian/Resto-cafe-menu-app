import React, { useContext, useState } from "react";
import checked from "../assets/checked.png";
import cancel from "../assets/cancel.png";
import Addtocart from "./Addtocart";
// import { CounterCount, CounterSet } from "../App";

const Items = ({ menu }) => {
  console.log("menu is",menu);

  return (
    <div key={menu.menu_category_id} className="dishes-main">
      {console.log("Hai")}
      <div className="left-section">
        <div className="dishes">
          {menu.dish_Availability === true ? (
            <img src={checked} alt="" />
          ) : (
            <img src={cancel} />
          )}
          <h3>{menu.dish_name}</h3>
        </div>
        <div className="dishes-details">
          <h3>{menu.dish_currency}</h3>
          <span>{menu.dish_price}</span>
        </div>
        <div className="dishes-addon">
          <p>{menu.dish_description}</p>
          <h2
            style={{ color: "red", marginBottom: ".3rem", fontSize: ".9rem" }}
          >
            {menu.dish_Availability === false ? "Out of Stock" : ""}
          </h2>
          <Addtocart menu={menu} id={menu.dish_id} key={menu.dish_id}></Addtocart>
          {menu.addonCat.length > 0 ? (
            <h3>Cutomization available</h3>
          ) : (
            <h3>Not available</h3>
          )}
        </div>
      </div>
      <div className="right-section">
        <h5>{menu.dish_calories} Calories</h5>
        <img src={menu.dish_image} alt="" />
      </div>
    </div>
  );
};

export default Items;
