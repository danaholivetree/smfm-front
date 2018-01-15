import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `http://res.cloudinary.com/smfm/image/upload/v1515971442/fyfp9cq4ix5uwk3juawv.jpg`
};

const BuyOrSell = () => (
  <div className='container' style={ sectionStyle }>
    <Row>
      <Col md={12}>
       <h1 className='text-center'>Welcome to Stuff My Friends Make!</h1>
      </Col>
    </Row>
    <Row >
      <Col mdOffset={5} md={4} >
        <Link exact  to='/shoppingFeed'>
          <Button type='button' className='btn btn-primary'>BUY</Button>
        </Link>

        <Link exact className='center-block' activeClassName='is-active' to='/sell'>
          <button type='button' className='btn btn-primary'>SELL</button>
        </Link>
      </Col>
    </Row>


  </div>
)

export default BuyOrSell
