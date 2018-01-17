import React from 'react'
import CartItem from './CartItem'
import { Table, Button } from 'react-bootstrap'

const ShoppingCart = ({cart, displayItem, removeItem, addToCart, updateCartQuantity, currentUser}) => {



  const displayCartItems = cart.map( (item, i) => {
    return (

        <CartItem key={i} item={item} displayItem={displayItem} removeItem={removeItem} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />
    )
  })

  const subtotal = cart.reduce( (acc, curr) => {
    return acc += Number(curr.price) * curr.cartQuantity
  }, 0)

return (
  <div className='container mainView' >

    <Table striped bordered condensed >
      <thead>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Seller</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Cost</th>

        </tr>
      </thead>
      <tbody>
        {displayCartItems}
        <tr>
          <td colSpan={5} className='subtotal'>Subtotal:</td>
          <td className='numbers'><b>${subtotal.toFixed(2)}</b></td>
          <td colSpan={2} className='checkout td-btn'><Button>Checkout</Button></td>
        </tr>
      </tbody>

    </Table>



  </div>

)

}
export default ShoppingCart
