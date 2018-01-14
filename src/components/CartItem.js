import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, ButtonToolbar} from 'react-bootstrap'

const CartItem = ({item, addToCart, updateCartQuantity, removeItem}) => {

  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  const handleQuantityChange = (e) => {
    e.preventDefault()
    console.log('new quantity ', e.target.value);
    updateCartQuantity(item.id, e.target.value)
  }

  const selector = []
  for (let i = 1; i <= item.quantity; i++ ) {
    selector.push(<option key={i} value={i}>{i}</option>)
  }

  return (
<div className="container">

  <img src={item.thumbnail} alt='' />
  {item.itemName}
  {item.sellerName}

  {item.quantity > 1 ?
    <select onChange={handleQuantityChange} name='quantity' defaultValue={item.cartQuantity}>
      {selector}
    </select>
  : item.quantityInCart}

  ${item.price}
  ${item.cartQuantity === 1 ? item.price : Number(item.price) * item.cartQuantity}
    <Link to={`/shoppingcart/${item.productId}`} className='btn btn-primary' type='button'> Item Details </Link>
  {/* <input className='btn btn-primary' type='button' value='update item' data-id='item.id' onClick={handleUpdate} /> */}
  <input className='btn btn-primary' type='button' value='remove item' data-id='item.id' onClick={handleRemove} />
</div>


  )
}
export default CartItem
