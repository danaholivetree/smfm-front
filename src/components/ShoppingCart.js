import React from 'react'
import CartItem from './CartItem'
import { Table } from 'react-bootstrap'

const ShoppingCart = ({cart, displayItem, removeItem, addToCart, updateCartQuantity, currentUser}) => {



  const displayCartItems = cart.map( (item, i) => {
    return (

        <CartItem key={i} item={item} displayItem={displayItem} removeItem={removeItem} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />
    )
  })

return (
  <div className='container mainView' >

    <Table striped bordered condensed >
      <thead>
        <tr>
          <th>image</th>
          <th>#</th>
          <th>Product</th>
          <th>Seller</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Cost</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {displayCartItems}
      </tbody>
    </Table>



  </div>

)

}
export default ShoppingCart
