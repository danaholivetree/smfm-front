import React from 'react'
import NaviLink from './NavLink'
const links = [

  {linkTo: '/shoppingfeed', text: 'Shopping Feed', active: false},
  {linkTo: '/sellerfeed', text: 'Browse by Seller', active: false},
  {linkTo: '/saleitems', text: 'My Items for Sale', active: false},
  {linkTo: '/sell', text: 'Sell an Item', active: false},
  {linkTo: '/bookmarks', text: 'My Bookmarks', active: false},
  {linkTo: '/shoppingcart', text: 'My Shopping Cart', active: false},
  {linkTo: '/logout', text: 'Log Out', active: false}
]

export default class NavBar extends React.Component {

  listLinks = (link, index) => {
    return <NaviLink text={link.text} linkTo={link.linkTo} key={index} active={link.active}/>
  }

  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              {/* <span className="sr-only">Toggle navigation</span> */}
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href='/'>smfm</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              {links.map( this.listLinks )}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
