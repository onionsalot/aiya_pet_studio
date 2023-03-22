import Announcement from "./Announcement/Announcement"
import TitleBanner from "./TitleBanner/TitleBanner"

const Header = () => {
   const message = "✧ Free shipping on all orders over $15 USD ✧"

  return (
    <>
      <Announcement message={message} />
      <TitleBanner />
    </>
  )
}

export default Header