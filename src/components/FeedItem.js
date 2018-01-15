import React from 'react'
import { Col,  Clearfix} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const FeedItem = ({item, selector, onAddToCart, onAddBookmark, path}) => (


    <div >
      <NavLink to={`/shoppingfeed/${item.id}`} >
        <img src={item.image} width='252px' alt='card image' />
      </NavLink>
      <div >
        <h3 >{item.itemName}</h3>
        <p >Short description</p>
      </div>
      <div >
        <small className="text-muted">For sale by: <a href={`http://www.facebook.com/${item.sellerFb}`}>{item.sellerName}</a></small>
      </div>
    </div>




  )

export default FeedItem
