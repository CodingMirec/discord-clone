import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";

import "./App.css";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
