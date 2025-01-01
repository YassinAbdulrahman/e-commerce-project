import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utilities/SubTitle";
import BrandCard from "./BrandCard";
import photoOne from "../../assets/images/brand1.png";
import photoTwo from "../../assets/images/brand2.png";

function BrandFeature({ title, btntitle, photoImg }) {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="allbrand" />
      <Row className="my-1 d-flex justify-content-between">
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

export default BrandFeature;
