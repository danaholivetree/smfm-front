import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const Bookmark = ({item, removeItem, onAddToCart}) => {

  // const handleGoToItem = (e) => {
  //   e.preventDefault()
  //   displayItem(item.id)
  // }
  const removeBookmark = (e) => {
    e.preventDefault()
    removeItem(item.id)
  }

  return (
    <div className='card bookmark' >
      <div className='card-block'>
        <img src={item.thumbnail} alt='' />
        <h5 className='card-title'>{item.itemName}</h5>
        <div className='card-body'>
          <h6>{item.short}</h6>
          <h6>
            Quantity Available: {item.quantity}
          </h6>
          <h6> Price: ${item.price} </h6>
          <h6>For sale by: <a href={`http://www.facebook.com/${item.sellerFb}`}>{item.sellerName}</a></h6>
        </div>
      </div>
        <ButtonGroup className='bkBtnGrp'>
          <Button className='bookmarkBtn' onClick={removeBookmark}>Remove</Button>
          <Button className='bookmarkBtn' onClick={onAddToCart}>Add To Cart</Button>
        </ButtonGroup>

    </div>



  )

}
export default Bookmark
