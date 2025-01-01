import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import Footer from "./Components/utilities/Footer";
import NavBarLogin from "./Components/utilities/NavBarLogin";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ShopProductsPage from "./page/Products/ShopProductsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
