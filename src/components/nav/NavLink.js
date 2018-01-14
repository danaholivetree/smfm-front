import React from 'react'
import { NavLink } from 'react-router-dom'

  // <li className={active ? 'active' : ""}> <a href={linkTo}>{text}</a> </li>
const NaviLink = ({text, linkTo, active, showDisplay}) => {

    return (
      <li className={active ? 'active' : ""}><NavLink exact to={`${linkTo}`}>{text}</NavLink></li>
    )

}

export default NaviLink
