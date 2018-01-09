import React from 'react'

const SaleItem = ({item, removeItem}) => {

  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (

      <li>
        <img src={item.thumbnail} alt='' /> ** {item.id} ** {item.itemName} ** {item.category} ** {item.description} ** {item.quantity} ** {item.price} **
        {/* <input type='button' value='view item' onClick={handleDisplay} /> */}
        {/* <input type='button' value='edit item' onClick={handleEdit} /> */}
        <input type='button' value='remove item' onClick={handleRemove} />

       </li>


  )
}
export default SaleItem
