import React, { useEffect, useState } from "react";
import "./index.scss";

export default function EventKeycode() {
  const [isShowKey, setIsShowKey] = useState<boolean>(false);
  const [key, setKey] = useState<string>("");
  const [keyCode, setKeyCode] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const handleKeyUp = (e: KeyboardEvent) => {
    setIsShowKey(true);
    setKey(e.key);
    setKeyCode(e.keyCode.toString());
    setCode(e.code);
  };
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <div className="container">
      <div className="event-wrapper">
        <div className="event-key-wrap">
          event.key
          <div className="event-key">{key}</div>
        </div>
        <div className="event-keyCode-wrap">
          event.keyCode
          <div className="event-keyCode">{keyCode}</div>
        </div>
        <div className="event-code-wrap">
          event.code
          <div className="event-code">{code}</div>
        </div>
      </div>
    </div>
  );
}
