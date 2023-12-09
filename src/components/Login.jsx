import React from "react";
import { Auth, Provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();
  const signIn = async () => {
    await signInWithPopup(Auth, Provider)
      .then((res) => {
        toast.success("Login Successful");
        navigator("/");
        console.log(res.json());
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="login-page">
        <h1>Login here!</h1>
        <button onClick={signIn} className="button">
          Sign in with Google
        </button>
      </div>
    </>
  );
}

export default Login;
