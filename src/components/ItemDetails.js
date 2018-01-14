import React from 'react'
import { Row, Col } from 'react-bootstrap'
const ItemDetails = ({item, selector, onAddToCart, onAddBookmark, path}) => {

  var quantity = 1

  const handleAdd = (e) => {
    onAddToCart(quantity)
  }

  const changeQuantity = (e) => {
    quantity = e.target.value
  }

  return (
    <div className='container'>
      <Row>
        <Col md={6} sm={12}>
          <img className="card-img-top" src={item.image} width='400px' alt='' />
        </Col>
        <Col md={6} sm={12}>
          <h4> {item.itemName} </h4>
          <h2> Category: {item.category} </h2>
          <h1>For sale by: {item.sellerName}</h1>
          <p> Quantity Available: {item.quantity} </p>
          <p> ${item.price} </p>
        </Col>
      </Row>
      <Row>
        <p>{item.description}</p>
      </Row>
    </div>
  )
}


//     {selector && item.quantity > 1 ?
//      <select name='quantitySelector' defaultValue={item.cartQuantity} onChange={changeQuantity}>
//      {selector}
// //     </select>
//     : '' }
//   { path !== 'shoppingcart' ? <input className='btn btn-primary' type='button' value='add to cart' onClick={handleAdd} /> : '' }
//   { path !== 'bookmarks' ? <input className='btn btn-primary' type='button' value='bookmark' onClick={onAddBookmark} /> : '' } */}

export default ItemDetails
