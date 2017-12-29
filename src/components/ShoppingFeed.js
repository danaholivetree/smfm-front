import React from 'react'
import FeedItem from './FeedItem'

const ShoppingFeed = ({items}) => {

  const displayFeedItems = items.map( (item, i) => {
    return <FeedItem item={item} key={i}/>
  })



return (
  <ul>
    ShoppingFeed
    {displayFeedItems}
  </ul>
)

}
export default ShoppingFeed
