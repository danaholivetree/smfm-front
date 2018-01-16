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
        <div className='card-body'>
          {item.short}
        </div>

        <ButtonGroup className='bkBtnGrp'>
          <Button className='bookmarkBtn' onClick={removeBookmark}>Remove</Button>
          <Button className='bookmarkBtn' onClick={onAddToCart}>Add To Cart</Button>
        </ButtonGroup>
      </div>
      <div className='card-footer' >
        For sale by: <a href={`http://www.facebook.com/${item.sellerFb}`}>{item.sellerName}</a>
      </div>
    </div>





  )

}
export default Bookmark
