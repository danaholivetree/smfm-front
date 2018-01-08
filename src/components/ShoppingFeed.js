import React from 'react'
import FeedItem from './FeedItem'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'

const ShoppingFeed = ({filteredItems, onAddToCart, onAddBookmark, currentUser, filterItems, filterCategory}) => {

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



  const displayFeedItems = filteredItems.map( item => {
    return <FeedItem key={item.id} {...item} onAddToCart={ () => onAddToCart(item.id, currentUser.id)} onAddBookmark={ () => onAddBookmark(item.id, currentUser.id)} />
  })

  return (
      <div className='container'>
          ShoppingFeed
          <SearchBar filterItems={filterItems} filterCategory={filterCategory} />
          {displayFeedItems}
      </div>
  )
}

ShoppingFeed.propTypes = {
  filteredItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      itemName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sellerName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      // price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddBookmark: PropTypes.func.isRequired,
  filterItems: PropTypes.func.isRequired,
  filterCategory: PropTypes.func.isRequired
}

export default ShoppingFeed
