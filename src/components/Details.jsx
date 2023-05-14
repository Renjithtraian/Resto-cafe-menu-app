import React, { useState, useContext } from "react";
import Items from "./Items";

const Details = ({ data, selected }) => {
  return (
    <div className="items">
      {data[0]?.table_menu_list
        .filter((item) => item.menu_category_id === selected)
        .map((dishes) => {
          return dishes.category_dishes.map((menu) => {
            console.log("Details", menu);
            return <Items menu={menu} selected={selected} key={menu.dish_id} />;
          });
        })}
    </div>
  );
};

export default Details;
