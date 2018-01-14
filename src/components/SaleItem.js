import React from 'react'
import { NavLink } from 'react-router-dom'

const SaleItem = ({item, removeItem}) => {

  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (

      <div >
        <img src={item.thumbnail} alt='' />
        <h4> {item.itemName} </h4>

        <h6>{item.category}</h6>
        <p> Quantity Available: {item.quantity}</p>
        <p> Price: ${item.price} </p>
        <input type='button' className='btn btn-primary' value='Delete' onClick={handleRemove} />
        <NavLink className='btn btn-primary' type='button' to={`sell/${item.id}`}>Edit</NavLink>
      </div>




  )
}
export default SaleItem
