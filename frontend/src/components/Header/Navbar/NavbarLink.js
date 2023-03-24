import { NavLink } from "react-router-dom"

const NavbarLink = ({ to, title, func }) => {
  return (
    <NavLink to={to} className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} onClick={func} end>
      {title}
      <span className="gradient-underline"></span>
    </NavLink>
  )
}

export default NavbarLink