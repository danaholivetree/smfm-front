import React from 'react'
import FeedItem from './FeedItem'

const ShoppingFeed = ({items, addToCart}) => {

  const displayFeedItems = items.map( (item) => {
    return <FeedItem item={item} key={item.id} addToCart={addToCart}/>
  })

return (
  <ul>
    ShoppingFeed
    {displayFeedItems}
  </ul>
)

}
export default ShoppingFeed
