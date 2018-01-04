import React from 'react'
const API = process.env.REACT_APP_API_URL

const NewItemForm = ({addProduct, state}) => {

  const createProduct = (e) => {
    e.preventDefault()
    let product = {
      name: e.target.name.value,
      category: e.target.category.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      description: e.target.description.value
      sellerId: state.currentUser.id
      sellerName: state.currentUser.name
    }
    console.log('product in createProduct ', product);
    addProduct(product)
  }

  const addProduct = async(product) => {
    let res = await fetch(`${API}/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(product)
    })
    let newProduct = await res.json()
    console.log('newproduct came back from db ', newProduct);
    dispatch(addItemForSale(newProduct))
  }

  function addItemForSale(newProduct) {
    return {
      type: ADD_ITEM_FOR_SALE,
      newProduct
    }
  }


  return (
    <form onSubmit={createProduct}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' placeholder='Item Name'/>
      <label htmlFor='category'>Category</label>
      <input type='text' name='category' placeholder='Item Name'/>
      <label htmlFor='quantity'>Quantity</label>
      <input type='text' name='quantity' placeholder='Item Name'/>
      <label htmlFor='price'>Price</label>
      <input type='text' name='price' placeholder='Item Name'/>
      <label htmlFor='description'>Description</label>
      <input htmlFor='text' name='description' placeholder='Item Name'/>
      <input type='submit' className='btn btn-default' value='submit new item'/>
    </form>
  )
}
export default NewItemForm
