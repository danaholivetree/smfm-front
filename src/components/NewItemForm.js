import React from 'react'
import {Row, Form, FormGroup, FormControl, Col, ControlLabel, Button, InputGroup} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const NewItemForm = ({addNewProduct, currentUser}) => {

  var imageUrl = ''
  var thumbnailUrl = ''

  if (!currentUser.isSeller) {

  }

  const uploadWidget = (e) => {
    e.preventDefault()
    window.cloudinary.openUploadWidget({
      cloud_name: 'smfm',
      upload_preset: 'ymtqac0s',
      multiple: 'false',
      resource_type: 'image'
    },
      (error, results) => {
        if (error) {
          return
        }
        imageUrl = results[0].secure_url
        thumbnailUrl = results[0].thumbnail_url
      })
  }

  const createProduct = (e) => {
    e.preventDefault()
    let product = {
      itemName: e.target.name.value,
      category: e.target.category.value,
      quantity: Number(e.target.quantity.value),
      price: e.target.price.value,
      short: e.target.short.value,
      description: e.target.description.value,
      // external: e.target.external.value,
      sellerId: currentUser.id,
      sellerName: currentUser.name,
      image: imageUrl,
      thumbnail: thumbnailUrl
    }
    console.log('product in createProduct ', product);
    addNewProduct(product)
    if (product) {
      return  <Redirect to='/saleitems' from='/sell' />
    }

  }


  return (

    <div className="container mainView">

      <Form onSubmit={createProduct}>
        <Row>
          <Col md={2}>
            <FormGroup controlId="image">
              <ControlLabel>Add an Image</ControlLabel>{' '}
              <Button onClick={uploadWidget} className="upload-button">
                Select
              </Button>
            </FormGroup>{' '}
          </Col>

          { thumbnailUrl.length > 1 &&
            <Col md={2}>
              <img src={thumbnailUrl} />
            </Col>
          }

        </Row>

        <Row>
          <Col md={4}>
            <FormGroup controlId="name">
        			<ControlLabel>Item Name</ControlLabel>{' '}
        			<FormControl componentClass="textarea" rows='1' placeholder="Stuff You Made" />
        		</FormGroup>{' '}
          </Col>

        </Row>
        <Row>
          <Col md={3}>
            <FormGroup controlId="category">
              <ControlLabel>Select a Category</ControlLabel>
              <FormControl componentClass="select">
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
            <FormGroup controlId="short">
              <ControlLabel>Short Description</ControlLabel>
              <FormControl componentClass='textarea' rows='1' placeholder="One sentence about your product." />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} >
            <FormGroup controlId="description">
              <ControlLabel>Full Description</ControlLabel>
              <FormControl componentClass="textarea" rows="7" placeholder="Describe your Product" />
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>

    </div>
  )
}
export default NewItemForm
