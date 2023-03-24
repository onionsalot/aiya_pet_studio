import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import NavbarLink from './NavbarLink'
import SearchBar from '../TitleBanner/SearchBar'

const MobileNavbar = () => {
  const hamburger = <FontAwesomeIcon icon={faBars} className="text-2xl" />
  const xMark = <FontAwesomeIcon icon={faX} className="text-2xl text-indigo-400" />

  const [show, setShow] = useState(false)

  const handleToggle = () => {
    setShow(!show)
  }

  const triggerClose = () => {
    setShow(false)
  }

  return (
    <nav className="relative">
      <button className="text-lg mt-1 ml-5 w-5" onClick={handleToggle} >
        {show ? xMark : hamburger}
      </button>
      <div className={show ? "flex flex-col items-center absolute right-0 top-14 w-80 z-10 rounded-md drop-shadow-lg py-2 bg-violet-50" : "hidden"}>
        <div className='mb-2 w-full'>
          <SearchBar />
        </div>
        <NavbarLink to="/app" title="Home" func={triggerClose} />
        <NavbarLink to="/app/shop-all" title="Shop All" func={triggerClose} />
        <NavbarLink to="/app/stickers" title="Stickers" func={triggerClose} />
        <NavbarLink to="/app/art-prints" title="Art Prints" func={triggerClose} />
        <NavbarLink to="/app/greeting-cards" title="Greeting Cards" func={triggerClose} />
        <NavbarLink to="/app/contact-us" title="Contact Us" func={triggerClose} />
      </div>
    </nav>
  )
}

export default MobileNavbar