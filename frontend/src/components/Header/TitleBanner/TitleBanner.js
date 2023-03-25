import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { useBoundStore } from "../../../stores/useBoundStore"
import Logout from "../../Auth/Logout"
import SearchBar from "./SearchBar"
import CartIcon from "./CartIcon"
import logo from "../../../images/logo.png"
import { useWindowSize } from "../../WindowSizeContext/WindowSizeContext"
import MobileNavbar from "../Navbar/MobileNavbar"
import { breakpoint } from "../../../helpers/helper"

const TitleBanner = () => {
  const user = useBoundStore((state) => state.user)
  const { width } = useWindowSize()

  const userIcon = <FontAwesomeIcon icon={faUser} className="text-2xl" />
  const dropdownIcon = <FontAwesomeIcon icon={faCaretDown} />

  const authenticatedOptions = (
    <>
      <li className="rounded-t-md bg-violet-50 py-2 px-4 hover:bg-violet-100 hover:text-indigo-500 block whitespace-nowrap ease-in duration-150">
        <Link to="/app/account">
          My Account
        </Link>
      </li>
      <li className="rounded-b-md bg-violet-50 py-2 px-4 hover:bg-violet-100 hover:text-indigo-500 block whitespace-nowrap ease-in duration-150">
        <Logout />
      </li>
    </>
  )

  const unauthenticatedOptions = (
    <>
      <li className="rounded-t-md bg-violet-50 py-2 px-4 hover:bg-violet-100 hover:text-indigo-500 block whitespace-nowrap ease-in duration-150">
        <Link to="/app/login">
          Log In
        </Link>
      </li>
      <li className="rounded-b-md bg-violet-50 py-2 px-4 hover:bg-violet-100 hover:text-indigo-500 block whitespace-nowrap ease-in duration-150">
        <Link to="/app/login">
          Register
        </Link>
      </li>
    </>
  )

  return (
    <div className="w-full h-20 flex justify-between items-center bg-gradient-to-r from-indigo-400 to-pink-200 px-4 sm:px-6">
      <h1 className="text-white text-3xl">
        <Link to="/">
          <img src={logo} alt="Logo" className="drop-shadow-md" />
        </Link>
      </h1>
      <div className="flex flex-row text-gray-700">
        {width > breakpoint ? <SearchBar /> : ""}
        <div className="group inline-block relative mx-2 mt-1 ">
          <button className="hover:text-indigo-400 ease-in duration-150 inline-block">
            <span>{userIcon}{dropdownIcon}</span>
          </button>
          <ul className="absolute -left-8 hidden group-hover:block drop-shadow-lg group-hover:z-20">
            {user ? authenticatedOptions : unauthenticatedOptions}
          </ul>
        </div>
        <CartIcon />
        {width <= breakpoint ? <MobileNavbar /> : ""}
      </div>
    </div>
  )
}

export default TitleBanner