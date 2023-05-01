import LinkWrapper from '../Client/LinkWrapper/LinkWrapper'
import Instagram from "../Client/Social/Instagram"

const Footer = () => {
  return (
    <>
      <div className='bg-transparent h-8'></div>
      <div className=" mt-auto bg-indigo-400 text-white">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="flex justify-evenly mt-4 md:w-96 md:items-center md:justify-around">
              <div className="flex flex-col">
                <h5 className="text-xl mb-2">ABOUT</h5>
                <LinkWrapper to="#" title="Reviews" />
                <LinkWrapper to="#" title="Our Story" />
                <LinkWrapper to="#" title="Careers" />
              </div>
              <div className="flex flex-col">
                <h5 className="text-xl mb-2">SUPPORT</h5>
                <LinkWrapper to="#" title="Contact Us" />
                <LinkWrapper to="#" title="Shipping" />
                <LinkWrapper to="#" title="Returns" />
              </div>
            </div>
            <div className="mx-auto md:flex md:items-center md:justify-center md:basis-1/6">
              <Instagram />
            </div>
            <img src="https://i.etsystatic.com/24762991/r/il/9f62c0/3430721950/il_794xN.3430721950_4c7c.jpg"
              className="mt-5 mx-auto w-80 h-48 object-cover rounded-md" />
          </div>
        </div>
        <div className="mt-2 p-2 text-sm text-center">Copyright &copy; 2023, Aiya Pet Studio</div>
      </div>
    </>
  )
}

export default Footer