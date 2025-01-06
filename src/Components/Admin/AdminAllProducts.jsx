import React from "react";
import AdminAllProductsCard from "./AdminAllProductsCard";
import { Row } from "react-bootstrap";

function AdminAllProducts() {
  return (
    <>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="d-flex justify-content-center">
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
    </>
  );
}

export default AdminAllProducts;
