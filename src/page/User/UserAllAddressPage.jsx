import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAllAddress from '../../Components/User/UserAllAddress'


function UserAllAddressPage() {
  return (
    <Container style={{height:"1000px"}}>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAllAddress />
        </Col>
      </Row>
    </Container>
  )
}

export default UserAllAddressPage