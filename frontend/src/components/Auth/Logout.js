import { useAuth } from "../../hooks/use-auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const { signoutUserMutation } = useAuth();
  const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;

  const handleClick = async (e) => {
    e.preventDefault();
    signoutUserMutation.mutate();
  };

  return (
    <div class="mr-3 cursor-pointer" onClick={handleClick}>
      {logoutIcon}
      <input type="button" value="Logout" class="ml-1 cursor-pointer" />
    </div>
  );
};

export default Logout;
