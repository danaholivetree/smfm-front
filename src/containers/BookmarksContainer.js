import { connect } from 'react-redux'
import { removeBookmark, addToCart } from '../actions/AppActions'
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

const addCartItemToDatabase = async (productId, userId, API) => {
  let res = await fetch(`${API}/cart`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors',
       body: JSON.stringify({productId, userId})
  })
  let newCartItem = await res.json()
  return newCartItem
}

const startAddingToCart = (productId, userId) => {
  return function (dispatch, getState, API) {
    return addCartItemToDatabase(productId, userId, API).then(
      newCartItem => dispatch(addToCart(newCartItem)),
    )
  }
}

const mapStateToProps = state => {
  return  {
    bookmarks: state.bookmarks,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(startRemovingBookmark(id)),
    onAddToCart: (productId, userId) => dispatch(startAddingToCart(productId, userId))
  }
}

const BookmarksContainer = connect(mapStateToProps, mapDispatchToProps)(Bookmarks)

export default BookmarksContainer
