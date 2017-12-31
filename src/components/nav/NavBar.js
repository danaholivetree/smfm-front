import React from 'react'
import NavLink from './NavLink'
const links = [
  {linkTo: 'sell', text: 'Sell an Item', active: false},
  {linkTo: 'shoppingFeed', text: 'Shopping Feed', active: false},
  {linkTo: 'sellerFeed', text: 'Browse by Seller', active: false},
  {linkTo: 'saleItems', text: 'My Items for Sale', active: false},
  {linkTo: 'bookmarks', text: 'My Bookmarks', active: false},
  {linkTo: 'shoppingCart', text: 'My Shopping Cart', active: false},
  {linkTo: 'logout', text: 'Log Out', active: false}
]

export default class NavBar extends React.Component {

  listLinks = (link, index) => {
    return <NavLink text={link.text} linkTo={link.linkTo} key={index} active={link.active} showDisplay={this.props.showDisplay}/>
  }

  render() {
    return(
      <nav className="navbar navbar-default" style={{background: this.props.bgColor}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              {/* <span className="sr-only">Toggle navigation</span> */}
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href='#'>smfm</a>
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
