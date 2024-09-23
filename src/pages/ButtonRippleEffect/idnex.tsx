import React from "react";
import "./index.scss";

export default function ButtonRippleEffect() {
  const handleClick = (e: React.MouseEvent) => {
    // 获取到点击的位置
    const button = e.target as HTMLButtonElement;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    button.appendChild(circle);

    let step = 0;
    const animation = () => {
      step += 2;
      // 通过缩放来实现该效果
      circle.style.transform = `scale(${step})`;
      requestAnimationFrame(animation);
      if (step > 30) {
        cancelAnimationFrame(animationId);
        circle.remove();
      }
    };
    const animationId = requestAnimationFrame(animation);
  };
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>CLICK ME</button>
    </div>
  );
}
