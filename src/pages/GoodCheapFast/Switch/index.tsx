import { useEffect, useRef } from "react";
import "./index.scss";

type PropsType = {
  list: string[];
  text: string;
  updateList: (text: string, isActive: boolean) => void;
};

export default function Switch(props: PropsType) {
  const { list, text, updateList } = props;
  const circleRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);
  let isActive = false;

  const handleClick = () => {
    isActive = !isActive;
    updateList(text, isActive);
  };

  const updateActive = () => {
    switchRef.current!.style.backgroundColor = "blueviolet";
    circleRef.current!.style.left = `calc(100% - 4px)`;
    isActive = true;
  };

  const updateInactive = () => {
    switchRef.current!.style.backgroundColor = "#D0D0D0";
    circleRef.current!.style.left = `50%`;
    isActive = false;
  };

  useEffect(() => {
    if (list.length !== 0) {
      // 如果没有了该文本，就删除
      if (list.indexOf(text) === -1) {
        updateInactive();
      } else {
        updateActive();
      }
    } else {
      updateInactive();
    }
  }, [list]);

  return (
    <div className="switch-wrap">
      <div className="switch-button" onClick={handleClick} ref={switchRef}>
        <div className="white-circle" ref={circleRef}></div>
      </div>
      <p>{text}</p>
    </div>
  );
}
