import React, { useEffect, useMemo, useReducer, useRef } from "react";
import "./index.scss";

type PropsType = {
  id: number;
  title: string;
  picture: string;
  rate: number;
  overview: string;
};

export default function Card(props: PropsType) {
  const { title, picture, rate, overview } = props;
  const overviewRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    // 鼠标移入卡片内，overview 显示
    const height = overviewRef.current!.offsetHeight;
    let current = 0;
    const animation = () => {
      // 在 2s 内，将 overview 向上平移 height
      const step = height / 20;
      current += step;
      if (current < height) {
        overviewRef.current!.style.transform = `translateY(-${current}px)`;
        animation();
      } else {
        cancelAnimationFrame(animationId);
      }
    };
    const animationId = requestAnimationFrame(animation);
  };

  const handleMouseLeave = () => {
    // 与鼠标移入操作相反
    const height = overviewRef.current!.offsetHeight;
    let current = height;
    const animation = () => {
      // 在 2s 内，将 overview 向下平移 height
      const step = height / 20;
      current -= step;
      if (current < height!) {
        overviewRef.current!.style.transform = `translateY(-${current}px)`;
        animation();
      } else {
        cancelAnimationFrame(animationId);
      }
    };
    const animationId = requestAnimationFrame(animation);
  };

  return (
    <div
      className="card-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="top-picture">
        <img src={picture} alt="iamge..." />
      </div>
      <div className="bottom-content">
        <div className="title">{title}</div>
        <div className="rate">{rate}</div>
      </div>
      <div className="overview-wrap" ref={overviewRef}>
        <h1 className="overview-title">Overview</h1>
        <div className="overview-content">{overview}</div>
      </div>
    </div>
  );
}
