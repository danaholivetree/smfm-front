import { connect } from 'react-redux'
import { removeBookmark } from '../actions/AppActions'
import Bookmarks from '../components/Bookmarks'


const removeBookmarkFromDatabase = async (id, API) => {
  let res = await fetch(`${API}/bookmarks/${id}`, {
       method: 'DELETE',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors'
  })
  let removedItem = await res.json()
  return removedItem
}

const startRemovingBookmark = (id) => {
  return function (dispatch, getState, API) {
    return removeBookmarkFromDatabase(id, API).then(
      removed => {
        if (removed.id === id) {
          dispatch(removeBookmark(id))
        }
        else {
          console.log('remove failed ', removed);
        }
    })
  }
}

const mapStateToProps = state => {
  return  {
    bookmarks: state.bookmarks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(startRemovingBookmark(id))
  }
}

const BookmarksContainer = connect(mapStateToProps, mapDispatchToProps)(Bookmarks)

export default BookmarksContainer
