import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const FeedItem = ({item, selector, onAddToCart, onAddBookmark, path}) => (

    <Col md={4} sm={12}>
        <h4> {item.itemName}</h4>


        <NavLink to={`/shoppingfeed/${item.id}`} >
          <img src={item.image} width='200px' alt='' />
        </NavLink>


        <div>For sale by: {item.sellerName} </div>

      </Col>
  )



//     {selector && item.quantity > 1 ?
//      <select name='quantitySelector' defaultValue={item.cartQuantity} onChange={changeQuantity}>
//      {selector}
// //     </select>
//     : '' }
//   { path !== 'shoppingcart' ? <input className='btn btn-primary' type='button' value='add to cart' onClick={handleAdd} /> : '' }
//   { path !== 'bookmarks' ? <input className='btn btn-primary' type='button' value='bookmark' onClick={onAddBookmark} /> : '' } */}

export default FeedItem
