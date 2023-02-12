import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { getCurrentUser } from "../../helpers/users-api";
import Cookies from "js-cookie"

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null);

  // sign out the user, memoized
  const signout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    Cookies.remove("_access_token")
    Cookies.remove("_client")
    Cookies.remove("_uid")
  }, []);

  const signin = useCallback((response) => {
    setUser(response.data.data)
    localStorage.setItem('isLoggedIn', true)
    Cookies.set("_access_token", response.headers["access-token"])
    Cookies.set("_client", response.headers["client"])
    Cookies.set("_uid", response.headers["uid"])
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    if (!isLoggedIn) { return setLoading(false) }
    const fetchUser = async () => {
      const response = await getCurrentUser()
      if (response && response.data.is_logged_in) {
        setUser(response.data.data);
      } else {
        signout()
      }
      setLoading(false)
    }
    fetchUser()
  }, []);


  // memoize the full context value
  const contextValue = useMemo(() => ({
    loading,
    user,
    signout,
    signin
  }), [loading, user, signout, signin])

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  // get the context
  const context = useContext(UserContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider");
  }

  return context;
};

export { useUserContext, UserContextProvider };