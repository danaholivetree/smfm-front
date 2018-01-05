import React from 'react'
import FeedItem from './FeedItem'
import PropTypes from 'prop-types'

// const API = process.env.REACT_APP_API_URL

const ShoppingFeed = ({feedItems, onAddToCart}) => {

  // const addItemToCart = async (item) => {
  //   let alreadyInCart = cart.filter(el => {
  //       return (el.id === item.id)
  //   })
  //   if (alreadyInCart.length < 1) { //item wasn't in cart
  //     item.quantityInCart = 1
  //     let res = await fetch(`${API}/cart/${item.id}`, {
  //           method: 'POST',
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           mode: 'cors',
  //           body: JSON.stringify({...item, quantityInCart: 1, userId: currentUser.id})
  //     })
  //     let newCartItem = await res.json()
  //     dispatch(addToCart(newCartItem))
  //   }
  // }

  const displayFeedItems = feedItems.map( item => {
    return <FeedItem key={item.id} {...item} onAddToCart={ () => onAddToCart(item.id)} />
  })

  return (
      <div className='container'>
          ShoppingFeed
          {displayFeedItems}
      </div>
  )
}

ShoppingFeed.propTypes = {
  feedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sellerName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ShoppingFeed
