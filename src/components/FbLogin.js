import React from 'react'

export default class FacebookLogin extends React.Component {

  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);

  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  initializeFacebookLogin = () => {
    console.log('initializefacebooklogin');
    this.FB = window.FB;
    this.checkLoginStatus()
  }

  checkLoginStatus = () => {
    console.log('check login status');
    this.FB.getLoginStatus(res => {
      this.props.loginHandler(res)
  }, true)
}

  facebookLogin = () => {
    console.log('facebookLogin');
    if (!this.FB) {
      console.log('!this.FB');
      return
    }
    console.log('getting login status');
    this.FB.getLoginStatus(response => {
      console.log(response.status);
      if (response.status === 'connected') {
        console.log('sending response to loginHandler');
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
