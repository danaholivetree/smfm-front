import React from 'react'
import FeedItem from './FeedItem'

const ShoppingFeed = ({state}) => {

  export const addToCart = async (item) => {
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
      return {
        type: 'ADD_TO_CART',
        newCartItem
      }
    }
  }

  const displayFeedItems = state.feedItems.map( (item) => {
    return <FeedItem item={item} key={item.id} addToCart={addToCart}/>
  })

  return (
      <div className='container'>
          ShoppingFeed
          {displayFeedItems}
      </div>
  )

}
export default ShoppingFeed
