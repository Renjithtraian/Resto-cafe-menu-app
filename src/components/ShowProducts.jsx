import React, { useState } from "react";
import Details from "./Details";
import { useContext } from "react";
import { DataContext } from "../App";
const ShowProducts = () => {
  const { data } = useContext(DataContext);

  const [selected, setSelected] = useState("11");
  const [active, setActive] = useState("");

  return (
    <>
      <div className="Products">
        {data[0]?.table_menu_list.map((menu) => {
          return (
            <>
              <div key={menu.menu_category_id} className="Products-container">
                <button
                  className={menu.menu_category === active ? "active" : ""}
                  key={menu.id}
                  onClick={() => {
                    setActive(menu.menu_category),
                      setSelected(menu.menu_category_id);
                  }}
                >
                  {menu.menu_category}
                </button>
              </div>
            </>
          );
        })}
      </div>
      <Details selected={selected} data={data} />
    </>
  );
};

export default ShowProducts;
