import React from 'react'

const NewItemForm = ({addProduct}) => {

  const createProduct = (e) => {
    e.preventDefault()
    let product = {
      name: e.target.name.value,
      category: e.target.category.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      description: e.target.description.value
    }
    console.log('product in createProduct ', product);
    addProduct(product)
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
