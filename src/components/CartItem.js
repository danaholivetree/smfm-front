import React from 'react'

const CartItem = ({item, displayItem, removeItem}) => {

  const handleDisplay = (e) => {
    e.preventDefault()
    displayItem(e.target.dataset.id)
  }

  const quantitySelector = (quant) => {
    var options = []
    while (quant > 0) {
      options.shift(quant)
      quant--
    }
    console.log('options ', options);
    return options.map( opt => {
      return `<option value={opt}>{opt}</option>`
    })
  }

  const updateQuantity = (e) => {
    e.preventDefault()
    console.log('e.target.value ', e.targetv);
    cost = item.price * e.target.value

  }
  var cost = item.price

  return (

      <tr>
        <td>{item.itemName}</td>
        <td>{item.sellerName}</td>
        <td>
            { item.quantity > 1 ?
              <select name="text" onChange={updateQuantity}>
                {quantitySelector}
              </select>
            : 1
          }
        </td>
        <td>{item.price}</td>
        <td>{cost}</td>
        <td><input type='button' value='view item' data-id='item.id' onClick='handleDisplay' /></td>
        <td><input type='button' value='update item' data-id='item.id' onClick='handleUpdate' /></td>
        <td><input type='button' value='remove item' data-id='item.id' onClick='handleRemove' /></td>
      </tr>


  )
}
export default CartItem
