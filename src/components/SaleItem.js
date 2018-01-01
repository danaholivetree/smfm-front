import React from 'react'

const SaleItem = ({item, displayItem}) => {
  const handleDisplay = (e) => {
    e.preventDefault()
    displayItem(e.target.dataset.id)
  }

  return (

      <li>
        {item.item_name} ** {item.category} ** {item.seller_id} ** {item.description} ** {item.quantity} ** {item.price}
        <input type='button' value='view item' data-id='item.id' onClick='handleDisplay' />
       </li>


  )
}
export default SaleItem
