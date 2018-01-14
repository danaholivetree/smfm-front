import React from 'react'
import {NavLink} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'

const BuyOrSell = () => (
  <div className='container'>
    <Row>
      <Col md={12}>
       <h1 className='text-center'>Welcome to Stuff My Friends Make! Do you want to: </h1>
      </Col>
    </Row>
    <Row >
      <Col mdOffset={5} md={4} >
        <NavLink exact  to='/shoppingFeed'>
          <Button type='button' className='btn btn-primary'>BUY</Button>
        </NavLink>
      </Col>
    </Row>
    <Row>
      <Col mdOffset={5} md={2} >or</Col>
    </Row>
    <Row>
      <Col mdOffset={5} md={4} >
        <NavLink exact className='center-block' activeClassName='is-active' to='/sell'><button type='button' className='btn btn-primary'>SELL</button></NavLink>
      </Col>
    </Row>
  </div>
)

export default BuyOrSell
