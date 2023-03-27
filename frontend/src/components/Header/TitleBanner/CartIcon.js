import { Link } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"
import useScrollPosition from "../../../hooks/use-scroll-position"

const CartIcon = () => {
  const scrollPosition = useScrollPosition()
  const bagIcon = <BiShoppingBag style={{ fontSize: '1.95rem' }} />

  return (
    <Link to="/app/cart" className="hover:text-indigo-400/80 ease-in duration-150">
      <div className={scrollPosition > 110 ? "fixed right-3 top-5 p-3 rounded-full bg-pink-200/90 hover:bg-pink-200 drop-shadow-md transition-all" : ""}>
        <div className="relative">
          {bagIcon}
          <span className="absolute -right-3 -top-1">
            <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500 opacity-70 text-white border-2">
              0
            </div>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CartIcon