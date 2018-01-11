import React from 'react'
import { Form, FormControl, FormGroup, ControlLabel, InputGroup, Col, Checkbox, Button } from 'react-bootstrap'

const EditItem = (props) => {

console.log('trying to render EditItem, props ', props);

  

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

  return  (

    <div>
      <button onClick={uploadWidget} className="upload-button">
          Add Image
      </button>


      {/* <form onSubmit={createProduct}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' placeholder='Item Name'/>
        <label htmlFor='category'>Category</label>
        <select name='category'>
          <option>Handmade</option>
          <option>Music</option>
          <option>Art</option>
          <option>Writing</option>
        </select>
        <label htmlFor='quantity'>Quantity</label>
        <input type='text' name='quantity' placeholder='Quantity Available'/>
        <label htmlFor='price'>Price</label>
        <input type='text' name='price' placeholder='Price'/>
        <label htmlFor='description'>Description</label>
        <input htmlFor='text' name='description' placeholder='Description'/>
        <input type='submit' className='btn btn-default' value='submit new item'/>
      </form> */}
    </div>

  )


}

export default EditItem
