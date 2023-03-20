import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { BiShoppingBag, BiSearch } from "react-icons/bi"
import { useBoundStore } from "../../../stores/useBoundStore"
import Logout from "../../Auth/Logout"

const TitleBanner = () => {
  const user = useBoundStore((state) => state.user)
  const searchIcon = <BiSearch className="text-2xl" />
  const userIcon = <FontAwesomeIcon icon={faUser} className="text-2xl" />
  const dropdownIcon = <FontAwesomeIcon icon={faCaretDown} className="text-base" />
  const bagIcon = <BiShoppingBag className="text-3xl" />

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
    <div className="w-full h-20 flex justify-between items-center bg-gradient-to-r from-indigo-400 to-pink-200 px-6">
      <h1 className="text-white text-3xl">
        <Link to="/">Aiya Pet Studio</Link>
      </h1>
      <div className="flex text-gray-600">
        <div className="flex border-2 rounded-md border-gray-600 mr-2 px-1">
          <input type="text" className="bg-transparent focus:outline-none"></input>
          <button className="hover:text-indigo-400 ease-in duration-150">{searchIcon}</button>
        </div>
        <div className="group inline-block relative mx-2 mt-1 ">
          <button>
            <span className="hover:text-indigo-400 ease-in duration-150">{userIcon}{dropdownIcon}</span>
          </button>
          <ul className="absolute -left-8 hidden group-hover:block drop-shadow-lg">
            {user ? authenticatedOptions : unauthenticatedOptions}
          </ul>
        </div>
        <Link to="/app/cart" className="hover:text-indigo-400 ease-in duration-150">{bagIcon}</Link>
      </div>
    </div>
  )
}

export default TitleBanner