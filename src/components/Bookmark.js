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

    <div>
      <img src={item.thumbnail} alt='' />
      <h4> {item.itemName} </h4>
      <p> Quantity Available: {item.quantity}</p>
      <p> Price: ${item.price} </p>
      <input className='btn btn-primary' type='button' value='remove' onClick={removeBookmark} />
      <input className='btn btn-primary' type='button' value='add to cart' onClick={onAddToCart} />
    </div>



  )

}
export default Bookmark
