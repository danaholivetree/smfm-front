import React from 'react'
import FeedItem from './FeedItem'
import SearchBar from './SearchBar'
// import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'

const ShoppingFeed = ({filteredItems, onAddToCart, onAddBookmark, currentUser, filterItems, filterCategory}) => {


  const displayFeedItems = filteredItems.map( item => {
    return (

        <FeedItem item={item} key={item.id} onAddToCart={ (quant) => onAddToCart(item.id, currentUser.id, quant)} onAddBookmark={ () => onAddBookmark(item.id, currentUser.id)} />

    )
  })

  return (

      <div className='container'>

        <SearchBar filterItems={filterItems} filterCategory={filterCategory} />

        <div className='container'>
          <Grid>
            <Row>
              {displayFeedItems}
            </Row>
          </Grid>

        </div>

      </div>
  )
}

export default ShoppingFeed
