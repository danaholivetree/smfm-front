import React from 'react'
import { Button } from 'react-bootstrap'

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
      <Button onClick={removeBookmark}>Remove</Button>
      <Button onClick={onAddToCart}>Add To Cart</Button>
    </div>



  )

}
export default Bookmark
