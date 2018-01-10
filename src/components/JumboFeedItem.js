import React from 'react'
import FeedItem from './FeedItem'
// import Bookmark from './Bookmark'
// import CartItem from './CartItem'
import { Jumbotron, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
//
const JumboFeedItem = ({items, match, currentUser, onAddToCart, onAddBookmark, removeItem}) => {

  const itemToRender = items.filter( item => {
    return item.id === Number(match.params.number)
  })


return (
  <div>
    <Jumbotron>
      <FeedItem item={itemToRender[0]}
        // { match.path.split('/')[1] !== 'cart' ?
        onAddToCart={ () => onAddToCart(itemToRender[0].id, currentUser.id)}
        // : ''
        // }
        // { match.path.split('/')[1] !== 'bookmarks' ?
        onAddBookmark={ () => onAddBookmark(itemToRender[0].id, currentUser.id)}
        // : ''
        // }
      />
      <Button className='btn btn-primary'>
        <NavLink to={`/${match.path.split('/')[1]}`}>Close</NavLink>
      </Button>
  	</Jumbotron>
  </div>
  )


}

export default JumboFeedItem
