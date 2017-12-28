import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewItemForm from './components/NewItemForm'
import FbLogin from './components/FbLogin'
const API = process.env.REACT_APP_API_URL
var token = ""
var currentUser = {}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: false, friends: []}
  }
  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      const {accessToken, userID} = response.authResponse
      token = accessToken
      window.FB.api('/me', function(res) {
        currentUser = res
        var login = async (user) => {
          let res = await fetch(`${API}/users`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            mode: 'cors',
            body: JSON.stringify(user)
          })
          let itemsForSale = await res.json()
          currentUser.userId = itemsForSale.seller_id
          console.log('currentUser ' ,currentUser);
          return itemsForSale
        }
        login(res)
      })
    }
    else {
      this.props.onLogin(false);
      window.FB.login()
    }
  }
  onFacebookLogin = (loginStatus, resultObject) => {
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

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState = () => {
    window.FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this))
  }

  // handleClick = () => {
  //   window.FB.login(this.checkLoginState());
  // }

  getFriends = async (userID) => {
    await window.FB.api(
                `/${userID}/friends`,
                'GET',
                {},
                function(res) {
                    console.log('response from get friends ', res);
                    this.setState({...this.state, friends: res})
                }
            )
  }

  addProduct = async (product) => {
    console.log('product in addproduct ', product);
    product.sellerId = currentUser.userId
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
          {!this.state.loggedIn ?
          <div>
          <FbLogin loginHandler={this.facebookLoginHandler}/>
          </div> : <div> you are logged in </div>

        }
        <NewItemForm addProduct={this.addProduct} />
        </div>
      </div>
    )
  }
}

export default App;
