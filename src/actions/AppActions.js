export const logIn = (id, name, isSeller) => {
  return {
    type: 'LOG_IN',
    id,
    name,
    isSeller
  }
}

export const logOut = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const gotFriends = (friends) => {
  return {
    type: 'GOT_FRIENDS',
    friends
  }
}

export const getAllFeedItems = (feedItems) => {
  return {
    type: 'GET_ALL_FEED_ITEMS',
    feedItems
  }
}

export const getAllForSaleItems = (itemsForSale) => {
  return {
    type: 'GET_ITEMS_FOR_SALE',
    itemsForSale
  }
}

export const getAllBookmarks = (bookmarks) => {
  return {
    type: 'GET_BOOKMARKS',
    bookmarks
  }
}

export const getAllCart = (cart) => {
  return {
    type: 'GET_CART',
    cart
  }
}

export const addItemForSale = (newItem) => {
  return {
    type: 'ADD_ITEM_FOR_SALE',
    newItem
  }
}

export const removeItemForSale = (itemToRemove) => {
  console.log('removeItemForSale action , item to remove ', itemToRemove);
  return {
    type: 'REMOVE_ITEM_FOR_SALE',
    itemToRemove
  }
}

export const editItemForSale = (editedItem) => {
  return {
    type: 'EDIT_ITEM_FOR_SALE',
    editedItem
  }
}

export const addBookmark = (newBookmark) => {
  return {
    type: 'ADD_BOOKMARK',
    newBookmark
  }
}

export const removeBookmark = (bookmarkToRemove) => {
  return {
    type: 'REMOVE_BOOKMARK',
    bookmarkToRemove
  }
}

export const addToCart = (newCartItem) => {
  console.log('add to cart action newCartItem ', newCartItem);
  return {
    type: 'ADD_TO_CART',
    newCartItem
  }
}

export const removeFromCart = (itemToRemove) => {
  console.log('remove from cart action itemToRemove ', itemToRemove);
  return {
    type: 'REMOVE_FROM_CART',
    itemToRemove
  }
}

export const updateCartQuantity = (id, cartQuantity) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    id,
    cartQuantity
  }
}

export const filterItemsBySearch = (searchFilter) => {
  return {
    type: 'FILTER_ITEMS_BY_SEARCH',
    searchFilter
  }
}

export const filterSellersBySearch = (filter) => {
  return {
    type: 'FILTER_SELLERS_BY_SEARCH',
    filter
  }
}

export const filterItemsByCategory = (categoryFilter, checked) => {
  return {
    type: 'FILTER_CATEGORY',
    categoryFilter,
    checked
  }
}
