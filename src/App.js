import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewItemForm from './components/NewItemForm'
import FbLogin from './components/FbLogin'
import ShoppingFeed from './components/ShoppingFeed'
import SaleItems from './components/SaleItems'
import NavBar from './components/nav/NavBar'
import Bookmarks from './components/Bookmarks'
import SearchBar from './components/SearchBar'
import ShoppingCart from './components/ShoppingCart'

const API = process.env.REACT_APP_API_URL



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {loggedIn: false, friends: [], currentUser: {}, itemsForSale: [], feedItems: [], bookmarks: [], cart: []}
  }

  facebookLoginHandler = (response) => {
      console.log('facebook login handler ', response);
      const {accessToken, userID} = response.authResponse

      window.FB.api('/me', currentUser => {
        this.setState({currentUser, loggedIn: true})
        var dbLogin = async (currUser) => {
          let res = await fetch(`${API}/users`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            mode: 'cors',
            body: JSON.stringify(currUser)
          })
          let userAndItemsForSale = await res.json()
          const {products} = userAndItemsForSale
          this.setState({currentUser: {...this.state.currentUser, id: products.id}, itemsForSale: products})

          return this.state.itemsForSale
        }
        var getAllItems = async () => {
          let res = await fetch(`${API}/products`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
          })
          let feedItems = await res.json()
          // console.log('***feedItems ', feedItems);
          this.setState({...this.state, feedItems})
        }
        dbLogin(currentUser)
        getAllItems()
      })
    }

  getFriends = async (userID) => {
    await window.FB.api(
                `/${userID}/friends`,
                'GET',
                {},
                function(friends) {
                    console.log('response from get friends ', friends);
                    this.setState({friends})
                }
            )
  }

  addProduct = async (product) => {
    console.log('product in addproduct ', product);
    product.sellerId = this.state.currentUser.userId

    let res = await fetch(`${API}/products`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      mode: 'cors',
      body: JSON.stringify(product)
    })
    let newProduct = await res.json()
    newProduct.sellerName = this.state.currentUser.name
    console.log('newproduct came back from db ', newProduct);
    this.setState({itemsForSale: [...this.state.itemsForSale, ]})
  }
  showDisplay = (link) => {
    console.log(this.state)
    this.setState({display: `${link}`})
  }

  removeItem = async (item, view) => {
    if (view === 'bookmarks') {
      let res = await fetch(`${API}/bookmarks/${item}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        mode: 'cors',
        // body: JSON.stringify(item)
      })
      let newBookmarks = await res.json()
      console.log('edited bookmarks came back from db ', newBookmarks);
      this.setState({bookmarks: newBookmarks})
      return newBookmarks
    }
    else if (view === 'saleItems') {
      let res = await fetch(`${API}/products/${item}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
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
    const filteredItems = this.state.feedItems.filter( item => {
      return item.itemName.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())

    })
    this.setState({filteredItems})
  }

  addToCart = (item) => {
    let alreadyInCart = this.state.cart.filter( el => {
      return (el.id === item.id)
    })
    console.log('alreadyincart ', alreadyInCart);

    if (alreadyInCart.length < 1) {
      item.quantityInCart = 1
      this.setState({cart: [...this.state.cart, item]})
    } else if (item.quantity > 1) {
      let indexOfItem = this.state.cart.indexOf(alreadyInCart)
      console.log('index of item already in cart ', indexOfItem);
      this.setState({cart:
        [...this.state.cart.slice(0, indexOfItem),
          {...item, quantityInCart: item.quantityInCart+1},
          ...this.state.cart.slice(indexOfItem + 1)
        ]
      })
    }
  }

  subtractFromCart = (item) => {
    let itemToChange = this.state.cart.filter( el => {
      return item.id === el.id
    })
    let indexOfItem = this.state.cart.indexOf(itemToChange)
    this.setState({cart:
      [...this.state.cart.slice(0, indexOfItem),
        {...item, quantityInCart: item.quantityInCart-1},
        ...this.state.cart.slice(indexOfItem + 1)
      ]
    })
  }

  removeFromCart = (item) => {
    let allCartItems = this.state.cart
    let itemToRemove = this.state.cart.indexOf(item)
    this.setState({cart: [...this.state.cart.slice(0, itemToRemove),
    ...this.state.cart.slice(itemToRemove+1)]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shit my friends make</h1>
          <FbLogin loginHandler={this.facebookLoginHandler}/>
        </header>

      <div>
        <NavBar links={this.links} bgColor='yellow' textColor='black' showDisplay={this.showDisplay}/>
      </div>
    <div>


    {this.state.display === 'shoppingFeed' ?
    <div>
      <SearchBar filterItems={this.filterItems} />
      <ShoppingFeed items={this.state.filteredItems ? this.state.filteredItems : this.state.feedItems} addToCart={this.addToCart}/>
    </div>

    :this.state.display === 'sell' ?
    <NewItemForm addProduct={this.addProduct} />

    : this.state.display === 'saleItems' ?
    <SaleItems items={this.state.itemsForSale} removeItem={this.removeItem} displayItem={this.displayItem}/>

    : this.state.display === 'bookmarks' ?
    <Bookmarks items={this.state.bookmarks} removeItem={this.removeItem} displayItem={this.displayItem} />

    : this.state.display === 'shoppingCart' ?
    <ShoppingCart items={this.state.cart} removeItem={this.removeItem} displayItem={this.displayItem} addToCart={this.addToCart}/>

    : <div>
      <SearchBar filterItems={this.filterItems} />
      <ShoppingFeed items={this.state.filteredItems ? this.state.filteredItems : this.state.feedItems} addToCart={this.addToCart} subtractFromCart={this.subtractFromCart} loginHandler={this.facebookLoginHandler}/>
    </div>
    }
        </div>
      </div>
    )
  }
}

export default App;
