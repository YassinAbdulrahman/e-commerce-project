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
import AdminAddProductPage from "./page/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./page/User/UserAllOrdersPage";
import UserFavoriteProductPage from "./page/User/UserFavoriteProductPage";  
import UserAllAddressPage from "./page/User/UserAllAddresspage";
import UserAddAddressPage from "./page/User/UserAddAddressPage";
import UserEditAddressPage from "./page/User/UserEditAddressPage";
import UserProfilePage from "./page/User/UserProfilePage";

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
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductPage />} />
          <Route path="/user/addresses" element={<UserAllAddressPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
