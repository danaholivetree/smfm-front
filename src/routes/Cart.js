import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ShoppingCartContainer from '../containers/ShoppingCartContainer'
import JumboItemContainer from '../containers/JumboItemContainer'

const CartRoute = () => (

    <div>
      <Switch>
        <Route exact path='/shoppingcart' component={ShoppingCartContainer}/>
        <Route path='/shoppingcart/:number' component={JumboItemContainer}/>
      </Switch>
    </div>

  )

export default CartRoute
