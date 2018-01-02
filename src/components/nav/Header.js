import React from 'react'
import FbLogin from '../../components/FbLogin'

const Header = ({loginHandler}) => (
  <header className="App-header">
    <h1 className="App-title">Shit my friends make</h1>
    <FbLogin loginHandler={loginHandler}/>
  </header>
)

export default Header
