import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAddAdress from '../../Components/User/UserAddAdress'

function UserAddAddressPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col
         sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAddAdress/>
        </Col>
      </Row>
    </Container>
  )
}

export default UserAddAddressPage