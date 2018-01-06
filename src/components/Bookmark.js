import React from 'react'

const Bookmark = ({item, displayItem, removeItem}) => {

  const handleGoToItem = (e) => {
    e.preventDefault()
    displayItem(item.id)
  }
  const removeBookmark = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (
    <li onClick={handleGoToItem} data-value={item.id}>
      {item.itemName} ** {item.category} ** {item.sellerId} ** {item.description} ** {item.quantity} ** {item.price}
      <input type='button' className='btn' value='remove' onClick={removeBookmark} />
     </li>

  )

}
export default Bookmark
