import React from 'react'
import Bookmark from './Bookmark'

const Bookmarks = ({items, removeItem, displayItem}) => {

  const displayBookmarks = items.map( (item, i) => {
    return <Bookmark item={item} key={i} removeItem={removeItem} displayItem={displayItem}/>
  })



return (
  <ul>
    Bookmarks
    {displayBookmarks}
  </ul>
)

}
export default Bookmarks
