import React from 'react'
import FeedItem from './FeedItem'
import FbLogin from './FbLogin'

const ShoppingFeed = ({items, addToCart, loginHandler}) => {

  if (items.length < 1) {
    window.FB.getLoginStatus( res => {
      loginHandler(res)
    })
  }

  const displayFeedItems = items.map( (item) => {
    return <FeedItem item={item} key={item.id} addToCart={addToCart}/>
  })

return (
  <div>
    { items.length < 1 ?
      <FbLogin loginHandler={loginHandler}/>
    : ''
    }

    <div className='container'>

        ShoppingFeed
        {displayFeedItems}

    </div>
  </div>
)

}
export default ShoppingFeed
