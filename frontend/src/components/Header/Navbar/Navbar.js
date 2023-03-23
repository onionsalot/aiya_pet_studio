import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <nav className="h-20 w-full max-w-4xl flex justify-around items-center text-lg tracking-wide">
        <NavLink to="/app" className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} end>
          Home
          <span className="gradient-underline"></span>
        </NavLink>
        <NavLink to="/app/shop-all" className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} end>
          Shop All
          <span className="gradient-underline"></span>
        </NavLink>
        <NavLink to="/app/stickers" className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} end>
          Stickers
          <span className="gradient-underline"></span>
        </NavLink>
        <NavLink to="/app/art-prints" className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} end>
          Art Prints
          <span className="gradient-underline"></span>
        </NavLink>
        <NavLink to="/app/greeting-cards" className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} end>
          Greeting Cards
          <span className="gradient-underline"></span>
        </NavLink>
        <NavLink to="/app/contact-us" className={({ isActive }) => isActive ? "active-nav-link" : "group relative"} end>
          Contact Us
          <span className="gradient-underline"></span>
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
