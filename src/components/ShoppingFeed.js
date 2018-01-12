import React from 'react'
import FeedItem from './FeedItem'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'

const ShoppingFeed = ({filteredItems, onAddToCart, onAddBookmark, currentUser, filterItems, filterCategory}) => {


  const displayFeedItems = filteredItems.map( item => {
    return (
      <div key={item.id}>
        <FeedItem item={item} onAddToCart={ (quant) => onAddToCart(item.id, currentUser.id, quant)} onAddBookmark={ () => onAddBookmark(item.id, currentUser.id)} />
        <NavLink to={`/shoppingfeed/${item.id}`} className='btn btn-primary' type='button'> View Large </NavLink>
      </div>
    )
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
