import React, {Component} from 'react';

// import {browserHistory} from 'react-router'
// import { bindActionCreators } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
// import { ConnectedRouter } from 'react-router-redux';
import NewItemForm from './components/NewItemForm'
import ShoppingFeedContainer from './containers/ShoppingFeedContainer'
import ItemsForSaleContainer from './containers/ItemsForSaleContainer'
import NavBar from './components/nav/NavBar'
// import Bookmarks from './components/Bookmarks'
// import ShoppingCart from './components/ShoppingCart'




class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <LoginContainer />
            <NavBar />
            <Switch>
              <Route exact path='/' component={ShoppingFeedContainer} />
              <Route path='/sell' component={NewItemForm} />
              <Route path='/saleitems' component={ItemsForSaleContainer} />
              {/* <Route path='/shoppingcart' component={ShoppingCart} /> */}
              {/* <Route path='/bookmarks' component={Bookmarks} /> */}
              {/* <Route path='/shoppingfeed' component={ShoppingFeed} /> */}
              {/* <Route path='/sellerfeed' component={SellerFeed} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
