import React from 'react'
import ItemDetails from './ItemDetails'
// import Bookmark from './Bookmark'
// import CartItem from './CartItem'
import { Jumbotron, Button } from 'react-bootstrap'
import { NavLink, Redirect} from 'react-router-dom'

//
const JumboFeedItem = ({items, match, currentUser, onAddToCart, onAddBookmark, removeItem}) => {

  if (items.length < 1) {
    return <Redirect to='/shoppingfeed' />
  }
  const itemToRender = items.filter( item => {
    return item.id === Number(match.params.id)
  })

  const selector = []
  for (let i = 1; i <= itemToRender[0].quantity; i++ ) {
    selector.push(<option key={i} value={i}>{i}</option>)
  }



return (
  <div className="container">
    <Jumbotron>
      <NavLink to={`/${match.path.split('/')[1]}`}><Button className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span></Button></NavLink>
      <ItemDetails item={itemToRender[0]}
         onAddToCart={ (quantity) => onAddToCart(itemToRender[0].id, currentUser.id, quantity)}
         onAddBookmark={ () => onAddBookmark(itemToRender[0].id, currentUser.id)}
         path={match.path.split('/')[1]}
         selector={selector}
      />


  	</Jumbotron>
  </div>
  )


}

export default JumboFeedItem
