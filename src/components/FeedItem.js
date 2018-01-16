import React from 'react'
import { Col,  Clearfix} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const FeedItem = ({item, selector, onAddToCart, onAddBookmark, path}) => (

  <div className='card-deck'>
    <div className='card' style={{height:'500px', overflow:'hidden', textAlign: 'center', border: '1px solid grey', padding: '5px', marginBottom: '5px'}}>
      <NavLink to={`/shoppingfeed/${item.id}`} >
        <img src={item.image} height='250px' alt='card image' />
      </NavLink>
      <div className='card-block'>
        <div className='card-body' >
          <div className='card-title'>{item.itemName}</div>
          {item.description}
        </div>
        <div className='card-footer' >
          <small className="text-muted">For sale by: <a href={`http://www.facebook.com/${item.sellerFb}`}>{item.sellerName}</a></small>
        </div>
      </div>
    </div>
  </div>





  )

export default FeedItem
