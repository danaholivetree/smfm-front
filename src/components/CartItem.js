import React from 'react'
import { NavLink } from 'react-router-dom'
import { Image } from 'cloudinary-react'

const CartItem = ({item, addToCart, updateCartQuantity, removeItem}) => {

  // const handleDisplay = (e) => {
  //   e.preventDefault()
  //   displayItem(item)
  // }
  // const handleUpdate = (e) => {
  //   e.preventDefault()
  //   // updateItem(item)
  // }
  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  // const addQuantity = (e) => {
  //   e.preventDefault()
  //   addToCart(item)
  // }
  // const subtractQuantity = (e) => {
  //   e.preventDefault()
  //   subtractFromCart(item)
  // }
  const handleQuantityChange = (e) => {
    e.preventDefault()
    console.log('new quantity ', e.target.value);
    updateCartQuantity(item.id, e.target.value)
  }

  const selector = []
  for (let i = 1; i <= item.quantity; i++ ) {
    selector.push(<option key={i} value={i}>{i}</option>)
  }

console.log('item.image ', item.image);
  return (
      <tr>
        <td><img src={item.image} alt='' /></td>
        <td>{item.itemName}</td>
        <td>{item.sellerName}</td>

        <td>{item.quantity > 1 ?
          <select onChange={handleQuantityChange} name='quantity' defaultValue={item.cartQuantity}>
            {selector}
          </select>
        : item.quantityInCart}</td>

        <td>${item.price}</td>
        <td>${item.cartQuantity === 1 ? item.price : Number(item.price) * item.cartQuantity}</td>
        <td>  <NavLink to={`/shoppingcart/${item.productId}`} className='btn btn-primary' type='button'> View Large </NavLink> </td>
        {/* <td><input className='btn btn-primary' type='button' value='update item' data-id='item.id' onClick={handleUpdate} /></td> */}
        <td><input className='btn btn-primary' type='button' value='remove item' data-id='item.id' onClick={handleRemove} /></td>
      </tr>
  )
}
export default CartItem
