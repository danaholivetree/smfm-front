import React from 'react'
import {NavLink} from 'react-router-dom'

  // <li className={active ? 'active' : ""}> <a href={linkTo}>{text}</a> </li>
const NaviLink = ({text, linkTo, active, showDisplay}) => {

  // const handleSelect = (e) => {
  //   e.preventDefault()
  //   showDisplay(e.target.dataset.link)
  // }
    return (
      <li className={active ? 'active' : ""}><NavLink exact activeClassName='is-active' to={`${linkTo}`}>{text}</NavLink></li>
    )

}

export default NaviLink
