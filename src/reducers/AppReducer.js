// import * as action from '../actions/AppActions'

const AppReducer = (state, action) => {
  let indexToRemove
  switch (action.type) {
    case 'LOG_IN':
      return {...state, loggedIn: true, currentUser: {id: action.id, name: action.name, isSeller: action.isSeller}}
    case 'LOG_OUT':
      return {}
    case 'GOT_FRIENDS':
      //upon login. gets response from await window.FB.api(`/${userID}/friends`, 'GET', {}, friends => { and sets action.friends = friends.data
      return {...state, friends: action.friends}
    case 'GET_ALL_FEED_ITEMS':
      //upon login. (temporarily) fetches all products from GET products and returns them as action.feedItems
      return {...state, feedItems: action.feedItems, filteredItems: action.feedItems}
    case 'GET_ITEMS_FOR_SALE':
    console.log('got items for sale ', action.itemsForSale);
      //upon login. sends user's FB id to POST user. if user was in db redirects to GET user/:id which returns PRODUCTS with seller.id = user.id. products come back and set as action.itemsForSale
      return {...state, itemsForSale: action.itemsForSale}
    case 'GET_BOOKMARKS':
      //upon login. sends user's FB id to POST user. if user was in db redirects to GET user/:id which returns BOOKMARKS with user_id = user.id. bookmarks come back and set as action.bookmarks. need to get feedItems and filter out the items by product id in each bookmark
      return {...state, bookmarks: action.bookmarks}
    case 'GET_CART':
      //upon login. sends user's FB id to POST user. if user was in db redirects to GET user/:id which returns cart items with user_id = user.id. bookmarks come back and set as action.cart
      return {...state, cart: action.cart}
    case 'ADD_ITEM_FOR_SALE':
    console.log('new item getting to reducer ' ,action.newItem)
      //sent data from NewItemForm onSubmit event to POST products. received db item with product.id and set it as action.newItem
      return {...state, itemsForSale: [...state.itemsForSale, action.newItem]}
    case 'REMOVE_ITEM_FOR_SALE':
      let productToRemove = state.feedItems.filter( item => {
        return item.id === action.itemToRemove
      })
      let itemRemove = state.itemsForSale.filter( item => {
        return item.id === action.itemToRemove
      })
      let productIndexToRemove = state.feedItems.indexOf(productToRemove[0])
      let saleIndexToRemove = state.itemsForSale.indexOf(itemRemove[0])
      if (saleIndexToRemove === 0 && productIndexToRemove === 0) {
        return {...state, feedItems: state.feedItems.slice(1), itemsForSale: state.itemsForSale.slice(1)}
      }
      else if (saleIndexToRemove !== 0 && productIndexToRemove !== 0) {
        return {...state, itemsForSale:
            [...state.itemsForSale.slice(0, saleIndexToRemove),
              ...state.itemsForSale.slice(saleIndexToRemove + 1)
            ],
            feedItems:
                [...state.feedItems.slice(0, productIndexToRemove),
                  ...state.feedItems.slice(productIndexToRemove + 1)
                ]
        }
      } else if (saleIndexToRemove === 0) {
          return {...state, feedItems: [...state.feedItems.slice(0, productIndexToRemove),
            ...state.feedItems.slice(productIndexToRemove + 1)
          ], itemsForSale: state.itemsForSale.slice(1)}
      }
      else {
        return {...state, itemsForSale:
            [...state.itemsForSale.slice(0, saleIndexToRemove),
            ...state.itemsForSale.slice(saleIndexToRemove + 1)
          ], feedItems: state.feedItems.slice(1)
        }
      }
    case 'EDIT_ITEM_FOR_SALE':
      let itemToEdit = state.itemsForSale.filter( item => {
        return item.id === action.editedItem.id
      })
      let indexToEdit = state.itemsForSale.indexOf(itemToEdit[0])
      if (indexToEdit === 0) {
        return {...state, itemsForSale: [action.editedItem, ...state.itemsForSale.slice(1)]}
      }
      return {...state, itemsForSale:
          [...state.itemsForSale.slice(0, indexToEdit),
            action.editedItem,
            ...state.itemsForSale.slice(indexToEdit + 1)
          ]
      }
    case 'ADD_BOOKMARK':
      return {...state, bookmarks: [...state.bookmarks, action.newBookmark]}

    case 'REMOVE_BOOKMARK':
      //delete button on Bookmarks component takes bookmark.id, sends it to DELETE bookmarks/:id, and sets returned item as itemToRemove
      const bookmarkToRemove = state.bookmarks.filter( bookmark => {
        return bookmark.id === action.bookmarkToRemove.id
      })
      indexToRemove = state.bookmarks.indexOf(bookmarkToRemove[0])
      if (indexToRemove === 0) {
        return {...state, bookmarks: state.bookmarks.slice(1)}
      } else {
        return {...state, bookmarks:
            [...state.bookmarks.slice(0, indexToRemove),
              ...state.bookmarks.slice(indexToRemove + 1)
            ]
        }
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
      const cartItemToRemove = state.cart.filter( cartItem => {
        return cartItem.id === action.itemToRemove
      })
      indexToRemove = state.cart.indexOf(cartItemToRemove[0])
      if (indexToRemove === 0) {
        return {...state, cart: state.cart.slice(1)}
      } else {
        return {...state, cart:
            [...state.cart.slice(0, indexToRemove),
              ...state.cart.slice(indexToRemove + 1)
            ]
        }
      }
    case 'UPDATE_CART_QUANTITY':
      // onChange event for shopping cart selector OR quantity selector in FeedItem. send NEW Quantity to PUT cart/:id and receive updatedCartItem id and cartQuantity
      itemToEdit = state.cart.filter( cartItem => {
        return cartItem.id === action.id
      })
      indexToEdit = state.cart.indexOf(itemToEdit[0])
      if (indexToEdit === 0) {
        return {...state, cart: [{...state.cart[0], cartQuantity: action.cartQuantity}]}
      } else {
        return {...state, cart:
            [...state.cart.slice(0, indexToEdit),
              {...state.cart[indexToEdit], cartQuantity: action.cartQuantity},
              ...state.cart.slice(indexToEdit + 1)
            ]
        }
      }
    case 'FILTER_ITEMS_BY_SEARCH':
      //onChange event on SearchBar in ShoppingFeed. action.filter

      let filteredItems = state.feedItems.filter(item => {
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

      if (!action.checked) {
          const filteredItems = state.filteredItems.filter( item => {
            return item.category.toLowerCase() !== action.categoryFilter
          })
        return {...state, filteredItems}
      } else { //checked filter
        const unfiltered = state.feedItems.filter(item => {
          return item.category.toLowerCase() === action.categoryFilter
        })
        return {...state, filteredItems: [...state.filteredItems, ...unfiltered]}
      }
    default:
      return state;
  } //end switch
}
export default AppReducer
