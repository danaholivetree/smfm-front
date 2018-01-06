import React from 'react'
import Bookmark from './Bookmark'


const Bookmarks = ({removeItem, bookmarks, displayItem}) => {

  const displayBookmarks = bookmarks.map( item => {
    return <Bookmark item={item} key={item.id} removeItem={removeItem} displayItem={displayItem}/>
  })

  return (
    <ul>
      My Bookmarks
      {displayBookmarks}
    </ul>
  )
}

export default Bookmarks
