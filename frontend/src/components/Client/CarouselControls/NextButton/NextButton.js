import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const NextButton = ({ isDisabled }) => {
  const rightArrow = <FontAwesomeIcon icon={faAngleRight} />

  return (
    <span className={`
      text-indigo-500 
      hover:cursor-pointer
      ${isDisabled ? 'opacity-30' : 'opacity-100'}`}
    >
      {rightArrow}
    </span>
  )
}

export default NextButton