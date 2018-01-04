import React from 'react'
import Bookmark from './Bookmark'
import {bindActionCreators} from 'redux'


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
//
// const mapStateToProps = (state) => ({
//   bookmarks: state.bookmarks,
// })
//
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({ getBookmarks, removeBookmark, addBookmark }, dispatch)
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);
export default Bookmarks
