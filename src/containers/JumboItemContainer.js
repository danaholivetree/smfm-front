import { connect } from 'react-redux'
import { addToCart, addBookmark } from '../actions/AppActions'
import JumboFeedItem from '../components/JumboFeedItem'


const addCartItemToDatabase = async (productId, userId, cartQuantity, API) => {
  let res = await fetch(`${API}/cart`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors',
       body: JSON.stringify({productId, userId, cartQuantity})
  })
  let newCartItem = await res.json()
  return newCartItem
}

const startAddingToCart = (productId, userId, cartQuantity) => {
  console.log('selected cart quantity ', cartQuantity);
  return function (dispatch, getState, API) {
    return addCartItemToDatabase(productId, userId, cartQuantity, API).then(
      newCartItem => dispatch(addToCart(newCartItem)),
    )
  }
}

const addBookmarkToDatabase = async (productId, userId, API) => {
  let res = await fetch(`${API}/bookmarks`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors',
       body: JSON.stringify({productId, userId})
  })
  let newBookmark = await res.json()
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
    items: state.feedItems,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (productId, userId, cartQuantity = 1) => dispatch(startAddingToCart(productId, userId, cartQuantity)),
    onAddBookmark: (productId, userId) => dispatch(startAddingBookmark(productId, userId))
  }
}

const JumboItemContainer = connect(mapStateToProps, mapDispatchToProps)(JumboFeedItem)

export default JumboItemContainer
