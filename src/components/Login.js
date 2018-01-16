import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Login = ({loadData}) => {

    return (
      <FacebookLogin
        appId="135045367176902"
        autoLoad={false}
        fields="name,email,picture"
        returnScopes={true}
        scope="public_profile,user_friends,email"
        callback={loadData}
      />
    )
}



export default Login;
