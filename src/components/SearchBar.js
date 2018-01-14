import React from 'react'
import { Row, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox } from 'react-bootstrap'

const SearchBar = ({filterItems, filterCategory}) => {

  const handleFilter = (e) => {
    e.preventDefault()
    filterItems(e.target.value)
  }
  const handleCheck = (e) => {
    let filter = e.target.value
    let checked = e.target.checked
    filterCategory(filter, checked)
  }

  return (
    <div className='container'>
        <Row>
          <Col md={6}>
            <Form>
              <FormGroup controlId="searchform">
          			<ControlLabel>Search by Item Name or Description</ControlLabel>{' '}
          			<FormControl type="text" placeholder="Search By Name or Description" onChange={handleFilter}/>
          		</FormGroup>{' '}
              <FormGroup controlId='category'>
                <Checkbox inline defaultChecked value='handmade' onChange={handleCheck} >Handmade</Checkbox>
                <Checkbox inline defaultChecked value='art' onChange={handleCheck}>Art</Checkbox>
                <Checkbox inline defaultChecked value='writing' onChange={handleCheck}>Writing</Checkbox>
                <Checkbox inline defaultChecked value='music' onChange={handleCheck}>Music</Checkbox>
              </FormGroup>
            </Form>
          </Col>
        </Row>
    </div>
  )

}
export default SearchBar
