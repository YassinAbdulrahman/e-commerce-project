import React from "react";
import photoOne from "../../assets/images/brand1.png";
import photoTwo from "../../assets/images/brand2.png";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";

function BrandContainer() {
  return (
    <Container>
      <div className='admin-content-text'>كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
        <BrandCard photoImg={photoOne} />
        <BrandCard photoImg={photoTwo} />
      </Row>
    </Container>
  );
}

export default BrandContainer;
