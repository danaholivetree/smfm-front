import React from 'react'
import NaviLink from './NavLink'
import { NavLink } from 'react-router-dom'
import {Navbar } from 'react-bootstrap'
const links = [

  {linkTo: '/shoppingfeed', text: 'Shopping Feed', active: false},
  // {linkTo: '/sellerfeed', text: 'Browse by Seller', active: false},
  {linkTo: '/saleitems', text: 'My Items for Sale', active: false},
  {linkTo: '/sell', text: 'Sell an Item', active: false},
  {linkTo: '/bookmarks', text: 'My Bookmarks', active: false},
  {linkTo: '/shoppingcart', text: 'My Shopping Cart', active: false},
  {linkTo: '/logout', text: 'Log Out', active: false}
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
      				<a href="/#">SMFM</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav">
              {links.map( this.listLinks )}
            </ul>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
