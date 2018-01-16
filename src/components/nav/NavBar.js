import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {Navbar, Nav, NavItem } from 'react-bootstrap'
const links = [

  {linkTo: '/shoppingfeed', text: 'Shopping Feed', active: false},
  // {linkTo: '/sellerfeed', text: 'Browse by Seller', active: false},
  {linkTo: '/saleitems', text: 'My Items for Sale', active: false},
  {linkTo: '/sell', text: 'Sell an Item', active: false},
  {linkTo: '/bookmarks', text: 'My Bookmarks', active: false},
  // {linkTo: '/shoppingcart', text: 'My Shopping Cart', active: false},
  // {linkTo: '/logout', text: 'Log Out', active: false}
]

export default class NavBar extends React.Component {

  listLinks = (link, index) => {
    return <li key={index}><NavLink activeClassName='active'  exact to={`${link.linkTo}`}>{link.text}</NavLink></li>
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
    				SMFM
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        {this.props.loggedIn &&

        <Navbar.Collapse >
        <ul className="nav navbar-nav">
          {links.map( this.listLinks )}
        </ul>


        <ul className='nav navbar-nav pull-right' >

          <li>
            <NavLink exact to="/shoppingcart" style={{height: '50px'}}>
              <img src='./ic_shopping_cart_black_24dp_1x.png' />
            </NavLink>
          </li>

          <li>
            <Navbar.Text >
              {this.props.currentUser.name}
            </Navbar.Text>
          </li>

          <NavItem  onClick={this.props.logOut}>
            Log Out
          </NavItem>


        </ul>
        </Navbar.Collapse>

        }

      </Navbar>
    )
  }
}
