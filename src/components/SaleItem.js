import React from 'react'

const SaleItem = ({item, removeItem}) => {

// props were item, displayItem, removeItem
// const handleDisplay = (e) => { e.preventDefault() displayItem(item.id) }
  // const handleEdit = (e) => {
  //   e.preventDefault()
  //   editItem(item.id)
  // }
  const handleRemove = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (

      <li>
        {item.id} ** {item.itemName} ** {item.category} ** {item.sellerName} ** {item.description} ** {item.quantity} ** {item.price} ** {item.image_url} ** {item.sold} **
        {/* <input type='button' value='view item' onClick={handleDisplay} /> */}
        {/* <input type='button' value='edit item' onClick={handleEdit} /> */}
        <input type='button' value='remove item' onClick={handleRemove} />

       </li>


  )
}
export default SaleItem
