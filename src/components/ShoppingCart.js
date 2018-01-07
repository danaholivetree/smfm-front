import React from 'react'
import CartItem from './CartItem'

const ShoppingCart = ({items= [], displayItem, removeItem, addToCart}) => {

   const displayCartItems = items.map( item => {
     return <CartItem key={item.id} item={item} displayItem={displayItem} removeItem={removeItem} addToCart={addToCart} />
   })

return (
  <div className='container'>
    My Shopping Cart
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Seller</th>
          <th></th>
          <th>Quantity</th>
          <th></th>
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
