import * as actionType from '../actions/AppActions'

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_FOR_SALE':
      //sent data from NewItemForm onSubmit event to POST products. received db item with product.id and set it as action.newItem
      return {...state, itemsForSale: [...state.itemsForSale, action.newItem]}
    case 'REMOVE_ITEM_FOR_SALE':
      // sent item id to DELETE products/:id. received deleted item from DB and set as action.itemToRemove
      // find index of item to remove in state.itemsForSale
      let indexToRemove = state.itemsForSale.indexOf(action.itemToRemove)
      return {...state, itemsForSale:
          [...state.itemsForSale.slice(0, indexToRemove),
            state.itemsForSale.slice(indexToRemove + 1)
          ]
      }
    case 'EDIT_ITEM_FOR_SALE':
      // set data from EditItemForm onSubmit event to PUT products/:id. received db item and set it as action.editedItem
      let indexToEdit = state.itemsForSale.indexOf(action.editedItem)
      return {...state, itemsForSale:
          [...state.itemsForSale.slice(0, indexToEdit),
            editedItem,
            state.itemsForSale.slice(indexToEdit + 1)
          ]
      }
    case 'ADD_BOOKMARK':
      //bookmark button onClick on FeedItem. takes product.id, sends it with currentUser.id to POST bookmarks/:id, returns a bookmark product object with a bookmark.id and set as newBookmark
      return {...state, bookmarks: [...state.bookmarks, newBookmark]}
    case 'REMOVE_BOOKMARK':
      //delete button on Bookmarks component takes bookmark.id, sends it to DELETE bookmarks/:id, and sets returned item as itemToRemove
      let indexToRemove = state.bookmarks.indexOf(action.itemToRemove)
      return {...state, bookmarks:
          [...state.bookmarks.slice(0, indexToRemove),
            state.bookmarks.slice(indexToRemove + 1)
          ]
      }
    case 'ADD_TO_CART':
      //add to cart button on FeedItem onClick. takes product.id, sends it with currentUser.id to POST cart/:id, returns a cart product object with cart quantity and a cart.id. set it as newCartItem.
      return {...state, cart: [...state.cart, newCartItem]}
    case 'REMOVE_FROM_CART':
      //delete button on CartItem in ShoppingCart container. sends cartItem.id to DELETE cart/:id and returns item as itemToRemove
      let indexToRemove = state.cart.indexOf(action.itemToRemove)
      return {...state, cart:
          [...state.cart.slice(0, indexToRemove),
            state.cart.slice(indexToRemove + 1)
          ]
      }
    case 'UPDATE_CART_QUANTITY':
      // onChange event for shopping cart selector OR quantity selector in FeedItem. send NEW Quantity to PUT cart/:id and receive updatedCartItem
      let indexToEdit = state.cart.indexOf(action.updatedCartItem)
      return {...state, cart:
          [...state.cart.slice(0, indexToEdit),
            updatedCartItem,
            state.cart.slice(indexToEdit + 1)
          ]
      }
  }
}
