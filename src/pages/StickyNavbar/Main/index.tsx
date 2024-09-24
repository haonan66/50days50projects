import React from "react";
import "./index.scss";
import Slider from "./Slider";
import Content from "./Content";

export default function Main() {
  return (
    <div className="main-wrap">
      <Slider />
      <Content />
    </div>
  );
}
