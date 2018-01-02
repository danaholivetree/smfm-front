import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import NewItemForm from './components/NewItemForm'
// import FbLogin from './components/FbLogin'
// import ShoppingFeed from './components/ShoppingFeed'
// import SaleItems from './components/SaleItems'
// import NavBar from './components/nav/NavBar'
// import Bookmarks from './components/Bookmarks'
// import SearchBar from './components/SearchBar'
// import ShoppingCart from './components/ShoppingCart'
import AppRouter from './routers/AppRouter'
import Header from './components/nav/Header'

const API = process.env.REACT_APP_API_URL

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      friends: [],
      currentUser: {},
      itemsForSale: [],
      feedItems: [],
      bookmarks: [],
      cart: []
    }
  }

  facebookLoginHandler = (response) => {
    console.log('facebook login handler ', response);
    const {accessToken, userID} = response.authResponse

    window.FB.api('/me', currentUser => {
      this.setState({currentUser, loggedIn: true})
      var dbLogin = async(currUser) => {
        let res = await fetch(`${API}/users`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          mode: 'cors',
          body: JSON.stringify(currUser)
        })
        let userAndItemsForSale = await res.json()
        const {products} = userAndItemsForSale
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            id: products.id
          },
          itemsForSale: products
        })

        return this.state.itemsForSale
      }
      var getAllItems = async() => {
        let res = await fetch(`${API}/products`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          },
          mode: 'cors'
        })
        let feedItems = await res.json()
        // console.log('***feedItems ', feedItems);
        this.setState({
          ...this.state,
          feedItems
        })
      }
      dbLogin(currentUser)
      getAllItems()
    })
  }

  getFriends = async(userID) => {
    await window.FB.api(`/${userID}/friends`, 'GET', {}, function(friends) {
      console.log('response from get friends ', friends);
      this.setState({friends})
    })
  }

  addProduct = async(product) => {
    console.log('product in addproduct ', product);
    product.sellerId = this.state.currentUser.userId

    let res = await fetch(`${API}/products`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify(product)
    })
    let newProduct = await res.json()
    newProduct.sellerName = this.state.currentUser.name
    console.log('newproduct came back from db ', newProduct);
    this.setState({
      itemsForSale: [...this.state.itemsForSale]
    })
  }

  showDisplay = (link) => {

    this.setState({display: `${link}`})
  }

  removeItem = async(item, view) => {
    if (view === 'bookmarks') {
      let res = await fetch(`${API}/bookmarks/${item}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        mode: 'cors',
        // body: JSON.stringify(item)
      })
      let newBookmarks = await res.json()
      console.log('edited bookmarks came back from db ', newBookmarks);
      this.setState({bookmarks: newBookmarks})
      return newBookmarks
    } else if (view === 'saleItems') {
      let res = await fetch(`${API}/products/${item}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        mode: 'cors',
        // body: JSON.stringify(item)
      })
      let newSaleItems = await res.json()
      console.log('edited sale items came back from db ', newSaleItems);
      this.setState({itemsForSale: newSaleItems})
      return newSaleItems
    }
  }
  displayItem = (itemId) => {
    this.setState({display: 'singleItem'})

  }

  filterItems = (filter) => {
    const filteredItems = this.state.feedItems.filter(item => {
      return item.itemName.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())

    })
    this.setState({filteredItems})
  }

  filterCategory = (filter, checked) => {
    if (checked) {
      if (this.state.filteredItems) {
        const filteredItems = this.state.filteredItems.filter( item => {
          return item.category.toLowerCase() === filter
        })
        this.setState({filteredItems})
      } else {
        const filteredItems = this.state.feedItems.filter(item => {
          return item.category.toLowerCase() === filter
        })
        this.setState({filteredItems})
      }
    } else { //unchecked filter
      const unfiltered = this.state.feedItems.filter(item => {
        return item.category.toLowerCase() === filter
      })
      this.setState({filteredItems: [...this.state.filteredItems, unfiltered]})
    }
  }

  addToCart = (item) => {
    let alreadyInCart = this.state.cart.filter(el => {
      return (el.id === item.id)
    })
    if (alreadyInCart.length < 1) {
      item.quantityInCart = 1
      this.setState({
        cart: [...this.state.cart, item]
      })
    } else if (item.quantity > item.quantityInCart) {
      let indexOfItem = this.state.cart.indexOf(alreadyInCart[0])
      this.setState({
        cart: [
          ...this.state.cart.slice(0, indexOfItem), {
            ...item,
            quantityInCart: (alreadyInCart[0].quantityInCart + 1)
          },
          ...this.state.cart.slice(indexOfItem + 1)
        ]
      })
    }
    return this.state.cart
  }

  subtractFromCart = (item) => {
    let itemToChange = this.state.cart.filter(el => {
      return item.id === el.id
    })
    let indexOfItem = this.state.cart.indexOf(itemToChange)
    this.setState({
      cart: [
        ...this.state.cart.slice(0, indexOfItem), {
          ...item,
          quantityInCart: item.quantityInCart - 1
        },
        ...this.state.cart.slice(indexOfItem + 1)
      ]
    })
  }

  removeItem = (item, loc) => {
    let indexToRemove
    switch(loc) {
      case 'cart':
        indexToRemove = this.state.cart.indexOf(item)
        console.log(this.state.cart.indexOf(item));
        this.setState({
          cart : [
            ...this.state.cart.slice(0, indexToRemove),
            ...this.state.cart.slice(indexToRemove + 1)
          ]
        })
        break
      case 'bookmarks':
        indexToRemove = this.state.bookmarks.indexOf(item)
        console.log(this.state.bookmarks.indexOf(item))
        this.setState({
          bookmarks : [
            ...this.state.bookmarks.slice(0, indexToRemove),
            ...this.state.bookmarks.slice(indexToRemove + 1)
          ]
        })
        break
      case 'itemsForSale':
        indexToRemove = this.state.itemsForSale.indexOf(item)
        console.log(this.state.itemsForSale.indexOf(item))
        this.setState({
          itemsForSale : [
            ...this.state.itemsForSale.slice(0, indexToRemove),
            ...this.state.itemsForSale.slice(indexToRemove + 1)
          ]
        })
        break
    }
  }

  render() {
    return (
      <div className="App">
        <Header loginHandler={this.facebookLoginHandler}/>
        <div>
          <AppRouter />
        </div>
      </div>
    )
  }
}

export default App;
