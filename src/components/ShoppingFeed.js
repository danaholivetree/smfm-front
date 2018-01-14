import React from 'react'
import FeedItem from './FeedItem'
import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'
import {Row, Col } from 'react-bootstrap'

const ShoppingFeed = ({filteredItems, onAddToCart, onAddBookmark, currentUser, filterItems, filterCategory}) => {


  const displayFeedItems = filteredItems.map( item => {
    return (
      <Col md={4} sm={12} key={item.id}>
        <FeedItem item={item} onAddToCart={ (quant) => onAddToCart(item.id, currentUser.id, quant)} onAddBookmark={ () => onAddBookmark(item.id, currentUser.id)} />
        <NavLink to={`/shoppingfeed/${item.id}`} className='btn btn-primary' type='button'> View Large </NavLink>
      </Col>
    )
  })

  return (

      <div className='container'>

          <SearchBar filterItems={filterItems} filterCategory={filterCategory} />

      <div className='container'>
          <Row>
            {displayFeedItems}
          </Row>
        </div>

      </div>
  )
}

export default ShoppingFeed
