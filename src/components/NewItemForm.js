import React from 'react'

// import { connect } from 'react-redux'
// import thunk from 'redux-thunk'
// const API = process.env.REACT_APP_API_URL

const NewItemForm = ({addNewProduct, currentUser}) => {

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: 'smfm', multiple: 'false', resource_type: 'image', client_allowed_formats: ['jpeg'] },
        (error, result) => {
            console.log(result);
        })
  }

  const createProduct = (e) => {
    e.preventDefault()
      console.log('currentUser ', currentUser)
    let product = {
      itemName: e.target.name.value,
      category: e.target.category.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      description: e.target.description.value,
      sellerId: currentUser.id,
      sellerName: currentUser.name
    }
    console.log('product in createProduct ', product);
    addNewProduct(product)
  }
  // https://react-bootstrap.github.io/components/forms/
  return (
    <form onSubmit={createProduct}>
      {/* <input type="file" name="pic" accept="image/*"/> */}
      <div className="upload">
                    <button onClick={uploadWidget} className="upload-button">
                        Add Image
                    </button>
                </div>
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
