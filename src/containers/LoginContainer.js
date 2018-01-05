import React from 'react'
import { connect } from 'react-redux'
import {logIn, gotFriends, getAllFeedItems, getAllForSaleItems, getBookmarks, getCart} from '../actions/AppActions';
import Login from '../components/Login'

const API = process.env.REACT_APP_API_URL

const LoginContainer = ({logIn, gotFriends, getAllFeedItems, getAllForSaleItems, getBookmarks, getCart}) => {

  const loadData = (response) => {
    window.FB.api('/me', currentUser => {
      dbLogin(currentUser)
      getAllFriends(currentUser.id)
      getFeedItems()
    })
  }

  const dbLogin = async(currUser) => {
    let res = await fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(currUser)
    })
    let userAndItemsForSale = await res.json()
    const {products, id} = userAndItemsForSale
    logIn(id, currUser.name)

    let editedProducts = products.map(product => {
      return {...product, price: Number(product.price)}
    }) || []
    console.log('edited products ', editedProducts);
    getAllForSaleItems(editedProducts)
    // getBookmarks(bookmarks)
    // getCart(cart)
  }

  const getFeedItems = async() => {
    let res = await fetch(`${API}/products`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors'
    })
    let feedItems = await res.json()
    let editedFeedItems = feedItems.map (item => {
      return {...item, price: Number(item.price)}
    })
    getAllFeedItems(editedFeedItems)
  }

  const getAllFriends = async(userID) => {
    await window.FB.api(`/${userID}/friends`, 'GET', {}, function(friends) {
      gotFriends(friends.data)
    })
  }

  return (
    <Login loadData={loadData} />
  )
}


// const mapStateToProps =  state => {
//   return  {
//     loggedIn: state.loggedIn,
//     friends: state.friends,
//     currentUser: state.currentUser,
//     itemsForSale: state.itemsForSale,
//     feedItems: state.feedItems,
//     bookmarks: state.bookmarks,
//     cart: state.cart
//
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    logIn: (id, name) => {
      dispatch(logIn(id, name))
    },
    gotFriends: friends => {
      dispatch(gotFriends(friends))
    },
    getAllFeedItems: feedItems => {
      dispatch(getAllFeedItems(feedItems))
    },
    getAllForSaleItems: saleItems => {
      dispatch(getAllForSaleItems(saleItems))
    },
    getBookmarks: bookmarks => {
      dispatch(getBookmarks(bookmarks))
    },
    getCart: cart => {
      dispatch(getCart(cart))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
