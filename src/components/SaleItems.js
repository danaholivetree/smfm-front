import React from 'react'
import SaleItem from './SaleItem'

const SaleItems = ({items}) => {

  const displaySaleItems = items.map( (item, i) => {
    return <SaleItem item={item} key={i}/>
  })



return (
  <ul>
    ItemsForSale
    {displaySaleItems}
  </ul>
)

}
export default SaleItems
