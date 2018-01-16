import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
// import { Row, Col, Button, ButtonToolbar} from 'react-bootstrap'

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

  const serializeCost = (quant, price) => {
    return quant === 1 ? price : (Number(price) * quant).toFixed(2)
  }

  return (

    <tr>
      <td><img src={item.thumbnail} alt='' /></td>
      <td>{item.id}</td>
      <td>{item.itemName}</td>
      <td>{item.sellerName}</td>
      <td>{item.price}</td>
      <td>{item.quantity > 1 ?
          <select onChange={handleQuantityChange} name='quantity' defaultValue={item.cartQuantity}>
            {selector}
          </select>
        : item.quantityInCart}</td>
      {/* <td>${item.cartQuantity === 1 ? item.price : Number(item.price) * item.cartQuantity}</td> */}
      <td>{serializeCost(item.cartQuantity, item.price)}</td>
      <td><Link to={`/shoppingcart/${item.productId}`} className='btn btn-primary' type='button'> Details </Link></td>
      <td><Button onClick={handleRemove} >Remove</Button></td>
    </tr>

  )
}
export default CartItem
