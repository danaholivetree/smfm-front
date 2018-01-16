import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button , ButtonGroup} from 'react-bootstrap'
const SaleItem = ({item, removeItem}) => {

  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (


    <div className='card ' >
      <div className='card-block'>
        <img src={item.image} alt='' />
        <h3 className='card-title'>{item.itemName}</h3>
        <div className='card-body'>
          <h6>
            Quantity Available: {item.quantity}
          </h6>
          <h6> Price: ${item.price} </h6>
        </div>
      </div>
      <ButtonGroup className='bkBtnGrp'>
        <Button style={{bottom: '38px', position: 'relative'}} onClick={handleRemove} >Remove</Button>
        <NavLink to={`sell/${item.id}`}><Button style={{width: '78px', bottom: '38px', position: 'relative'}}>Edit</Button></NavLink>
      </ButtonGroup>

    </div>







  )
}
export default SaleItem
