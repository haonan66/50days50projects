import React, { useEffect, useRef } from "react";
import "./index.scss";

export default function KineticLoader() {
  const loaderRef1 = useRef<HTMLDivElement>(null);
  const loaderRef2 = useRef<HTMLDivElement>(null);

  let deg1 = 0;
  let deg2 = 0;
  let flag = false;

  const rotateLoader = () => {
    const loader1 = loaderRef1.current;
    const loader2 = loaderRef2.current;
    if (!flag) {
      deg1 += 90;
      loader1!.style.transform = `rotate(${deg1}deg)`;
      flag = true;
    } else {
      deg2 += 90;
      loader2!.style.transform = `rotate(${deg2}deg)`;
      flag = false;
    }
  };
  useEffect(() => {
    const timer = setInterval(rotateLoader, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="all-wrap">
      <div className="loader-wrap">
        <div className="loader-1" ref={loaderRef1}></div>
        <div className="loader-2" ref={loaderRef2}></div>
      </div>
    </div>
  );
}
