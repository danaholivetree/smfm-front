import React from 'react'

export default class FacebookLogin extends React.Component {

  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus()
  }

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.props.loginHandler);
  }

  facebookLogin = () => {
    if (!this.FB) {
      console.log('!this.FB');
      return
    }
    console.log('getting login status');
    this.FB.getLoginStatus(response => {
      console.log(response.status);
      if (response.status === 'connected') {
        this.props.loginHandler(response);
      } else {
        this.FB.login(this.props.loginHandler, {scope: 'public_profile'});
      }
    }, )
  }
  render() {
    return (
      <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"  data-scope="public_profile, email, user_friends" onClick={this.facebookLogin}/>
    )
  }
}
