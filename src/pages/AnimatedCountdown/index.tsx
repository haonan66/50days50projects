import { useEffect, useMemo, useRef, useState } from "react";
import "./index.scss";

export default function AnimatedCountdown() {
  const [countdown, setCountdown] = useState(3);
  const numberRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number>();
  const startCountdown = () => {
    timer.current && clearInterval(timer.current);
    setCountdown(3);
    timer.current = +setInterval(() => {
      setCountdown((prev) => {
        if (prev >= 0) {
          return prev - 1;
        } else {
          clearInterval(timer.current as number);
          return -1;
        }
      });
    }, 1000);
  };

  const isEnd = useMemo(() => {
    return countdown === -1;
  }, [countdown]);

  useEffect(() => {
    startCountdown();
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="animated-countdown-wrap">
      <div className="animated-countdown-inner">
        <div className="num-wrap">
          {!isEnd ? (
            <div
              className={`${
                countdown % 2 == 0
                  ? "animate__animated animate__zoomInLeft"
                  : "animate__animated animate__zoomInRight"
              } `}
              ref={numberRef}
            >
              {countdown}
            </div>
          ) : (
            <div className="animate__animated animate__bounceIn">GO</div>
          )}
        </div>
        <div className="info-wrap">
          {!isEnd ? (
            "GET READY"
          ) : (
            <button onClick={startCountdown}>Replay</button>
          )}
        </div>
      </div>
    </div>
  );
}
