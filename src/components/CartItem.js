import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
// import { Row, Col, Button, ButtonToolbar} from 'react-bootstrap'

const CartItem = ({item, addToCart, updateCartQuantity, removeItem}) => {

  console.log('cartItem ', item);
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
      <td className='td-img' style={{width: '1px'}}><img src={item.thumbnail} alt='' /></td>
      <td className='words'>{item.itemName}</td>
      <td className='words'>{item.sellerName}</td>
      <td className='numbers'>${item.price}</td>
      <td className='numbers'>{item.quantity > 1 ?
          <select onChange={handleQuantityChange} name='quantity' defaultValue={item.cartQuantity}>
            {selector}
          </select>
        : item.cartQuantity}</td>
      {/* <td>${item.cartQuantity === 1 ? item.price : Number(item.price) * item.cartQuantity}</td> */}
      <td className='numbers'>${serializeCost(item.cartQuantity, item.price)}</td>
      <td className='td-btn'><Link to={`/shoppingcart/${item.productId}`}><Button> Details</Button> </Link></td>
      <td className='td-btn'><Button onClick={handleRemove} >Remove</Button></td>
    </tr>

  )
}
export default CartItem
