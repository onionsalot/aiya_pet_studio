import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSquareCheck,
  faSquareXmark
} from "@fortawesome/free-solid-svg-icons";

const Checkmark = ({ bool }) => {
  const checkBox = <FontAwesomeIcon icon={faSquareCheck} />;
  const xBox = <FontAwesomeIcon icon={faSquareXmark} />;
  return ( 
    <>
      {
        bool
        ? <span className="text-green-600">{checkBox}</span>
        : <span className="text-red-600">{xBox}</span>
      }
    </>
   );
}
 
export default Checkmark;