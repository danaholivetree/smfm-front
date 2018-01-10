import React from 'react'
import FeedItem from './FeedItem'
// import Bookmark from './Bookmark'
// import CartItem from './CartItem'
import { Jumbotron, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
//
const JumboFeedItem = ({items, match, currentUser, onAddToCart, onAddBookmark, removeItem}) => {

  const itemToRender = items.filter( item => {
    return item.id === Number(match.params.id)
  })

  const selector = []
  for (let i = 1; i <= itemToRender[0].quantity; i++ ) {
    selector.push(<option key={i} value={i}>{i}</option>)
  }



return (
  <div>
    <Jumbotron>
      <FeedItem item={itemToRender[0]}
        // { match.path.split('/')[1] !== 'cart' ?
        onAddToCart={ (quantity) => onAddToCart(itemToRender[0].id, currentUser.id, quantity)}
        // : ''
        // }
        // { match.path.split('/')[1] !== 'bookmarks' ?
        onAddBookmark={ () => onAddBookmark(itemToRender[0].id, currentUser.id)}
        // : ''
        // }
        path={match.path.split('/')[1]}
        selector={selector}
      />

        <NavLink to={`/${match.path.split('/')[1]}`}><button type='button' className='btn btn-primary'>Close</button></NavLink>

  	</Jumbotron>
  </div>
  )


}

export default JumboFeedItem
