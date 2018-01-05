import React from 'react'
import SaleItem from './SaleItem'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/AppActions';
import { connect } from 'react-redux';

const SaleItems = ({dispatch, itemsForSale, removeItem}) => {

  const displaySaleItems = itemsForSale.map( item => {
    return <SaleItem item={item} key={item.id} />
  })

  return (
    <ul>
      ItemsForSale
      {displaySaleItems}
    </ul>
  )
}
