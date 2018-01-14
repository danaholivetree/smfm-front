import { connect } from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../actions/AppActions'
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
  return removedItem
}

const startRemovingCartItem = (id) => {
  return function (dispatch, getState, API) {
    return removeCartItemFromDatabase(id, API).then(
      returned => {
        if (returned.id === id) {
          dispatch(removeFromCart(id))
        }
        else {
          console.log('delete item failed, returned ', returned)
        }
    })
  }
}
const updateCartQuantityInDatabase = async (id, quantity, API) => {
  let res = await fetch(`${API}/cart/${id}`, {
       method: 'PUT',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors',
       body: JSON.stringify({cartQuantity: quantity})
  })
  let updatedItem = await res.json()
  return updatedItem
}

const startUpdatingQuantity = (id, quantity) => {
  return function (dispatch, getState, API) {
    return updateCartQuantityInDatabase(id, quantity, API).then(
      updatedItem => {
          dispatch(updateCartQuantity(updatedItem.id, updatedItem.cartQuantity))
    })
  }
}

const mapStateToProps = state => {
  return  {
    cart: state.cart,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(startRemovingCartItem(id)),
    updateCartQuantity: (id, quantity) => dispatch(startUpdatingQuantity(id, quantity))
  }
}

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default ShoppingCartContainer
