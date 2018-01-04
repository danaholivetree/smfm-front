import React from 'react'

const SaleItem = ({item, displayItem, removeItem}) => {

  const handleDisplay = (e) => {
    e.preventDefault()
    displayItem(e.target.dataset.id)
  }

  return (

      <li>
        {item.id} ** {item.itemName} ** {item.category} ** {item.sellerName} ** {item.description} ** {item.quantity} ** {item.price} ** {item.image_url} ** {item.sold} **
        <input type='button' value='view item' data-id='item.id' onClick={handleDisplay} />
        <input type='button' value='edit item' data-id='item.id' onClick={handleDisplay} />
        <input type='button' value='remove item' data-id='item.id' onClick={removeItem} />

       </li>


  )
}
export default SaleItem
