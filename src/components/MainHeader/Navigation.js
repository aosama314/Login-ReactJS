import React, { useContext } from "react";
import AuthContext from "../../ContextStore/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  // console.log(authCtx);
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
