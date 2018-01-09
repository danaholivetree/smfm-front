import React from 'react'

// import { connect } from 'react-redux'
// import thunk from 'redux-thunk'
// const API = process.env.REACT_APP_API_URL

const NewItemForm = ({addNewProduct, currentUser}) => {

let imageUrl

  const uploadWidget = (e) => {
    console.log('click');
    e.preventDefault()
    window.cloudinary.openUploadWidget({ cloud_name: 'smfm', upload_preset: 'ymtqac0s', multiple: 'false', resource_type: 'image'},
        (error, result) => {
            console.log('cloudinary uploadwidget ', result);
            const { url, secure_url, public_id, path } = result;
            imageUrl = secure_url
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
      image: 'http://res.cloudinary.com/smfm/image/upload/v1515521564/y1w4nmlskrz4nnxwxk9r.jpg'
    }
    console.log('product in createProduct ', product);
    addNewProduct(product)
  }
  // https://react-bootstrap.github.io/components/forms/


  return (

    <div className="upload">
      <button onClick={uploadWidget} className="upload-button">
          Add Image
      </button>


      <form onSubmit={createProduct}>
        {/* <input type="file" name="pic" accept="image/*"/> */}
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
    </div>
  )
}
export default NewItemForm
