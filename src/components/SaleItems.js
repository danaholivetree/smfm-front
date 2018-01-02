import React from 'react'
import SaleItem from './SaleItem'

const SaleItems = ({items, displayItem, removeItem}) => {

  const displaySaleItems = items.map( (item, i) => {
    return <SaleItem item={item} key={i} displayItem={displayItem} removeItem={removeItem}/>
  })



return (
  <ul>
    ItemsForSale
    {displaySaleItems}
  </ul>
)

}
export default SaleItems
