import React from 'react'
import FeedItem from './FeedItem'

const JumboFeedItem = ({item, onAddToCart, onAddBookmark}) => (
  <div>
    <Jumbotron>
  		<CartItem item={item} onAddToCart={onAddToCart} onAddBookmark={onAddBookmark}/>
  	</Jumbotron>
  </div>


  )

export default JumboFeedItem
