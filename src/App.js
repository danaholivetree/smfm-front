import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewItemForm from './components/NewItemForm'
import FbLogin from './components/FbLogin'
import ShoppingFeed from './components/ShoppingFeed'
import SaleItems from './components/SaleItems'

const API = process.env.REACT_APP_API_URL



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {loggedIn: false, friends: [], currentUser: {}, itemsForSale: [], feedItems: []}
  }

  facebookLoginHandler = response => {
    console.log('in the login handler, response ', response);
    if (response.status === 'connected') {
      const {accessToken, userID} = response.authResponse
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
    else {
      window.FB.login()
    }
  }
  onLogin = (loginStatus, resultObject) => {
    console.log('onFacebookLogin');
      if (loginStatus === true) {
        this.setState({
          username: resultObject.user.name
        });
      } else {
        alert('Facebook login error');
      }
    }
//   facebookLoginHandler = response => {
//   if (response.status === 'connected') {
//     this.FB.api('/me', userData => {
//       let result = {
//         ...response,
//         user: userData
//       };
//       this.props.onLogin(true, result);
//     });
//   } else {
//     this.props.onLogin(false);
//   }
// }


  // checkLoginState = () => {
  //   window.FB.getLoginStatus(function(response) {
  //     this.statusChangeCallback(response);
  //   }.bind(this))
  // }

  // handleClick = () => {
  //   window.FB.login(this.checkLoginState());
  // }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shit my friends make</h1>
        </header>
        <div>
        <FbLogin loginHandler={this.facebookLoginHandler}/>
        <NewItemForm addProduct={this.addProduct} />
        <ShoppingFeed items={this.state.feedItems} />
        <SaleItems items={this.state.itemsForSale} />
        </div>
      </div>
    )
  }
}

export default App;
