import { useWindowSize } from "../WindowSizeContext/WindowSizeContext"
import Announcement from "./Announcement/Announcement"
import DesktopNavbar from "./Navbar/DesktopNavbar"
import TitleBanner from "./TitleBanner/TitleBanner"
import { breakpoint } from "../../helpers/helper"

const Header = () => {
  const message = "✧ Free shipping on all orders over $15 USD ✧"
  const { width } = useWindowSize()

  return (
    <>
      <Announcement message={message} />
      <TitleBanner />
      { width > breakpoint.sm ? <DesktopNavbar /> : "" }
    </>
  )
}

export default Header