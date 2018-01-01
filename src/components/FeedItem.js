import React from 'react'

const FeedItem = ({item, addToCart}) => {

  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log('item id selected for cart ', e.target.dataset.id);
    console.log('item to be added to cart ', item);
    addToCart(item)
  }

  return (

      <li>
        {item.itemName} ** {item.category} ** {item.sellerName} ** {item.description} ** {item.quantity} ** {item.price}
        <input type='button' data-id={item.id} value='add to cart' onClick={handleAddToCart} />
       </li>


  )
}
export default FeedItem
