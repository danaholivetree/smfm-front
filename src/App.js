import React, {Component} from 'react';

// import PropTypes from 'prop-types'
// import {browserHistory} from 'react-router'
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/nav/Header'
// import { ConnectedRouter } from 'react-router-redux';
import NewItemForm from './components/NewItemForm'
// import FbLogin from '../../components/FbLogin'
import ShoppingFeedContainer from './containers/ShoppingFeedContainer'
import SaleItems from './components/SaleItems'
import NavBar from './components/nav/NavBar'
import Bookmarks from './components/Bookmarks'
import ShoppingCart from './components/ShoppingCart'
import {logIn, gotFriends, getAllFeedItems, getAllForSaleItems, getBookmarks, getCart} from './actions/AppActions';

const API = process.env.REACT_APP_API_URL

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  // componentDidMount() {
  //   const {store} = this.context
  //   this.unsubscribe = store.subscribe( () => {
  //     this.forceUpdate()
  //   })
  // }
  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  loadData = (response) => {
    console.log('facebook login handler ', response);
    // const {accessToken, userID} = response.authResponse
    window.FB.api('/me', currentUser => {
      this.dbLogin(currentUser)
      this.getAllFriends(currentUser.id)
      this.getFeedItems()
    })
  }

  dbLogin = async(currUser) => {
    let res = await fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(currUser)
    })
    let userAndItemsForSale = await res.json()
    const {products} = userAndItemsForSale
    console.log('products[0].sellerId ', products[0].sellerId);
    console.log('currUser.name ', currUser.name);
    console.log('products for sale ', products);
    logIn(products[0].sellerId, currUser.name)
    getAllForSaleItems(products)
    // getBookmarks(bookmarks)
    // getCart(cart)
  }

  getFeedItems = async() => {
    let res = await fetch(`${API}/products`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors'
    })
    let feedItems = await res.json()
    console.log('feedItems ', feedItems);
    getAllFeedItems(feedItems)
  }

  getAllFriends = async(userID) => {
    await window.FB.api(`/${userID}/friends`, 'GET', {}, function(friends) {
      console.log('friends ', friends.data);
      gotFriends(friends.data)
    })
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header loginHandler={this.loadData}/>
            <NavBar />
            <Switch>
              <Route exact path='/' component={ShoppingFeedContainer} />
              {/* <Route path='/sell' component={NewItemForm} />
              <Route path='/saleitems' component={SaleItems} />
              <Route path='/shoppingcart' component={ShoppingCart} />
              <Route path='/bookmarks' component={Bookmarks} />
              <Route path='/shoppingfeed' component={ShoppingFeed} /> */}
              {/* <Route path='/sellerfeed' component={SellerFeed} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App


// export default connect(mapStateToProps, mapDispatchToProps)(App)
