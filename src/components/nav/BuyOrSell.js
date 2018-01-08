import React from 'react'
import {NavLink} from 'react-router-dom'

const BuyOrSell = () => (
  <div>
    <NavLink exact activeClassName='is-active' to='/shoppingFeed'><button type='button' className='btn btn-primary'>BUY</button></NavLink>
    <NavLink exact activeClassName='is-active' to='/sell'><button type='button' className='btn btn-primary'>SELL</button></NavLink>
  </div>
)

export default BuyOrSell
