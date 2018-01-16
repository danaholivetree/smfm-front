import React from 'react'
import {Row, Form, FormGroup, FormControl, Col, ControlLabel, Button, InputGroup} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const EditItem = ({items, editProduct, currentUser, match, history, location}) => {


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
    let product = {
      id: itemToEdit[0].id,
      itemName: e.target.name.value,
      category: e.target.category.value,
      quantity: Number(e.target.quantity.value),
      price: e.target.price.value,
      short: e.target.short.value,
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
            <FormGroup controlId="short">
              <ControlLabel>Short Description</ControlLabel>
              <FormControl componentClass="text" defaultValue={itemToEdit[0].short}/>
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

    </div>

  )


}

export default EditItem
