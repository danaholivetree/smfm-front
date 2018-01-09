import React from 'react'
import CartItem from './CartItem'

const ShoppingCart = ({cart, displayItem, removeItem, addToCart, updateCartQuantity}) => {

  const displayCartItems = cart.map( (item, i) => {
    return (
        <CartItem key={i} item={item} displayItem={displayItem} removeItem={removeItem} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />
    )
  })

return (
  <div className='container'>
    My Shopping Cart
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Seller</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Totals</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {displayCartItems}
      </tbody>
    </table>
  </div>

)

}
export default ShoppingCart
