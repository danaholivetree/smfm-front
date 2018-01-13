import React from 'react'
import {Row, Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox, InputGroup} from 'react-bootstrap'

const NewItemForm = ({addNewProduct, currentUser}) => {

var imageUrl = ''
var thumbnailUrl = ''
if (!currentUser.isSeller) {

}

  const uploadWidget = (e) => {
    console.log('click');
    e.preventDefault()
    window.cloudinary.openUploadWidget({ cloud_name: 'smfm', upload_preset: 'ymtqac0s', multiple: 'false', resource_type: 'image'},
        (error, results) => {
            // const { url, secure_url, public_id, path } = result;
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

    <div className="container">



      <Form onSubmit={createProduct}>


        <Row>
          <Col md={4}>
            <FormGroup controlId="name">
        			<ControlLabel>Item Name</ControlLabel>{' '}
        			<FormControl type="text" placeholder="Stuff You Made" />
        		</FormGroup>{' '}
          </Col>

        </Row>
        <Row>
          <Col md={3}>
            <FormGroup controlId="category">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select">
                <option value="select">Select a Category</option>
                <option value="handmade">Handmade</option>
                <option value="music">Music</option>
                <option value="music">Art</option>
                <option value="writing">Writing</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup controlId="quantity">
        			<ControlLabel>Quantity Available</ControlLabel>{' '}
        			<FormControl type="number" placeholder="1" />
        		</FormGroup>{' '}
          </Col>
          <Col md={2}>
            <FormGroup controlId="price">
              <ControlLabel>Price</ControlLabel>{' '}
        			<InputGroup>
        				<InputGroup.Addon>$</InputGroup.Addon>
        				<FormControl type="text" />
        				{/* <InputGroup.Addon>.00</InputGroup.Addon> */}
        			</InputGroup>
        		</FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} >
            <FormGroup controlId="description">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Describe your Product" />
            </FormGroup>
          </Col>
        </Row>

        <Col md={2}>
          <FormGroup controlId="image">
            <ControlLabel>Add an Image</ControlLabel>{' '}
            <Button onClick={uploadWidget} className="upload-button">
              Select
            </Button>
          </FormGroup>{' '}

        </Col>
      </Form>


    {/* <label htmlFor='name'>Name</label>
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
    <input type='submit' className='btn btn-default' value='submit new item'/> */}








    </div>
  )
}
export default NewItemForm
