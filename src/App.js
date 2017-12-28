import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewItemForm from './components/NewItemForm'
import FbLogin from './components/FbLogin'
const API = process.env.REACT_APP_API_URL



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {loggedIn: false, friends: [], currentUser: {}, itemsForSale: []}
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

          console.log('this.state.currentUser ', this.state.currentUser);
          return itemsForSale
        }
        dbLogin(currentUser)
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
