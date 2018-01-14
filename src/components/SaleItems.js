import React from 'react'
import SaleItem from './SaleItem'
import { Grid, Col, Row } from 'react-bootstrap'

const SaleItems = ({itemsForSale, removeItem, match}) => {

  const displaySaleItems = itemsForSale.map( item => {
    return (
      <Col md={4} sm={12} key={item.id}>
        <SaleItem item={item} key={item.id} removeItem={removeItem}/>
      </Col>
    )
  })

  return (
    <div className='container'>
      <Grid>
        <Row>
          {displaySaleItems}
        </Row>
      </Grid>
    </div>


  )
}

export default SaleItems
