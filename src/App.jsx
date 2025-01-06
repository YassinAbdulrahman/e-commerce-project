import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import Footer from "./Components/utilities/Footer";
import NavBarLogin from "./Components/utilities/NavBarLogin";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ShopProductsPage from "./page/Products/ShopProductsPage";
import ProductsDetalisPage from "./page/Products/ProductsDetalisPage";
import CartPage from "./page/Cart/Cartpage";
import ChoosePayMethodPage from "./page/Checkout/ChoosePayMethodPage";
import AdminAllProductPage from "./page/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./page/Admin/AdminAddSubCategoryPage";

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
          <Route path="/products/:id" element={<ProductsDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
