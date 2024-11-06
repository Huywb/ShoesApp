import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import NavBarLayout from "./utils/Layout/NavBarLayout";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-darkGreenStart via-darkGreenMid to-darkGreenStart">
      <Routes>
        <Route element={<NavBarLayout></NavBarLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
        </Route>

        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
