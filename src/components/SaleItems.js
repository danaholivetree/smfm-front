import React from 'react'
import SaleItem from './SaleItem'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/AppActions';
import { connect } from 'react-redux';

const SaleItems = ({itemsForSale, removeItem}) => {

  const displaySaleItems = itemsForSale.map( item => {
    return <SaleItem item={item} key={item.id} removeItem={removeItem}/>
  })

  return (
    <ul>
      ItemsForSale
      {displaySaleItems}
    </ul>
  )
}

export default SaleItems
