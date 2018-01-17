import React from 'react'
import CartItem from './CartItem'
import { Table } from 'react-bootstrap'

const ShoppingCart = ({cart, displayItem, removeItem, addToCart, updateCartQuantity, currentUser}) => {



  const displayCartItems = cart.map( (item, i) => {
    return (

        <CartItem key={i} item={item} displayItem={displayItem} removeItem={removeItem} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />
    )
  })

  const subtotal = cart.reduce( (acc, curr) => {
    // console.log('curr.price ', curr.price, ' curr.cartQuantity ', curr.cartQuantity);
    // console.log('curr.price ', typeof curr.price, ' curr.cartQuantity ', typeof curr.cartQuantity);
    console.log('acc ', acc);
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
          <td colSpan={5} style={{textAlign:'right'}}>Subtotal:</td>
          <td className='numbers'><b>${subtotal.toFixed(2)}</b></td>
        </tr>
      </tbody>

    </Table>



  </div>

)

}
export default ShoppingCart
