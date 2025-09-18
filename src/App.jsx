import { Router, Routes, Route } from "react-router";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Header>
    </div>
  );
}

export default App;
