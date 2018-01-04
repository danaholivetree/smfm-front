import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import AppRouter from './routers/AppRouter'

import store from './store'
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/nav/Header'
// import { ConnectedRouter } from 'react-router-redux';
import NewItemForm from './components/NewItemForm'
// import FbLogin from '../../components/FbLogin'
import ShoppingFeed from './components/ShoppingFeed'
import SaleItems from './components/SaleItems'
import NavBar from './components/nav/NavBar'
import Bookmarks from './components/Bookmarks'
import ShoppingCart from './components/ShoppingCart'
import * as actionCreators from './actions/AppActions';

const API = process.env.REACT_APP_API_URL

const mapStateToProps = function(state){
  return {
    loggedIn: state.loggedIn,
    friends: state.friends,
    currentUser: state.currentUser,
    itemsForSale: state.itemsForSale,
    feedItems: state.feedItems,
    bookmarks: state.bookmarks,
    cart: state.cart,
    filteredItems: state.filteredItems
  }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    getSomething: actionCreators.getSomething,
  }, dispatch)
}

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
      this.getFriends(currentUser.id)
      this.getAllItems()
    })
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <NavBar />
            <Switch>
              <Route exact path='/' component={ShoppingFeed} />
              <Route path='/sell' component={NewItemForm} />
              <Route path='/saleitems' component={SaleItems} />
              <Route path='/shoppingcart' component={ShoppingCart} />
              {/* <Route path='/bookmarks' component={Bookmarks} /> */}
              <Route path='/shoppingfeed' component={ShoppingFeed} />
              {/* <Route path='/sellerfeed' component={SellerFeed} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
// App.contextTypes = {
//   store: PropTypes.object
// }



export default connect(mapStateToProps, mapDispatchToProps)(App)
