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
    window.cloudinary.openUploadWidget({ cloud_name: 'smfm', upload_preset: 'ymtqac0s', multiple: 'false', resource_type: 'image'},
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
      sellerId: currentUser.id,
      sellerName: currentUser.name,
      image: imageUrl,
      thumbnail: thumbnailUrl
    }
    console.log('product in createProduct ', product);
    addNewProduct(product)
    return  <Redirect to='/saleitems' />
  }
  // https://react-bootstrap.github.io/components/forms/
console.log('thumbnail url ', thumbnailUrl);

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
        			<FormControl type="text" placeholder="Stuff You Made" />
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
              <FormControl type="text" placeholder="One sentence about your product." />
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
