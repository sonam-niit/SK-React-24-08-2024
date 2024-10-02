import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import Products from "./components/Products"
import Header from "./components/Header"
import CartPage from "./components/CartPage"

function App() {
  
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>

      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
