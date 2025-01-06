import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/utilities/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../Components/utilities/SideFilter";
import CardProductContainer from "../../Components/Product/CardProductContainer";
import Pagination from "../../Components/utilities/Pagination";

function ShopProductsPage({ title }) {
  return (
    <div style={{ minHeight: "67px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتيجة البحث ..." />
         <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
             <CardProductContainer title="" btntitle=""  pathText=""/>
          </Col>
         </Row>
         <Pagination/>
      </Container>
    </div>
  );
}

export default ShopProductsPage;
