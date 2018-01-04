import React from 'react';
import FacebookLogin from 'react-facebook-login';
const API = process.env.REACT_APP_API_URL

class Login extends React.Component {

  // facebookLoginHandler = (response) => {
  //   console.log('facebook login handler ', response);
  //   // const {accessToken, userID} = response.authResponse
  //     window.FB.api('/me', currentUser => {
  //     this.setState({currentUser, loggedIn: true})
  //     var dbLogin = async(currUser) => {
  //       let res = await fetch(`${API}/users`, {
  //         method: 'POST',
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         mode: 'cors',
  //         body: JSON.stringify(currUser)
  //       })
  //       let userAndItemsForSale = await res.json()
  //       const {products} = userAndItemsForSale
  //       this.setState({
  //         currentUser: {
  //           ...this.state.currentUser,
  //           id: products.id
  //         },
  //         itemsForSale: products
  //       })
  //
  //       return this.state.itemsForSale
  //     }
  //     var getAllItems = async() => {
  //       let res = await fetch(`${API}/products`, {
  //         method: 'GET',
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         mode: 'cors'
  //       })
  //       let feedItems = await res.json()
  //       // console.log('***feedItems ', feedItems);
  //       this.setState({
  //         ...this.state,
  //         feedItems
  //       })
  //     }
  //     dbLogin(currentUser)
  //     getAllItems()
  //   })
  // }


  render() {
    return (
      <FacebookLogin
        appId="135045367176902"
        autoLoad={true}
        fields="name,email,picture"
        returnScopes={true}
        scope="public_profile,user_friends"
        callback={this.props.loginHandler}
      />
    )
  }
}

export default Login;
