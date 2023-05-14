import { Link } from "react-router-dom";
import cartimage from "../assets/cart.png";
import { CartContext } from "../App";
import { useContext } from "react";
const Navbar = ({ siteName }) => {
  const { cart } = useContext(CartContext);
  // let count = cart.reduce((acc, current) => acc + current.count, 0);
  let count = 0;
  cart.forEach((element) => {
    count += element.count;
  });
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2>{siteName}</h2>
        <nav>
          <ul>
            <li>
              <Link to="/cart">My orders</Link>
              <img src={cartimage} alt="" />
              <span id="cart">{count}</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
