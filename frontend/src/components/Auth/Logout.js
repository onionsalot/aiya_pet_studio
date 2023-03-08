import { useAuth } from "../../hooks/use-auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const { signoutUserMutation } = useAuth();
  const logoutIcon = (
    <FontAwesomeIcon icon={faRightFromBracket} className="logout-icon" />
  );

  const handleClick = async (e) => {
    e.preventDefault();
    signoutUserMutation.mutate();
  };

  return (
    <div className="logout-button" onClick={handleClick}>
      {logoutIcon}
      <input type="button" value="Logout" />
    </div>
  );
};

export default Logout;
