import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './CategoryCard';
function CategoryContainer({data , loading}) {

  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FF03E8",
  ];

  return (
    <Container>
        <div className='admin-content-text'>كل تصنيفات</div>
        <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item,index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image.slice(9)}
                  background={colors[Math.floor(Math.random() * 5 + 1)]}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" />
        )}
        </Row>
    </Container>
  )
}

export default CategoryContainer