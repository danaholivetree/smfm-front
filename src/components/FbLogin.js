import React from 'react'

export default class FacebookLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn : false}
  }

  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);

  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  initializeFacebookLogin =  () => {
    console.log('initialize facebook login');
    if (!window.FB) {
      console.log('fb wasn\'t ready in initialize');
    }
    this.FB = window.FB
    console.log('set this.fb = window.fb, going to check login state');
    return this.checkLoginState()
    }

  checkLoginState = () => {
    console.log('checking login state');
    return this.FB.getLoginStatus( res => {
      if (res.status === 'connected') {
        console.log('connected, setting loggedIn state to true');
        this.setState({loggedIn: true})
        this.props.loginHandler(res.authResponse)
      }
    })
  }

  handleLogin = () => {
    console.log('trying to use fb object in handle login');
    if (!this.FB) {
      console.log('fb wasn\'t ready');
    } else {
      this.FB.login( response => {
        this.checkLoginState()
        if (response.status==='connected') {
          this.props.loginHandler(response)
        } else {
          console.log('login failed');
        }
      })
    }
  }

  handleLogout = () => {
    this.FB.logout(function () { document.location.reload(); });
  }
  // <div>
  //   {!this.state.loggedIn ?
  //  <input className='btn' style={{color:'black'}} type='button' name='login' value='Log In with Facebook' onClick={this.handleLogin()}/> :  <input className='btn' style={{color:'black'}} type='button' name='logout' value='Log Out' onClick={this.handleLogout()}/>}
  // </div>

  render() {
    return (
      <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false" scope="user_profile, user_friends, email"></div>
    )
  }
}
