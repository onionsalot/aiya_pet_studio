import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const PrevButton = ({ isDisabled }) => {
  const leftArrow = <FontAwesomeIcon icon={faAngleLeft} />

  return (
    <span className={`
      text-indigo-500 
      hover:cursor-pointer 
      ${isDisabled ? 'opacity-30' : 'opacity-100'}`}
    >
      {leftArrow}
    </span>
  )
}

export default PrevButton