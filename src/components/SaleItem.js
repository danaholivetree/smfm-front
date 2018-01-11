import React from 'react'
import { NavLink } from 'react-router-dom'

const SaleItem = ({item, removeItem}) => {

  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (

      <li>
        <img src={item.thumbnail} alt='' />
        <h4> {item.itemName} </h4>

        <h1>{item.category}</h1>
        <p> Quantity Available: {item.quantity}</p>
        <p> Price: ** {item.price} ** </p>
        <p>{item.description} </p>
        <input type='button' className='btn btn-primary' value='remove item' onClick={handleRemove} />
        <NavLink className='btn btn-primary' type='button' to={`sell/${item.id}`}>Edit</NavLink>
      </li>


  )
}
export default SaleItem
