import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://thumbs.videogamer.com/xmcnMlgYHBbiPdUUopmJB2k611c=/1920x1080/smart/https://s.videogamer.com/meta/3a28/921faa33-665a-40b8-ad99-0908681ec7a6_Discord.jpg"
          alt="Discord logo"
        />
      </div>

      <Button onClick={signIn}>Login</Button>
    </div>
  );
}

export default Login;
