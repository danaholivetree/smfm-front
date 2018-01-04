export const logIn = (loggedIn) => {
  return {
    type: 'LOG_IN',
    loggedIn
  }
}

export const logOut = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const getFriends = (friends) => {
  return {
    type: 'GET_FRIENDS',
    friends
  }
}

export const getAllFeedItems = (feedItems) => {
  return {
    type: 'GET_ALL_FEED_ITEMS',
    feedItems
  }
}

export const getAllSaleItems = (itemsForSale) => {
  return {
    type: 'GET_ITEMS_FOR_SALE',
    itemsForSale
  }
}

export const getBookmarks = (bookmarks) => {
  return {
    type: 'GET_BOOKMARKS',
    bookmarks
  }
}

export const getCart = (cart) => {
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
  return {
    type: 'ADD_TO_CART',
    newCartItem
  }
}

export const removeFromCart = (itemToRemove) => {
  return {
    type: 'REMOVE_FROM_CART',
    itemToRemove
  }
}

export const updateCartQuantity = (updatedCartItem) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    updatedCartItem
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
