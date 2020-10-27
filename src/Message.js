import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Mirec
          <span className="message__timestamp">this is a timestamp</span>
        </h4>
        <p>Some random message</p>
      </div>
    </div>
  );
}

export default Message;
