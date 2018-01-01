import React from 'react'
import SaleItem from './SaleItem'

const SaleItems = ({items, displayItem}) => {

  const displaySaleItems = items.map( (item, i) => {
    return <SaleItem item={item} key={i} displayItem={displayItem}/>
  })



return (
  <ul>
    ItemsForSale
    {displaySaleItems}
  </ul>
)

}
export default SaleItems
