import React from 'react'

const Bookmark = ({item, removeItem}) => {

  // const handleGoToItem = (e) => {
  //   e.preventDefault()
  //   displayItem(item.id)
  // }
  const removeBookmark = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (
    <li>
      {item.itemName} ** {item.category} ** {item.sellerId} ** {item.description} ** {item.quantity} ** {item.price}
      <input className='btn btn-primary' type='button' value='remove' onClick={removeBookmark} />
    </li>

  )

}
export default Bookmark
