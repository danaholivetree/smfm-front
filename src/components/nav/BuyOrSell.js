import React from 'react'
import {Link} from 'react-router-dom'

import {Row, Col, Button, Grid} from 'react-bootstrap'
import LoginContainer from '../../containers/LoginContainer'

const BuyOrSell = ({loggedIn}) => (

  <div id='mainContainer'>

    <div className='centered'>
       <h1 id='welcome' >Welcome to Stuff My Friends Make!</h1>



    { !loggedIn ?
      <div>
        <LoginContainer />
      </div>
      :
      <div>

          <Link exact='true'  to='/shoppingFeed'>
            <Button className='buyorsell'>BUY</Button>
          </Link>

          <Link exact='true' to='/sell'>
            <Button className='buyorsell'>SELL</Button>
          </Link>

      </div>
    }
    </div>
  </div>

)

export default BuyOrSell
