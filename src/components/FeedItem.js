import React from 'react'

const FeedItem = ({item, onAddToCart, onAddBookmark, path}) => {



  return (

    <div className="card">
      <img className="card-img-top" src={item.image} width='200px' alt='' />
      <div className="card-block">
        <h4 className="card-title">{item.itemName}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Seller: {item.sellerName}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Price: {item.price} </h6>
          <h6 className="card-subtitle mb-2 text-muted">Quantity Available: {item.quantity} </h6>
        <p className="card-text">{item.description}</p>
        {/* <a href="#" className="btn btn-primary">link</a> */}
        { path !== 'shoppingcart' ? <input className='btn btn-primary' type='button' value='add to cart' onClick={onAddToCart} /> : '' }
        { path !== 'bookmarks' ? <input className='btn btn-primary' type='button' value='bookmark' onClick={onAddBookmark} /> : '' }

      </div>
    </div>
  )
}

export default FeedItem
