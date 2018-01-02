import React from 'react'

const CartItem = ({item, addToCart, subtractFromCart, displayItem, removeItem}) => {

  const handleDisplay = (e) => {
    e.preventDefault()
    displayItem(item)
  }
  const handleUpdate = (e) => {
    e.preventDefault()
    displayItem(item)
  }
  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item, 'cart')
  }

  const addQuantity = (e) => {
    e.preventDefault()
    addToCart(item)
  }
  const subtractQuantity = (e) => {
    e.preventDefault()
    subtractFromCart(item)
  }
  var cost = item.price * item.quantityInCart

  return (

      <tr>
        <td>{item.itemName}</td>
        <td>{item.sellerName}</td>
        <td>
          {item.quantityInCart > 1 ?
            <button type='button' onClick={subtractQuantity}>-</button> :'' }
        </td>
        <td>{item.quantityInCart}</td>
        <td>{item.quantityInCart < item.quantity ?
          <button type='button'  onClick={addQuantity}>+</button> :'' }
        </td>
        <td>${item.price}</td>
        <td>{cost}</td>
        <td><input type='button' value='view item' data-id='item.id' onClick={handleDisplay} /></td>
        <td><input type='button' value='update item' data-id='item.id' onClick={handleUpdate} /></td>
        <td><input type='button' value='remove item' data-id='item.id' onClick={handleRemove} /></td>
      </tr>


  )
}
export default CartItem
