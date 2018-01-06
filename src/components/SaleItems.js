import React from 'react'
import SaleItem from './SaleItem'

const SaleItems = ({itemsForSale, removeItem}) => {
  const displaySaleItems = itemsForSale.map( item => {
    return <SaleItem item={item} key={item.id} removeItem={removeItem}/>
  })

  return (
    <ul>
      My Items For Sale
      {displaySaleItems}
    </ul>
  )
}

export default SaleItems
