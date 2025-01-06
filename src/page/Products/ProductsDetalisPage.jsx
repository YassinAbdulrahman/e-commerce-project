import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetalis from "../../Components/Product/ProductDetalis";
import RateContainer from "../../Components/Rate/RateContainer";
import CardProductContainer from "../../Components/Product/CardProductContainer";

function ProductsDetalisPage() {
  return (
    <div style={{ minHeight: "670px"}}>
      <CategoryHeader />
      <Container>
        <ProductDetalis />
        <RateContainer />
        <CardProductContainer title="منتجات فد تعجبك" />
      </Container>
    </div>
  );
}

export default ProductsDetalisPage;
