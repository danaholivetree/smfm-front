import { connect } from 'react-redux'
import { removeFromCart } from '../actions/AppActions'
import ShoppingCart from '../components/ShoppingCart'


const removeCartItemFromDatabase = async (id, API) => {
  let res = await fetch(`${API}/cart/${id}`, {
       method: 'DELETE',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors'
  })
  let removedItem = await res.json()
  if (removedItem === 1) return id
}

const startRemovingCartItem = (id) => {
  return function (dispatch, getState, API) {
    return removeCartItemFromDatabase(id, API).then(
      removedId => dispatch(removeFromCart(removedId)),
    )
  }
}

const mapStateToProps = state => {
  return  {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(startRemovingCartItem(id))
  }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartContainer
