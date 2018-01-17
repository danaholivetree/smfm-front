import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

    <div className='card' >

      <div className='card-block'>
        <Link to={`/shoppingfeed/${item.productId}`} >
          <img src={item.image} height='250px' alt='card image' />
        </Link>
        <h3 className='card-title'>{item.itemName}</h3>

        For sale by your friend <a href={`http://www.facebook.com/${item.sellerFb}`} target="_blank">{item.sellerName}</a>
        {/* <div className='card-body'>
          {item.short}
        </div> */}

        <Button className='bookmark-btn' onClick={removeBookmark}>Remove</Button>
        <Button className='bookmark-btn' onClick={onAddToCart}>Add To Cart</Button>
      </div>
    </div>





  )

}
export default Bookmark
