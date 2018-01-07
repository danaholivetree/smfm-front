import { connect } from 'react-redux'
import { addToCart, addBookmark } from '../actions/AppActions'
import ShoppingFeed from '../components/ShoppingFeed'

const addCartItemToDatabase = async (productId, userId, API) => {
  console.log('product id, user id ', productId, userId);
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

const addBookmarkToDatabase = async (productId, userId, API) => {
  console.log('addbookmarktodatabase productId, userId ', productId, userId);
  let res = await fetch(`${API}/bookmarks`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors',
       body: JSON.stringify({productId, userId})
  })
  let newBookmark = await res.json()
  console.log('new bookmark came back from db ', newBookmark);
  return newBookmark
}

const startAddingBookmark = (productId, userId) => {
  return function (dispatch, getState, API) {
    return addBookmarkToDatabase(productId, userId, API).then(
      bookmark => dispatch(addBookmark(bookmark)),
    )
  }
}

const mapStateToProps = state => {
  return  {
    feedItems: state.feedItems,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (productId, userId) => dispatch(startAddingToCart(productId, userId)),
    onAddBookmark: (productId, userId) => dispatch(startAddingBookmark(productId, userId))
  }
}

const ShoppingFeedContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingFeed)

export default ShoppingFeedContainer
