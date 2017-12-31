import React from 'react'

  // <li className={active ? 'active' : ""}> <a href={linkTo}>{text}</a> </li>
const NavLink = ({text, linkTo, active, showDisplay}) => {

  const handleSelect = (e) => {
    e.preventDefault()
    showDisplay(e.target.dataset.link)
  }
    return(
      <li className={active ? 'active' : ""}  onClick={handleSelect}><a href='#' data-link={`${linkTo}`}>{text}</a></li>
    )

}

export default NavLink
