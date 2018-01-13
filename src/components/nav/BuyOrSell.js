import React from 'react'
import {NavLink} from 'react-router-dom'

const BuyOrSell = () => (
  <div className='container'>
    <div className='row justify-content-center'>
      <h1 className="col-md-auto"> Welcome to Stuff My Friends Make! Do you want to: </h1>
    </div>
    <div className='row justify-content-center'>
      <div className="col-md-auto">
        <NavLink exact activeClassName='is-active' to='/shoppingFeed'><button type='button' className='btn btn-primary'>BUY</button></NavLink>
      </div>
    </div>
    <div className='row justify-content-center'>
      <h3>or</h3>
    </div>
    <div className='row justify-content-center'>
      <NavLink exact activeClassName='is-active' to='/sell'><button type='button' className='btn btn-primary'>SELL</button></NavLink>
    </div>
  </div>
)

export default BuyOrSell
