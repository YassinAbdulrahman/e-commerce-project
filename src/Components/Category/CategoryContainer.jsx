import React from 'react'
import { Container, Row } from 'react-bootstrap'
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import labtop from "../../assets/images/labtop.png";
import sale from "../../assets/images/sale.png";
import pic from "../../assets/images/pic.png";
import CategoryCard from './CategoryCard';
function CategoryContainer() {
  return (
    <Container>
        <div className='admin-content-text'>كل تصنيفات</div>
        <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="اجهزه منزلية" img={clothe} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={cat2} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={labtop} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={sale} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={clothe} background="#F4DBA4"/>  
        <CategoryCard title="اجهزه منزلية" img={pic} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={clothe} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={cat2} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={labtop} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={sale} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={clothe} background="#F4DBA4"/>  
        <CategoryCard title="اجهزه منزلية" img={pic} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={cat2} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={labtop} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={sale} background="#F4DBA4"/>
        <CategoryCard title="اجهزه منزلية" img={clothe} background="#F4DBA4"/>  
        <CategoryCard title="اجهزه منزلية" img={pic} background="#F4DBA4"/>
        </Row>
    </Container>
  )
}

export default CategoryContainer