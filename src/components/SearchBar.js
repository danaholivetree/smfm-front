import React from 'react'
import {Row, Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox, InputGroup} from 'react-bootstrap'

const SearchBar = ({filterItems, filterCategory}) => {

  const handleFilter = (e) => {
    e.preventDefault()
    filterItems(e.target.value)
  }
  const handleCheck = (e) => {
    // let filter = {
    //   handmade: this.handmade.checked,
    //   music: this.music.checked,
    //   art: this.art.checked,
    //   writing: this.art.checked
    // }
    // console.log('filter ', filter);
    let filter = e.target.value
    let checked = e.target.checked
    filterCategory(filter, checked)
  }

  return (
    <div className='container'>
        <Row>
          <Col md={6}>
            <FormGroup controlId="searchform">
        			<ControlLabel>Item Name</ControlLabel>{' '}
        			<FormControl type="text" placeholder="Search By Name or Description" onChange={handleFilter}/>
        		</FormGroup>{' '}
            <FormGroup controlId='category'>

              <Checkbox  inline defaultChecked value='handmade' onChange={handleCheck} >Handmade</Checkbox>
              {/* <label htmlFor='handmade'>Handmade </label> */}

              <Checkbox  inline defaultChecked value='art' onChange={handleCheck}>Art</Checkbox>
              {/* <label htmlFor='art'>Art </label> */}

              <Checkbox inline defaultChecked value='writing' onChange={handleCheck}>Writing</Checkbox>
              {/* <label htmlFor='writing'>Writing </label> */}

              <Checkbox inline defaultChecked value='music' onChange={handleCheck}>Music</Checkbox>
              {/* <label htmlFor='music'>Music </label> */}
            </FormGroup>
          </Col>
        </Row>
    </div>
  )

}
export default SearchBar

{/* <Checkbox inputRef={ref => { this.handmade = ref; }} onChange={handleCheck} inline>Handmade</Checkbox>
<Checkbox inputRef={ref => { this.art = ref; }} onChange={handleCheck} inline>Art</Checkbox>{' '}
<Checkbox inputRef={ref => { this.music = ref; }} onChange={handleCheck} inline>Music</Checkbox>
<Checkbox inputRef={ref => { this.writing = ref; }} onChange={handleCheck} inline>Writing</Checkbox> */}
