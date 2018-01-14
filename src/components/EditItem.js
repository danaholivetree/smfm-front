import React from 'react'
import {Row, Form, FormGroup, FormControl, Col, ControlLabel, Button, InputGroup} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
const EditItem = (props) => {

let {items, editProduct, currentUser, match, history, location} = props

  if (items.length < 1) {
    return <Redirect to='/sell' />
  }

  let itemToEdit = items.filter( item => {
    return item.id === Number(match.params.id)
  })

  var imageUrl = ''
  var thumbnailUrl = ''

  const uploadWidget = (e) => {
    e.preventDefault()
    window.cloudinary.openUploadWidget({ cloud_name: 'smfm', upload_preset: 'ymtqac0s', multiple: 'false', resource_type: 'image'},
        (error, results) => {
            // const { url, secure_url, public_id, path } = result;
            imageUrl = results[0].secure_url
            thumbnailUrl = results[0].thumbnail_url
            // onUploadSuccess({url: secure_url, id: path});
        })
  }

  const handleEdit = (e) => {
    e.preventDefault()
      console.log(e.target.category.value)
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
    <div className="container">



      <Form onSubmit={handleEdit}>
        <Row>
          <Col md={2}>
            <FormGroup controlId="image">
              <ControlLabel>Add an Image</ControlLabel>{' '}
              <Button onClick={uploadWidget} className="upload-button">
                Select
              </Button>
            </FormGroup>{' '}
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <FormGroup controlId="name">
              <ControlLabel>Item Name</ControlLabel>{' '}
              <FormControl type="text" defaultValue={itemToEdit[0].itemName} />
            </FormGroup>{' '}
          </Col>

        </Row>
        <Row>
          <Col md={3}>
            <FormGroup controlId="category">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" defaultValue={itemToEdit[0].category}>
                <option >Select a Category</option>
                <option value="Handmade">Handmade</option>
                <option value="Music">Music</option>
                <option value="Art">Art</option>
                <option value="Writing">Writing</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup controlId="quantity">
              <ControlLabel>Quantity Available</ControlLabel>{' '}
              <FormControl type="number" defaultValue={itemToEdit[0].quantity}/>
            </FormGroup>{' '}
          </Col>
          <Col md={2}>
            <FormGroup controlId="price">
              <ControlLabel>Price</ControlLabel>{' '}
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" defaultValue={itemToEdit[0].price}/>
                {/* <InputGroup.Addon>.00</InputGroup.Addon> */}
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} >
            <FormGroup controlId="description">
              <ControlLabel>Description</ControlLabel>
              <FormControl rows="7" componentClass="textarea" defaultValue={itemToEdit[0].description} />
            </FormGroup>
          </Col>
        </Row>


        <Button type="submit">Submit</Button>
      </Form>


    {/* <div>
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
        <input htmlFor='text' name='description'  defaultValue={itemToEdit[0].description}/>
        <input type='submit' className='btn btn-default' value='submit edits'/>
      </form>
    </div>*/}
    </div>

  )


}

export default EditItem
