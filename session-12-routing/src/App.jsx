import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <BrowserRouter>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='products'>Products</Link>
        </li>
        
      </ul>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="details/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
