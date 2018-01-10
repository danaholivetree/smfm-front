import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ShoppingFeedContainer from '../containers/ShoppingFeedContainer'
import JumboItemContainer from '../containers/JumboItemContainer'

const Items = () => (

    <div>
      <Switch>
        <Route exact path='/shoppingfeed' component={ShoppingFeedContainer}/>
        <Route path='/shoppingfeed/:id' component={JumboItemContainer}/>
      </Switch>
    </div>

  )

export default Items
