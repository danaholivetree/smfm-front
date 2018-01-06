import { connect } from 'react-redux'
import { addItemForSale } from '../actions/AppActions'
import NewItemForm from '../components/NewItemForm'

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
  return newProduct
}

const startAddingProduct = (product) => {
  console.log('product ', product);
  return function (dispatch, getState, API) {
    return addProductToDatabase(product, API).then(
      newItem => {
        console.log('newItem ', newItem);
        dispatch(addItemForSale(newItem))
      }
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
}
const mapDispatchToProps = dispatch => {
    return {addNewProduct: product => dispatch(startAddingProduct(product))}
}

const SellItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewItemForm)

export default SellItemContainer
