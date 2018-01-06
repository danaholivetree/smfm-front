import { connect } from 'react-redux'
import { removeItemForSale } from '../actions/AppActions'
import SaleItems from '../components/SaleItems'
// import thunk from 'redux-thunk'


const removeSaleItemFromDatabase = async (id, API) => {
  let res = await fetch(`${API}/products/${id}`, {
       method: 'DELETE',
       headers: {
         "Content-Type": "application/json"
       },
       mode: 'cors'
  })
  let removedItem = await res.json()
  return removedItem
}

const startRemovingItemForSale = (id) => {
  return function (dispatch, getState, API) {
    return removeSaleItemFromDatabase(id, API).then(
      item => dispatch(removeItemForSale(item.id)),
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsForSale: state.itemsForSale,
  }
}

const mapDispatchToProps = dispatch => {
    return {
      removeItem: id => dispatch(startRemovingItemForSale(id))
    }
}

const ItemsForSaleContainer = connect(mapStateToProps, mapDispatchToProps)(SaleItems)

export default ItemsForSaleContainer
