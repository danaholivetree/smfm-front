import React from 'react'
import CartItem from './CartItem'

const ShoppingCart = ({cart, displayItem, removeItem, addToCart, updateCartQuantity, currentUser}) => {

  const displayCartItems = cart.map( (item, i) => {
    return (
        <CartItem key={i} item={item} displayItem={displayItem} removeItem={removeItem} addToCart={addToCart} updateCartQuantity={updateCartQuantity} />
    )
  })

return (
  <div className='container'>


        {displayCartItems}


  </div>

)

}
export default ShoppingCart
