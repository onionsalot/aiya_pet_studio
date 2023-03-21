import { Link } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"

const CartIcon = () => {
  const bagIcon = <BiShoppingBag style={{fontSize: '1.95rem'}} />

  return (
    <Link to="/app/cart" className="relative hover:text-indigo-400 ease-in duration-150">
      {bagIcon}
      <span class="absolute -right-3 -top-1">
        <div class="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500 opacity-70 text-white border-2">
          0
        </div>
      </span>
    </Link>
  )
}

export default CartIcon;