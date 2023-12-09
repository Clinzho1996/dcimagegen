import React from "react";
import { Link } from "react-router-dom";
import { Auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { deflogo } from ".";

function Navbar() {
  const [user] = useAuthState(Auth);
  const navigator = useNavigate();

  const logOut = async () => {
    await signOut(Auth);
    toast.success("Logged out Successfully");
    navigator("/");
  };

  return (
    <header>
      <div className="flex flex-row align-middle items-center gap-3">
        <img className="logo" src={deflogo} alt="logo" />
        <h3 className="hidden md:block">DC ImageGen</h3>
      </div>
      <div className="menu">
        <Link className="link" to="/">
          Home
        </Link>
        {user && (
          <Link className="link" to="/generate">
            Generate
          </Link>
        )}
        {user ? (
          <div className="link">
            <div className="d-flex">
              <img
                className="logo"
                alt={user.displayName}
                src={user.photoURL}
              />
              <button onClick={logOut}>
                <LogoutIcon />
              </button>
            </div>
          </div>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
