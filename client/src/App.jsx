import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import NavBarLayout from "./utils/Layout/NavBarLayout";
import AdminPage from "./pages/AdminPage";

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-darkGreenStart via-darkGreenMid to-darkGreenStart">
      <Routes>
        <Route element={<NavBarLayout></NavBarLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/dashboard/:menu" element={<AdminPage></AdminPage>}></Route>
        </Route>

        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
