import NavbarLink from "./NavbarLink"

const DesktopNavbar = () => {
  return (
    <nav className="max-w-4xl mx-auto">
      <div className="w-full tracking-wide md:text-lg text-gray-700">
        <div className="h-20 flex items-center flex-row justify-around">
          <NavbarLink to="/app" title="Home" />
          <NavbarLink to="/app/shop-all" title="Shop All" />
          <NavbarLink to="/app/stickers" title="Stickers" />
          <NavbarLink to="/app/art-prints" title="Art Prints" />
          <NavbarLink to="/app/greeting-cards" title="Greeting Cards" />
          <NavbarLink to="/app/contact-us" title="Contact Us" />
        </div>
      </div>
    </nav >
  )
}

export default DesktopNavbar
