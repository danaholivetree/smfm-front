// import * as actionType from '../actions/AppActions'
import addToCart from '../components/ShoppingCart'

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, loggedIn: true, currentUser: {id: action.id, name: action.name}}
    case 'LOG_OUT':
      return {}
    case 'GOT_FRIENDS':
      //upon login. gets response from await window.FB.api(`/${userID}/friends`, 'GET', {}, friends => { and sets action.friends = friends.data
      return {...state, friends: action.friends}
    case 'GET_ALL_FEED_ITEMS':
      //upon login. (temporarily) fetches all products from GET products and returns them as action.feedItems
      return {...state, feedItems: action.feedItems}
    case 'GET_ITEMS_FOR_SALE':
      //upon login. sends user's FB id to POST user. if user was in db redirects to GET user/:id which returns PRODUCTS with seller.id = user.id. products come back and set as action.itemsForSale
      return {...state, itemsForSale: action.itemsForSale}
    case 'GET_BOOKMARKS':
      //upon login. sends user's FB id to POST user. if user was in db redirects to GET user/:id which returns BOOKMARKS with user_id = user.id. bookmarks come back and set as action.bookmarks
      return {...state, bookmarks: action.bookmarks}
    case 'GET_CART':
      //upon login. sends user's FB id to POST user. if user was in db redirects to GET user/:id which returns cart items with user_id = user.id. bookmarks come back and set as action.cart
      return {...state, cart: action.cart}
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
            action.editedItem,
            state.itemsForSale.slice(indexToEdit + 1)
          ]
      }
    case 'ADD_BOOKMARK':
      //bookmark button onClick on FeedItem. takes product.id, sends it with currentUser.id to POST bookmarks/:id, returns a bookmark product object with a bookmark.id and set as newBookmark
      return {...state, bookmarks: [...state.bookmarks, action.newBookmark]}

    case 'REMOVE_BOOKMARK':
      //delete button on Bookmarks component takes bookmark.id, sends it to DELETE bookmarks/:id, and sets returned item as itemToRemove
      indexToRemove = state.bookmarks.indexOf(action.itemToRemove)
      return {...state, bookmarks:
          [...state.bookmarks.slice(0, indexToRemove),
            state.bookmarks.slice(indexToRemove + 1)
          ]
      }
    case 'ADD_TO_CART':
      //add to cart button on FeedItem onClick. checks to see if item is already in the cart by comparing the item's id with items in the cart state.
      //
      // let alreadyInCart = state.cart.filter(el => {
      //   return (el.id === item.id)
      // })
      // if (alreadyInCart.length < 1) { //wasn't already in the cart
      //   item.quantityInCart = 1
        //api POST to cart. takes action.item.id, sends it with currentUser.id to POST cart/:id, returns a cart product object with cart quantity and a cart.id. set it as newCartItem.
        return {...state, cart: [...state.cart, action.newCartItem]}
      // } else if (item.quantity > item.quantityInCart) { //item already in cart
      //   let indexOfItem = this.state.cart.indexOf(alreadyInCart[0])
      //   let oldQuantity = alreadyInCart[0].quantityInCart
      //   let newQuantity = oldQuantity + 1
      //
      //   return { ...state,
      //     cart: [
      //       ...state.cart.slice(0, indexOfItem), {
      //         ...alreadyInCart[0],
      //         quantityInCart: (newQuantity)
      //       },
      //       ...state.cart.slice(indexOfItem + 1)
      //     ]
      //   }
      // }
      // else return state

    case 'REMOVE_FROM_CART':
      //delete button on CartItem in ShoppingCart container. sends cartItem.id to DELETE cart/:id and returns item as itemToRemove
      indexToRemove = state.cart.indexOf(action.itemToRemove)
      return {...state, cart:
          [...state.cart.slice(0, indexToRemove),
            state.cart.slice(indexToRemove + 1)
          ]
      }
    case 'UPDATE_CART_QUANTITY':
      // onChange event for shopping cart selector OR quantity selector in FeedItem. send NEW Quantity to PUT cart/:id and receive updatedCartItem
      indexToEdit = state.cart.indexOf(action.updatedCartItem)
      return {...state, cart:
          [...state.cart.slice(0, indexToEdit),
            action.updatedCartItem,
            state.cart.slice(indexToEdit + 1)
          ]
      }
    case 'FILTER_ITEMS_BY_SEARCH':
      //onChange event on SearchBar in ShoppingFeed. action.filter
      const filteredItems = state.feedItems.filter(item => {
        return item.itemName.toLowerCase().includes(action.searchFilter.toLowerCase()) || item.description.toLowerCase().includes(action.searchFilter.toLowerCase())

      })
      return {...state, filteredItems }
    case 'FILTER_SELLERS_BY_SEARCH':
      //onChange event on SearchBar in SellersFeed. action.filter
      const filteredSellers = state.friends.filter(friend => {
        return friend.name.toLowerCase().includes(action.filter.toLowerCase())
      })
      return {...state, filteredSellers}
    case 'FILTER_CATEGORY':
      // action.filter and action.checked from checkbox onChange handler in ShoppingFeed
      if (action.checked) {
        if (state.filteredItems) {
          const filteredItems = state.filteredItems.filter( item => {
            return item.category.toLowerCase() === action.categoryFilter
          })
        } else {
          const filteredItems = state.feedItems.filter(item => {
            return item.category.toLowerCase() === action.categoryFilter
          })
        }
        return {...state, filteredItems}
        break;
      } else { //unchecked filter
        const unfiltered = state.feedItems.filter(item => {
          return item.category.toLowerCase() === action.categoryFilter
        })
        return {...state, filteredItems: [...state.filteredItems, unfiltered]}
      }
    default:
      return state;
  } //end switch
}
export default AppReducer
