import { Routes, Route } from "react-router";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

import { sampleProducts as products } from "./data/products";
import { useState } from "react";
import { ShoppingCartContext } from "./context/context";

function App() {
  const [productList, setProductList] = useState(products);
  const [cartList, setCartList] = useState([]);

  console.log(cartList);

  return (
    <div>
      <ShoppingCartContext.Provider value={{cartList, setCartList}}>
        <Header >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products productList={productList} />
              }
            />
          </Routes>
        </Header>
      </ShoppingCartContext.Provider>
    </div>
  );
}

export default App;
