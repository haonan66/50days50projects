import React, { useRef, useState } from "react";
import "./index.scss";

export default function BackgroundSlider() {
  const images = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<number>(0);
  const toPrevImage = () => {
    // 如果是第一张图片，则返回最后一张图片
    if (current === 0) {
      setCurrent(images.length - 1);
      containerRef.current!.style.backgroundImage = `url(${
        images[images.length - 1]
      })`;
    } else {
      setCurrent(current - 1);
      containerRef.current!.style.backgroundImage = `url(${
        images[current - 1]
      })`;
    }
  };

  const toNextImage = () => {
    if (current === images.length - 1) {
      setCurrent(0);
      containerRef.current!.style.backgroundImage = `url(${images[0]})`;
    } else {
      setCurrent(current + 1);
      containerRef.current!.style.backgroundImage = `url(${
        images[current + 1]
      })`;
    }
  };

  return (
    <div className="all-wrap" ref={containerRef}>
      <div className="container"></div>
      <div className="mask"></div>
      <div className="left-arrow" onClick={toPrevImage}></div>
      <div className="right-arrow" onClick={toNextImage}></div>
    </div>
  );
}
