
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import NewItemForm from '../components/NewItemForm'
// import FbLogin from '../../components/FbLogin'
import ShoppingFeed from '../components/ShoppingFeed'
import SaleItems from '../components/SaleItems'
import NavBar from '../components/nav/NavBar'
import Bookmarks from '../components/Bookmarks'
import ShoppingCart from '../components/ShoppingCart'
import Header from '../components/nav/Header'
import PropTypes from 'prop-types'



const AppRouter = () => (
  <ConnectedRouter>
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
  </ConnectedRouter>
)
AppRouter.contextTypes = {
  store: PropTypes.object
}


export default AppRouter
