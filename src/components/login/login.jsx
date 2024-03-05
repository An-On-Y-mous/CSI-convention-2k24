"use client";
import { FcGoogle } from "react-icons/fc";
import "./login.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import Notallowed from "../qr/status/notallowed";
import { super_admins, food_commitee } from "../../lib/login_access.js";
import allEmails from "../../lib/event_access.js";
const Login = () => {
  const [user] = useAuthState(auth);
  const google = new GoogleAuthProvider();

  const [notVerified, setNotVerified] = useState(false);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, google);
    const email = result.user.email;
    if (
      !super_admins.includes(email) &&
      !allEmails.includes(email) &&
      !food_commitee.includes(email)
    ) {
      setNotVerified(true);
      return await handleLogout();
    }
  };
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div className="parent-login">
      {notVerified ? (
        <Notallowed />
      ) : user ? (
        <div>
          <h1 className="title-login">
            Logged In Successfully as {user?.email}
          </h1>
          <h3 className="signout-login" onClick={handleLogout}>
            Click here to sign out
          </h3>
        </div>
      ) : (
        <h1 className="title-login" onClick={handleLogin}>
          <FcGoogle />
          Login With Google
        </h1>
      )}
    </div>
  );
};

export default Login;
