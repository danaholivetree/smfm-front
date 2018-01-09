import React from 'react'

const Bookmark = ({item, removeItem, onAddToCart}) => {

  // const handleGoToItem = (e) => {
  //   e.preventDefault()
  //   displayItem(item.id)
  // }
  const removeBookmark = (e) => {
    e.preventDefault()
    console.log('item.id from remove bookmark click ', item.id);
    removeItem(item.id)
  }

  return (
    <li>
      <img src={item.thumbnail} alt='' /> ** {item.itemName} ** {item.category} ** {item.sellerId} ** {item.description} ** {item.quantity} ** {item.price}
      <input className='btn btn-primary' type='button' value='remove' onClick={removeBookmark} />
      <input className='btn btn-primary' type='button' value='add to cart' onClick={onAddToCart} />
    </li>

  )

}
export default Bookmark
