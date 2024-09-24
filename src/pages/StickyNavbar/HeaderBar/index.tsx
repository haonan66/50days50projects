import { useRef } from "react";
import "./index.scss";
import _ from "lodash";

export default function HeaderBar() {
  const haederRef = useRef<HTMLDivElement>(null);

  // 为滚动事件添加防抖
  const handleScroll = _.debounce(() => {
    const position = window.scrollY; // 或者使用其他合适的滚动位置获取方式
    if (position > 100) {
      haederRef.current!.classList.add("light");
      haederRef.current!.classList.remove("dark");
    } else {
      haederRef.current!.classList.add("dark");
      haederRef.current!.classList.remove("light");
    }
  }, 100); // 调整等待时间以适合具体需求

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="header-wrap dark" ref={haederRef}>
      <div className="header-bar-wrap">
        <div className="header-bar-left">My Website</div>
        <ul className="header-bar-right">
          <li className="active">Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
