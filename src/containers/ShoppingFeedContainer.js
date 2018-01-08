import { connect } from 'react-redux'
import { addToCart, addBookmark, filterItemsBySearch, filterItemsByCategory } from '../actions/AppActions'
import ShoppingFeed from '../components/ShoppingFeed'


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
    feedItems: state.feedItems,
    filteredItems: state.filteredItems,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (productId, userId) => dispatch(startAddingToCart(productId, userId)),
    onAddBookmark: (productId, userId) => dispatch(startAddingBookmark(productId, userId)),
    filterItems: (filt) => dispatch(filterItemsBySearch(filt)),
    filterCategory: (filt, checked) => dispatch(filterItemsByCategory(filt, checked))
  }
}

const ShoppingFeedContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingFeed)

export default ShoppingFeedContainer
