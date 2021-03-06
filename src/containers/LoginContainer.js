import React from 'react'
import { connect } from 'react-redux'
import {logIn, gotFriends, getAllFeedItems, getAllForSaleItems, getAllBookmarks, getAllCart} from '../actions/AppActions';
import Login from '../components/Login'
// import { Row, Col } from 'react-bootstrap'
import BuyOrSell from '../components/nav/BuyOrSell'
// import NavBar from '../components/nav/NavBar'

const API = process.env.REACT_APP_API_URL

const LoginContainer = ({loggedIn, currentUser, logIn, gotFriends, getAllFeedItems, getAllForSaleItems, getAllBookmarks, getAllCart}) => {

  const loadData = (response) => {
    console.log('response from login', response);
    window.FB.api('/me', currentUser => {
      if (currentUser.error) {
        console.log('error: ' , currentUser.error.type);
        return ///// handling
      } else {

      dbLogin(currentUser)
      getAllFriends(currentUser.id)
    }
    })
  }

//get userId from database and fetch their items for sale
  const dbLogin = async (currUser) => {
    let res = await fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(currUser)
    })
    let userAndItemsForSale = await res.json()
    let {products, id, isSeller} = userAndItemsForSale

    id = +id
    getBookmarksFromDatabase(id) //retrieve bookmarks from db
    getCartFromDatabase(id)
    logIn(id, currUser.name, isSeller) //action
    getAllForSaleItems(products) //action
  }

  //fetch all user's friends
  const getAllFriends = async(userID) => {
    return await window.FB.api(`/${userID}/friends`, 'GET', {}, function(friends) {
      gotFriends(friends.data)
      getFeedItems(friends.data)
    })
  }

//fetch items for sale by friends
  const getFeedItems = async(friends) => {
    let friendIds = friends.map( friend => {
      return friend.id
    })
    let res = await fetch(`${API}/sellers`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(friendIds)
    })
    let feedItems = await res.json()
    getAllFeedItems(feedItems) // action
  }
//fetch all bookmarks by user id
  const getBookmarksFromDatabase = async(id) => {
    let res = await fetch(`${API}/bookmarks/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors'
    })
    let bookmarks = await res.json()
    getAllBookmarks(bookmarks) //action
  }

  const getCartFromDatabase = async(id) => {
    let res = await fetch(`${API}/cart/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors'
    })
    let cartItems = await res.json()
    getAllCart(cartItems) //action
  }

//check if user has a c_user cookie from facebook matching their fb_id and don\'t display the login
  return (
      <div>
       <Login loadData={loadData} loggedIn={loggedIn}/>
      </div>
  )
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn, currentUser: state.currentUser, friends: state.friends}
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (id, name, isSeller) => {
      dispatch(logIn(id, name, isSeller))
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
    getAllBookmarks: bookmarks => {
      dispatch(getAllBookmarks(bookmarks))
    },
    getAllCart: cart => {
      dispatch(getAllCart(cart))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
