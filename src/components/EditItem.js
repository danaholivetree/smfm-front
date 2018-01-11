import React from 'react'
// import { Form, FormControl, FormGroup, ControlLabel, InputGroup, Col, Checkbox, Button } from 'react-bootstrap'

const EditItem = ({items, editProduct, currentUser, match, history, location}) => {

console.log('items for sale ', items);


  let itemToEdit = items.filter( item => {
    return item.id === Number(match.params.id)
  })
  console.log('item to edit ', itemToEdit[0]);

  var imageUrl = ''
  var thumbnailUrl = ''

  const uploadWidget = (e) => {
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

  const handleEdit = (e) => {
    e.preventDefault()
      console.log('currentUser ', currentUser)
    let product = {
      id: itemToEdit[0].id,
      itemName: e.target.name.value,
      category: e.target.category.value,
      quantity: Number(e.target.quantity.value),
      price: e.target.price.value,
      description: e.target.description.value
      // sellerId: currentUser.id,
      // sellerName: currentUser.name
    }
    if (imageUrl.length > 0) {
      product.image = imageUrl
      product.thumbnail = thumbnailUrl
    }
    console.log('editedProduct ', product);
    editProduct(product)
    e.target.reset()
  }

  return  (

    <div>
      <button onClick={uploadWidget} className="upload-button">
          Add Image
      </button>


      <form onSubmit={handleEdit}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' defaultValue={itemToEdit[0].itemName}/>
        <label htmlFor='category'>Category</label>
        <select name='category' defaultValue={itemToEdit[0].category}>
          <option>Handmade</option>
          <option>Music</option>
          <option>Art</option>
          <option>Writing</option>
        </select>
        <label htmlFor='quantity'>Quantity</label>
        <input type='text' name='quantity' defaultValue={itemToEdit[0].quantity}/>
        <label htmlFor='price'>Price</label>
        <input type='text' name='price' defaultValue={itemToEdit[0].price}/>
        <label htmlFor='description'>Description</label>
        <input htmlFor='text' name='description' defaultValue={itemToEdit[0].description}/>
        <input type='submit' className='btn btn-default' value='submit edits'/>
      </form>
    </div>

  )


}

export default EditItem