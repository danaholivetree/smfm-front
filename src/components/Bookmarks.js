import React from 'react'
import Bookmark from './Bookmark'


const Bookmarks = ({removeItem, bookmarks}) => {

  const displayBookmarks = bookmarks.map( (item, i) => {
    return <Bookmark item={item} key={i} removeItem={removeItem} />
  })

  return (
    <ul>
      My Bookmarks
      {displayBookmarks}
    </ul>
  )
}

export default Bookmarks
