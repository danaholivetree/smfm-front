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
  return removedItem
}

const startRemovingCartItem = (id) => {
  return function (dispatch, getState, API) {
    return removeCartItemFromDatabase(id, API).then(
      returned => {
        console.log('returned from delete', returned);
        if (returned.id === id) {
          dispatch(removeFromCart(id))
        }
        else {
          console.log('delete item failed, returned ', returned)
        }
    })
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
