import React from 'react'
import FeedItem from './FeedItem'
import SearchBar from './SearchBar'
// import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'

const ShoppingFeed = ({filteredItems, onAddToCart, onAddBookmark, currentUser, filterItems, filterCategory}) => {


  const displayFeedItems = filteredItems.map( item => {
    return (
  <Col md={4} key={item.id}>
        <FeedItem item={item}  onAddToCart={ (quant) => onAddToCart(item.id, currentUser.id, quant)} onAddBookmark={ () => onAddBookmark(item.id, currentUser.id)} />
  </Col>
    )
  })

  return (

      <div className='container'>

        <SearchBar filterItems={filterItems} filterCategory={filterCategory} />


          <Grid>
            <Row>


                  {displayFeedItems}





            </Row>
          </Grid>



      </div>
  )
}

export default ShoppingFeed
