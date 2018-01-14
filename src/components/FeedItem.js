import React from 'react'
import { Col,  Clearfix} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const FeedItem = ({item, selector, onAddToCart, onAddBookmark, path}) => (

    <Col md={4} sm={12} className="text-center">

        <h4> {item.itemName}</h4>
        <NavLink to={`/shoppingfeed/${item.id}`} >
          <img src={item.image} width='252px' alt='' />
        </NavLink>
        <div>For sale by: {item.sellerName}</div>
    
    </Col>

  )

export default FeedItem
