import React from 'react'
import Bookmark from './Bookmark'


const Bookmarks = ({removeItem, bookmarks, onAddToCart, currentUser}) => {

  const displayBookmarks = bookmarks.map( (item, i) => {
    console.log('item.productId in Bookmarks ', item.productId);
    return <Bookmark item={item} key={i} removeItem={removeItem} onAddToCart={ () => onAddToCart(item.productId, currentUser.id)} />
  })

  return (
    <ul>
      My Bookmarks
      {displayBookmarks}
    </ul>
  )
}

export default Bookmarks
