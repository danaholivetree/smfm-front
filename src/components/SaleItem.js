import React from 'react'
import { Link } from 'react-router-dom'
import {Button , ButtonGroup} from 'react-bootstrap'
const SaleItem = ({item, removeItem}) => {

  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (


    <div className='card' >
      <div className='card-block'>
        <img  src={item.image} style={{maxWidth: '100%', maxHeight:'200px'}} alt='' />
        <h4 className='card-title'>{item.itemName}</h4>
        <div className='card-body'>
          <h6> Quantity Available: {item.quantity}</h6>
          <h6> Price: ${item.price} </h6>

        </div>


      </div>
      <div className='btn-footer'>
        <Button className='sale-btn' onClick={handleRemove}>Remove</Button>
        <Link to={`sell/${item.id}`}><Button className='sale-btn'>Edit</Button></Link>
      </div>
    </div>







  )
}
export default SaleItem
