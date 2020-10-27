import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51lpm9SpsJL.png"
          alt="Discord logo"
        />
      </div>

      <Button onClick={signIn}>Login</Button>
    </div>
  );
}

export default Login;
