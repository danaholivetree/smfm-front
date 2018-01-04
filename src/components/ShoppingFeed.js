import React from 'react'
import FeedItem from './FeedItem'
import { addToCart } from '../actions/AppActions'
const API = process.env.REACT_APP_API_URL

const ShoppingFeed = (props, {store}) => {

  const addItemToCart = async (item) => {
    let alreadyInCart = state.cart.filter(el => {
        return (el.id === item.id)
    })
    if (alreadyInCart.length < 1) { //item wasn't in cart
      item.quantityInCart = 1
      let res = await fetch(`${API}/cart/${item.id}`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({...item, quantityInCart: 1, userId: state.currentUser.id})
      })
      let newCartItem = await res.json()
    store.dispatch(addToCart(newCartItem))
    }
  }

  const displayFeedItems = state.feedItems.map( (item) => {
    return <FeedItem key={item.id}/>
  })

  return (
      <div className='container'>
          ShoppingFeed
          {displayFeedItems}
      </div>
  )

}
export default ShoppingFeed
