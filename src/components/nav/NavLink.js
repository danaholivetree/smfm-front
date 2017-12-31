import React from 'react'

const NavLink = ({text, linkTo, active}) => {

    return(
      <li className={active ? 'active' : ""}> <a href={linkTo}>{text}</a> </li>
    )

}

export default NavLink
