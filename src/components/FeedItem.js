import React from 'react'
import { Col,  Clearfix} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const FeedItem = ({item, selector, onAddToCart, onAddBookmark, path}) => (


    <div className='card' >

      <div className='card-block'>
        <NavLink to={`/shoppingfeed/${item.id}`} >
          <img style={{maxWidth:'100%'}} src={item.image} height='250px' alt='card image' />
        </NavLink>
        <h3 className='card-title'>{item.itemName}</h3>
        <div className='card-body'>
          {item.short}
        </div>


      </div>
      <div className='card-footer' >
        For sale by: <a href={`http://www.facebook.com/${item.sellerFb}`} target="_blank">{item.sellerName}</a>
      </div>
    </div>






  )

export default FeedItem
