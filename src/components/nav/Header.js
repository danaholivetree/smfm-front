import React from 'react'
// import FbLogin from '../../components/FbLogin'
import Login from '../../components/Login'

const Header = ({loginHandler}) => (
  <header className="App-header">
    <h1 className="App-title">Shit my friends make</h1>
    {/* <FbLogin loginHandler={loginHandler}/> */}
    <Login loginHandler={loginHandler}/>
  </header>
)

export default Header
