import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
const ItemDetails = ({item, selector, onAddToCart, onAddBookmark, path}) => {

  // var quantity = 1
  //
  const handleAdd = (e) => {
    e.preventDefault()
    onAddToCart(1)
  }
  //
  // const changeQuantity = (e) => {
  //   quantity = e.target.value
  // }

  return (
    <div className='container'>
      <Row>
        <Col md={6} sm={12}>
          <img className="card-img-top" src={item.image} width='400px' alt='' />
        </Col>
        <Col md={6} sm={12}>
          <h2 style={{marginTop:0, marginBottom: '25px'}}> {item.itemName} </h2>

            { path !== 'shoppingcart' && <Button className='bookmark-btn' onClick={handleAdd}>Add To Cart</Button>  }
            { path !== 'bookmarks' && <Button className='bookmark-btn' onClick={onAddBookmark}>Bookmark</Button>  }


          <h5> Category: {item.category} </h5>
          <h5> For sale by: <a href={`http://www.facebook.com/${item.sellerFb}`} target="_blank">{item.sellerName}</a></h5>
          <h5> Quantity Available: {item.quantity} </h5>
          <h5> ${item.price} </h5>
          <p >{item.description}</p>
        </Col>
      </Row>




    </div>
  )
}


//     {selector && item.quantity > 1 ?
//      <select name='quantitySelector' defaultValue={item.cartQuantity} onChange={changeQuantity}>
//      {selector}
// //     </select>
//     : '' }
//   { path !== 'shoppingcart' ? <input className='btn btn-primary' type='button' value='add to cart' onClick={handleAdd} /> : '' }
//   { path !== 'bookmarks' ? <input className='btn btn-primary' type='button' value='bookmark' onClick={onAddBookmark} /> : '' } */}

export default ItemDetails
