import { Link } from "react-router-dom"

const LinkWrapper = ({ to, title }) => {
  return (
    <Link to={to} className="mb-4" >
      {title}
    </Link>
  )
}

export default LinkWrapper