import { useWindowSize } from "../WindowSizeContext/WindowSizeContext"
import Announcement from "./Announcement/Announcement"
import DesktopNavbar from "./Navbar/DesktopNavbar"
import TitleBanner from "./TitleBanner/TitleBanner"

const Header = () => {
  const message = "✧ Free shipping on all orders over $15 USD ✧"
  const { width } = useWindowSize()
  const breakpoint = 640

  return (
    <>
      <Announcement message={message} />
      <TitleBanner />
      { width > breakpoint ? <DesktopNavbar /> : "" }
    </>
  )
}

export default Header