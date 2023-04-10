import { BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom";

const Instagram = () => {
  return (
    <Link className="flex mb-2 mt-4" to="https://www.instagram.com/aiyapetstudio/">Follow us on <BsInstagram className="ml-2 text-xl" /></Link>
  );
}
 
export default Instagram;