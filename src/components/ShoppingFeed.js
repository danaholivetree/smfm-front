import React from 'react'
import FeedItem from './FeedItem'


const ShoppingFeed = ({items, addToCart, loginHandler}) => {


  const displayFeedItems = items.map( (item) => {
    return <FeedItem item={item} key={item.id} addToCart={addToCart}/>
  })

return (

    <div className='container'>

        ShoppingFeed
        {displayFeedItems}

    </div>

)

}
export default ShoppingFeed
