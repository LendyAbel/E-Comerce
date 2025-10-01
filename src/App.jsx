import { Routes, Route } from "react-router";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

import { sampleProducts as products } from './data/products';
import { useState } from 'react'

function App() {
  const [productList, setProductList] = useState(products)
  const [cartList, setCartList] = useState([])
  return (
    <div>
      <Header cartList={cartList}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products productList={productList} />} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;
