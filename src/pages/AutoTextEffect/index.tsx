import { useEffect, useRef, useState } from "react";
import "./index.scss";

const text = "We Love Programming!";

export default function AutoTextEffect() {
  const textRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState<number>(1);

  let startTime: number | null = null;
  const typing = (timestamp: number, animationDuration: number) => {
    const textLength = text.length;
    const textNode = textRef.current!;
    // 记录动画开始时间
    !startTime && (startTime = timestamp);
    // 计算动画的经过时间
    const elapsedTime = timestamp - startTime!;
    // 计算动画的进度
    const progress = Math.min(elapsedTime / animationDuration, 1);
    const currentText = text.slice(0, Math.floor(progress * textLength));
    textNode.textContent = currentText;
    if (currentText.length >= textLength) {
      startTime = timestamp;
      textNode.textContent = "";
    }
    requestAnimationFrame((timestamp) => typing(timestamp, animationDuration));
  };

  useEffect(() => {
    let animationDuration: number = (11 - speed) * 500;
    requestAnimationFrame((timestamp) => typing(timestamp, animationDuration));
  }, [speed]);
  return (
    <div className="all-wrap">
      <div className="text-wrap" ref={textRef}></div>
      <div className="footer">
        <span>Speed：</span>
        <input
          type="number"
          max={10}
          min={1}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
