import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewItemForm from './components/NewItemForm'
import FbLogin from './components/FbLogin'
import ShoppingFeed from './components/ShoppingFeed'
import SaleItems from './components/SaleItems'
import NavBar from './components/nav/NavBar'
import Bookmarks from './components/Bookmarks'

const API = process.env.REACT_APP_API_URL



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {loggedIn: false, friends: [], currentUser: {}, itemsForSale: [], feedItems: [], bookmarks: []}
  }

  facebookLoginHandler = (response) => {
    console.log('in the login handler on app, response should be authResponse', response);

      const {accessToken, userID} = response
      window.FB.api('/me', currentUser => {
        this.setState({currentUser, loggedIn: true})
        var dbLogin = async (user) => {
          console.log('fetching from users route');
          let res = await fetch(`${API}/users`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            mode: 'cors',
            body: JSON.stringify(user)
          })
          let itemsForSale = await res.json()
          this.setState({currentUser: {...this.state.currentUser, userId: itemsForSale[0].seller_id, accessToken}, itemsForSale})

          console.log('this.state.itemsForSale ', this.state.itemsForSale);
          return itemsForSale
        }
        var getAllItems = async () => {
          let res = await fetch(`${API}/products`, {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
          })
          let feedItems = await res.json()
          console.log('feedItems came back from products ', feedItems);
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
    console.log('newproduct came back from db ', newProduct);
    return newProduct
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
  }
  displayItem = (item) => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shit my friends make</h1>
          <FbLogin loginHandler={this.facebookLoginHandler}/>
        </header>
    <div>
      <div>
        <NavBar links={this.links} bgColor='yellow' textColor='black' showDisplay={this.showDisplay}/>
      </div>

    {this.state.display === 'sell' ? <NewItemForm addProduct={this.addProduct} />
    : this.state.display === 'shoppingFeed' ? <ShoppingFeed items={this.state.feedItems} />
    : this.state.display === 'saleItems' ? <SaleItems items={this.state.itemsForSale} removeItem={this.removeItem}/>
    : this.state.display === 'bookmarks' ? <Bookmarks items={this.state.bookmarks} removeItem={this.removeItem} displayItem={this.displayItem} />
    : ""
    }
        </div>
      </div>
    )
  }
}

export default App;
