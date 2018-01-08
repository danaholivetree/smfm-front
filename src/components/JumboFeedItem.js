import React from 'react'
import FeedItem from './FeedItem'
import { Jumbotron, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
//
const JumboFeedItem = ({items, match, currentUser, onAddToCart, onAddBookmark}) => {

  const itemToRender = items.filter( item => {
    return item.id === Number(match.params.number)
  })

return (
  <div>
    <Jumbotron>
  		<FeedItem item={itemToRender[0]} onAddToCart={ () => onAddToCart(itemToRender.id, currentUser.id)} onAddBookmark={ () => onAddBookmark(itemToRender.id, currentUser.id)}/>
      <Button className='btn btn-primary'>
        {match.path.split('/')[1] === 'shoppingfeed' ?
        <NavLink to='/shoppingfeed'>Close</NavLink>
        : match.path.split('/')[1] ==='bookmarks' ?
        <NavLink to='/bookmarks'>Close</NavLink>
        : ''
      }
      </Button>
  	</Jumbotron>
  </div>
  )


}

export default JumboFeedItem
