import React, {Component} from 'react';

// import {browserHistory} from 'react-router'
// import { bindActionCreators } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
// import { ConnectedRouter } from 'react-router-redux';
import SellItemContainer from './containers/SellItemContainer'
// import ShoppingFeedContainer from './containers/ShoppingFeedContainer'
import ItemsForSaleContainer from './containers/ItemsForSaleContainer'
import NavBar from './components/nav/NavBar'
// import BookmarksContainer from './containers/BookmarksContainer'
// import ShoppingCartContainer from './containers/ShoppingCartContainer'
import BuyOrSell from './components/nav/BuyOrSell'
import Items from './routes/Items'
import BookmarksRoute from './routes/BookmarksRoute'
import CartRoute from './routes/Cart'



class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <LoginContainer />
            <NavBar />
            <Switch>
              <Route exact path='/' component={BuyOrSell} />
              <Route path='/sell' component={SellItemContainer} />
              <Route path='/saleitems' component={ItemsForSaleContainer} />
              <Route path='/shoppingcart' component={CartRoute} />
              <Route path='/bookmarks' component={BookmarksRoute} />
              <Route path='/shoppingfeed' component={Items} />
              {/* <Route path='/sellerfeed' component={SellerFeed} /> */}
              {/* <Switch>
                <Route exact path='/shoppingfeed' component={ShoppingFeedContainer}/>
                <Route path='/shoppingfeed/:number' component={JumboFeedItem}/>
              </Switch> */}

            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
