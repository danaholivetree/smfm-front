import React from 'react'
import Bookmark from './Bookmark'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'


const Bookmarks = ({removeItem, bookmarks, onAddToCart, currentUser}) => {

  const displayBookmarks = bookmarks.map( (item, i) => {
    return (
      <Col md={2} xs={4} key={item.id}>
        <Bookmark item={item} key={i} removeItem={removeItem} onAddToCart={ () => onAddToCart(item.productId, currentUser.id)} />
        {/* <NavLink to={`/bookmarks/${item.productId}`} className='btn btn-primary' type='button'> View Large </NavLink> */}
      </Col>
    )
  })

  return (
    <div className='container' style={{paddingTop: '15px'}}>
      <Grid>
        <Row>
          {displayBookmarks}
        </Row>
      </Grid>
    </div>
  )
}

export default Bookmarks
