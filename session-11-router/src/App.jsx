import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/home"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import ErrorPage from "./pages/Errorpage"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Header />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />} 
          errorElement={<ErrorPage />}/>
          <Route path="dashboard/*" element={<Dashboard />} />


          {/* 404 path always keep at last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
