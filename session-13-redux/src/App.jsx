import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./components/counter"
import Products from "./components/products"
import Header from "./components/header"
import CartPage from "./components/cartPage"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
