import Slider from "../../Components/Home/Slider";
import logo from "../../assets/images/logo.png";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Product/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeature";

function HomePage() {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductContainer
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductContainer title="احدث الازياء" btntitle="المزيد" pathText="/products"   />
      <BrandFeature title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
}

export default HomePage;
