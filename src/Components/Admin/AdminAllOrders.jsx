import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminAllOrdersItem from "../Admin/AdminAllOrdersItem";

function AdminAllOrders() {
  return (
    <>
      <div className="admin-content-text">ادارة جميع الطلبات</div>
      <Row className="justify-content-start">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </Row>
    </>
  );
}

export default AdminAllOrders;
