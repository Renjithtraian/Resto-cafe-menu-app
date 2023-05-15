import "./App.scss";
import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

export const DataContext = createContext();
export const CartContext = createContext();

function App() {

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  
  console.log(cart);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = (await fetch(
        "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
      ))
        setData(await response.json());
        setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <DataContext.Provider value={ data }>
            <CartContext.Provider value={[cart, setCart]}>
              <Navbar  />
              <Main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart cart={cart}/>} />
                </Routes>
              </Main>
            </CartContext.Provider>
          </DataContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
