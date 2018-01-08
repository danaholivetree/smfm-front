import React from 'react'
import FeedItem from './FeedItem'
import SearchBar from './SearchBar'

const ShoppingFeed = ({filteredItems, onAddToCart, onAddBookmark, currentUser, filterItems, filterCategory}) => {

  const displayFeedItems = filteredItems.map( item => {
    return <FeedItem key={item.id} item={item} onAddToCart={ () => onAddToCart(item.id, currentUser.id)} onAddBookmark={ () => onAddBookmark(item.id, currentUser.id)} />
  })

  return (
      <div className='container'>
          ShoppingFeed
          <SearchBar filterItems={filterItems} filterCategory={filterCategory} />
          {displayFeedItems}
      </div>
  )
}

export default ShoppingFeed
