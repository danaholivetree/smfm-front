import React from 'react'
import PropTypes from 'prop-types'



const FeedItem = ({id, itemName, sellerName, description, category, price, quantity, image, onAddToCart}) => {

  console.log('feed item id ', id);

  return (

    <div className="card">
      <img className="card-img-top" src={image} alt='' />
      <div className="card-block">
        <h4 className="card-title">{itemName}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Seller: {sellerName}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Price: {price} </h6>
          <h6 className="card-subtitle mb-2 text-muted">Quantity Available: {quantity} </h6>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">link</a>
        <input className='btn btn-primary' type='button' value='add to cart' onClick={onAddToCart(id)} />
      </div>
    </div>
  )
}

FeedItem.propTypes = {
  id: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sellerName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default FeedItem
