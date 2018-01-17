import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, Badge } from 'react-bootstrap'
const links = [

  {linkTo: '/shoppingfeed', text: 'Shopping Feed', active: false},
  // {linkTo: '/sellerfeed', text: 'Browse by Seller', active: false},
  {linkTo: '/saleitems', text: 'My Items for Sale', active: false},
  {linkTo: '/sell', text: 'Sell an Item', active: false},
  {linkTo: '/bookmarks', text: 'My Bookmarks', active: false},
  // {linkTo: '/shoppingcart', text: 'My Shopping Cart', active: false},
  // {linkTo: '/logout', text: 'Log Out', active: false}
]

const NavBar = ({loggedIn, currentUser, logOut, cart}) => {

  const listLinks = (link, index) => {
    return <li key={index}><NavLink activeClassName='active'  exact to={`${link.linkTo}`}>{link.text}</NavLink></li>
  }


  const cartCount = cart.reduce( (acc, curr) => {
    console.log('cart ', cart);
    console.log('acc ', acc);
    console.log('curr.cartQuantity ', curr.cartQuantity);
    return acc += curr.cartQuantity
  }, 0)


    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand style={{color:'pink'}}>
    				SMFM
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        {loggedIn &&

        <Navbar.Collapse >
        <ul className="nav navbar-nav">
          {links.map( listLinks )}
        </ul>


        <ul className='nav navbar-nav pull-right' >

          <li>
            <NavLink exact to="/shoppingcart" style={{height: '50px'}}>
              <img src='./ic_shopping_cart_black_24dp_1x.png' />
              <Badge>{cartCount}</Badge>

            </NavLink>
          </li>

          <li>
            <Navbar.Text style={{color:'pink'}}>
              {currentUser.name}
            </Navbar.Text>
          </li>

          <NavItem  onClick={logOut}>
            Log Out
          </NavItem>


        </ul>
        </Navbar.Collapse>

        }

      </Navbar>
    )

}
export default NavBar
