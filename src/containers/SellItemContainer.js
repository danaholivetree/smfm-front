import { connect } from 'react-redux'
import { addItemForSale } from '../actions/AppActions'
import NewItemForm from '../components/NewItemForm'
// import thunk from 'redux-thunk'

const addProductToDatabase = async (product, API) => {
  let res = await fetch(`${API}/products`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    mode: 'cors',
    body: JSON.stringify(product)
  })
  let newProduct = await res.json()
  console.log('newProduct in addtodatabase ', newProduct);
  return newProduct
}

const startAddingProduct = (product) => {

  console.log('start adding ', product)
  return function (dispatch, getState, API) {
    return addProductToDatabase(product, API).then(
      newItem => {
        console.log('newItem right before dispatch ', newItem);
        dispatch(addItemForSale(newItem))
      }
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}
const mapDispatchToProps = dispatch => {
    return {
      addNewProduct: product => dispatch(startAddingProduct(product))
    }
}

const SellItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewItemForm)

export default SellItemContainer
