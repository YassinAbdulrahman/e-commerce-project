import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../Product/ProductCard'
import Pagination from '../utilities/Pagination'

function UserFavoriteProduct() {
  return (
    <>
        <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Pagination />
    </>
  )
}

export default UserFavoriteProduct