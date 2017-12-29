import React from 'react'

const SaleItem = ({item}) => {


  return (

      <li>
        {item.item_name} ** {item.category} ** {item.seller_id} ** {item.description} ** {item.quantity} ** {item.price}
       </li>


  )
}
export default SaleItem
