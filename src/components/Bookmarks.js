import React from 'react'
import Bookmark from './Bookmark'
import { NavLink } from 'react-router-dom'


const Bookmarks = ({removeItem, bookmarks, onAddToCart, currentUser}) => {

  const displayBookmarks = bookmarks.map( (item, i) => {
    return (
      <div key={item.id}>
        <Bookmark item={item} key={i} removeItem={removeItem} onAddToCart={ () => onAddToCart(item.productId, currentUser.id)} />
        <NavLink to={`/bookmarks/${item.productId}`} className='btn btn-primary' type='button'> View Large </NavLink>
      </div>
    )
  })

  return (
    <ul>
      My Bookmarks
      {displayBookmarks}
    </ul>
  )
}

export default Bookmarks
