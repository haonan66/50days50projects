import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

export default function ThemeClock() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [time, setTime] = useState<string>("2:47");
  const [pmOrAm, setPmOrAm] = useState<string>("PM");
  const [prevMin, setPrevMin] = useState<number>(0);
  const [prevHour, setPrevHour] = useState<number>(0);

  const wrapRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsDark(!isDark);
    // 切换主题
    wrapRef.current!.classList.toggle("dark");
  };

  // 定时器函数
  const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    // 旋转秒针
    (
      clockRef.current!.children[2] as HTMLDivElement
    ).style.transform = `rotate(${sec * 6 - 90}deg)`;
    // 判断是否要旋转分针
    if (min !== prevMin) {
      // 旋转分针
      (
        clockRef.current!.children[1] as HTMLDivElement
      ).style.transform = `rotate(${min * 6 - 90}deg)`;
      setPrevMin(min);
    }
    if (hour !== prevHour) {
      // 旋转时针
      (
        clockRef.current!.children[0] as HTMLDivElement
      ).style.transform = `rotate(${hour * 30 - 90}deg)`;
      setPrevHour(hour);
    }

    setTime(`${hour > 12 ? hour - 12 : hour}:${min}`);
    setPmOrAm(hour >= 12 ? "PM" : "AM");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="all-wrap light" ref={wrapRef}>
      <div className="top-button">
        <button onClick={handleClick}>{isDark ? "Light" : "Dark"} mode</button>
      </div>
      <div className="main-content">
        <div className="clock-wrap" ref={clockRef}>
          <div className="hour"></div>
          <div className="min"></div>
          <div className="sec"></div>
        </div>
        <div className="time-wrap">
          <h1>
            {time} {pmOrAm}
          </h1>
          <h5>
            Sunday, Sep <span>22</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
