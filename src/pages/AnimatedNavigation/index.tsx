import React, { useRef, useState } from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";
export default function AnimatedNavigation() {
  const [isClick, setIsClick] = useState<boolean>(false);

  const middleNavigatorRef = useRef<HTMLUListElement>(null);
  const handleClick = () => {
    if (isClick) {
      middleNavigatorRef.current!.style.flexDirection = "row";
      middleNavigatorRef.current!.style.width = "350px";
      for (let i = 0; i < middleNavigatorRef.current!.children.length; i++) {
        const el = middleNavigatorRef.current!.children[i] as HTMLLIElement;
        el.style.transform = "rotateY(-360deg) ";
      }
    } else {
      middleNavigatorRef.current!.style.flexDirection = "row-reverse";
      middleNavigatorRef.current!.style.width = "60px";
      for (let i = 0; i < middleNavigatorRef.current!.children.length; i++) {
        const el = middleNavigatorRef.current!.children[i] as HTMLLIElement;
        el.style.transform = "rotateY(360deg) translateX(270px)";
      }
    }
    setIsClick(!isClick);
  };
  return (
    <div className="all-wrap">
      <div className="top-bg"></div>
      <div className="bottom-bg"></div>
      <ul className="middle-navigator" ref={middleNavigatorRef}>
        <li className="middle-navigator-item">Home</li>
        <li className="middle-navigator-item">About</li>
        <li className="middle-navigator-item">Works</li>
        <li className="middle-navigator-item">Contact</li>
        <li className="icon" onClick={handleClick}>
          {isClick ? (
            <SvgIcon name="cascader" color="skyblue" />
          ) : (
            <SvgIcon name="close" color="skyblue" />
          )}
        </li>
      </ul>
    </div>
  );
}
