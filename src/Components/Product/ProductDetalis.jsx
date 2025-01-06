import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

function ProductDetalis() {
  return (
    <div>
       <Row>
        <Col lg="4">
            <ProductGallery/>
        </Col>
        <Col lg="8">
            <ProductText/>
        </Col>
       </Row>
    </div>
  )
}

export default ProductDetalis