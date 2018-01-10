import React from 'react'

// import { connect } from 'react-redux'
// import thunk from 'redux-thunk'
// const API = process.env.REACT_APP_API_URL

const NewItemForm = ({addNewProduct, currentUser}) => {

var imageUrl = ''
var thumbnailUrl = ''

  const uploadWidget = (e) => {
    console.log('click');
    e.preventDefault()
    window.cloudinary.openUploadWidget({ cloud_name: 'smfm', upload_preset: 'ymtqac0s', multiple: 'false', resource_type: 'image'},
        (error, results) => {
            // const { url, secure_url, public_id, path } = result;
            console.log(error, results[0])
            console.log('setting imageUrl as secure_url= ', results[0].secure_url);
            imageUrl = results[0].secure_url
            thumbnailUrl = results[0].thumbnail_url
            // onUploadSuccess({url: secure_url, id: path});
        })
  }

  const createProduct = (e) => {
    e.preventDefault()
      console.log('currentUser ', currentUser)
    let product = {
      itemName: e.target.name.value,
      category: e.target.category.value,
      quantity: Number(e.target.quantity.value),
      price: e.target.price.value,
      description: e.target.description.value,
      sellerId: currentUser.id,
      sellerName: currentUser.name,
      image: imageUrl,
      thumbnail: thumbnailUrl
    }
    console.log('product in createProduct ', product);
    addNewProduct(product)
    e.target.reset()
  }
  // https://react-bootstrap.github.io/components/forms/


  return (

    <div className="upload">
      <button onClick={uploadWidget} className="upload-button">
          Add Image
      </button>


      <form onSubmit={createProduct}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' placeholder='Item Name'/>
        <label htmlFor='category'>Category</label>
        <input type='text' name='category' placeholder='Item Category'/>
        <label htmlFor='quantity'>Quantity</label>
        <input type='text' name='quantity' placeholder='Quantity Available'/>
        <label htmlFor='price'>Price</label>
        <input type='text' name='price' placeholder='Price'/>
        <label htmlFor='description'>Description</label>
        <input htmlFor='text' name='description' placeholder='Description'/>
        <input type='submit' className='btn btn-default' value='submit new item'/>
      </form>
    </div>
  )
}
export default NewItemForm
