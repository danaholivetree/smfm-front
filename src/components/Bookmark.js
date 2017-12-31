import React from 'react'

const Bookmark = ({item, displayItem, removeItem}) => {

  const handleGoToItem = (e) => {
    e.preventDefault()
    displayItem(e.target.value)
  }
  const removeBookmark = (e) => {
    e.preventDefault()
    removeItem(e.target.value, 'bookmarks')
  }

  return (
    <li onClick={handleGoToItem} data-value={item.id}>
      {item.item_name} ** {item.category} ** {item.seller_id} ** {item.description} ** {item.quantity} ** {item.price}
      <input type='button' className='btn' value='remove' onClick={removeBookmark} />
     </li>

  )

}
export default Bookmark
