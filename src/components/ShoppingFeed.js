import React from 'react'
import FeedItem from './FeedItem'

const ShoppingFeed = ({items}) => {

  const displayFeedItems = items.map( (item) => {
    return <FeedItem item={item} key={item.id}/>
  })

return (
  <ul>
    ShoppingFeed
    {displayFeedItems}
  </ul>
)

}
export default ShoppingFeed
