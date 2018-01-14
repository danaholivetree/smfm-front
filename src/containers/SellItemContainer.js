import React from 'react'
import { connect } from 'react-redux'
import { addItemForSale, editItemForSale } from '../actions/AppActions'
import NewItemForm from '../components/NewItemForm'
import { Switch, Route } from 'react-router-dom'
import EditItem from '../components/EditItem'
import SignUpStripe from '../components/SignUpStripe'



const SellItemContainer = ({itemsForSale, startAddingProduct, startEditingProduct, addNewProduct, editProduct, currentUser}) => {

  return (
    <div>

      {/* <Switch>
        { currentUser.isSeller ?
        <Route exact path='/sell' render={() => (
          <NewItemForm addNewProduct={addNewProduct} currentUser={currentUser} />
        )} />
        :
        <Route exact path='/sell' render={ () => (
          <SignUpStripe currentUser={currentUser} />
        )} />
        }
        <Route path='/sell/:id' render={(props) => (
          <EditItem items={itemsForSale} editProduct={editProduct} currentUser={currentUser} history={props.history} location={props.location} match={props.match}/>
        )}/>
      </Switch> */}

      <Switch>
        <Route exact path='/sell' render={() => (
          <NewItemForm addNewProduct={addNewProduct} currentUser={currentUser} />
        )} />
        <Route path='/sell/:id' render={(props) =>{
        
          return (

          <EditItem items={itemsForSale} editProduct={editProduct} currentUser={currentUser} history={props.history} location={props.location} match={props.match}/>
        )}  }/>
      </Switch>
   </div>
  )
}

const startAddingProduct = (product) => {
  return function (dispatch, getState, API) {
    return addProductToDatabase(product, API).then(
      newItem => {
        dispatch(addItemForSale(newItem))
      }
    )
  }
}

const startEditingProduct = (product) => {
  return function (dispatch, getState, API) {
    return editedProductToDatabase(product, API).then(
      editedItem => {
        dispatch(editItemForSale(editedItem))
      }
    )
  }
}

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

const editedProductToDatabase = async (product, API) => {
  console.log('edited product about to send to db ', product);
  let res = await fetch(`${API}/products/${product.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    mode: 'cors',
    body: JSON.stringify(product)
  })
  let editedProduct = await res.json()
  return editedProduct
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    itemsForSale: state.itemsForSale
  }
}

const mapDispatchToProps = dispatch => {
    return {
      addNewProduct: product => dispatch(startAddingProduct(product)),
      editProduct: product => dispatch(startEditingProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellItemContainer)
