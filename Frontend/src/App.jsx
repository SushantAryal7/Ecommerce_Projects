import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Counter from "./pages/Counter";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Logout from "./pages/Logout";
// import "./index.css";
console.log("testing");
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/product/:id" element={<ProductCard />} />

            <Route path="/" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />

            <Route
              path="/cart"
              element={
                <ProtectedRoutes>
                  <Cart />
                </ProtectedRoutes>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
