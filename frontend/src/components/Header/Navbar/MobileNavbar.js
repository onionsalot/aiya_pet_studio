import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from 'react'
import NavbarLink from './NavbarLink'
import SearchBar from '../TitleBanner/SearchBar'

const MobileNavbar = () => {
  const hamburger = <FontAwesomeIcon icon={faBars} className="text-2xl" />
  const xMark = <FontAwesomeIcon icon={faX} className="text-2xl text-indigo-400" />
  const [show, setShow] = useState(false)
  const ref = useRef()

  const handleToggle = () => {
    setShow(!show)
  }

  const triggerClose = () => {
    setShow(false)
  }

  useEffect(() => {
    const triggerClose = e => {
      if (
        show &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', triggerClose)
    return () => {
      document.removeEventListener('mousedown', triggerClose)
    }
  }, [show])

  return (
    <nav ref={ref} className="relative">
      <button className="text-lg mt-1 ml-5 w-5" onClick={handleToggle} >
        {show ? xMark : hamburger}
      </button>
      <div className={`flex flex-col items-center text-lg leading-relaxed absolute -right-2 top-12 w-screen z-10 drop-shadow-lg py-2 bg-violet-50 transition-all opacity-0 -translate-y-2 ${show ? "opacity-100 translate-y-2.5" : ""}`}>
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