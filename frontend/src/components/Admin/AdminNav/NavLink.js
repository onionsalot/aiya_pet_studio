import { Link } from "react-router-dom"

const NavLink = ({ url, text }) => {
  return (
    <Link
      className="text-admin_link2 hover:text-admin_link1 
                  hover:before:content-['>'] before:text-sky-300
                  text-lg"
      to={url}
    >
      {text}
    </Link>
  )
}

export default NavLink
