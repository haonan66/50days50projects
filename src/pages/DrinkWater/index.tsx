import React, { useRef, useState, useEffect } from "react";
import "./index.scss";

export default function DrinkWater() {
  const [water, setWater] = useState<number>(0);

  const glassesRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    const glasses = glassesRef.current;

    // 获取点击的元素
    const target = e.target as HTMLDivElement;
    // 判断点击的元素是否为 .select-glass-item
    if (target.classList.contains("select-glass-item")) {
      // 如果是该元素，获取点击的是第几个
      const id = +target.dataset.id!;
      // 将该 id 之前的包括 id 在内的元素全部 添加 / 删除 class .select-glass-item-active
      for (let i = 0; i < 8; i++) {
        glasses!.children[i].classList.remove("select-glass-item-active");
      }
      for (let i = 0; i < id; i++) {
        glasses!.children[i].classList.add("select-glass-item-active");
      }
      // 用 250 * id 得出应该存放多少水
      setWater(250 * id);
      // 总高： 320px --> 2L  每次取 250ml ，换算成 px，应为 16px
      (topRef.current! as HTMLDivElement).style.height = 320 - 40 * id + "px";
      (topRef.current! as HTMLDivElement).style.lineHeight =
        320 - 40 * id + "px";

      (bottomRef.current! as HTMLDivElement).style.height = 40 * id + "px";
      (bottomRef.current! as HTMLDivElement).style.lineHeight = 40 * id + "px";
    } else {
      return;
    }
  };

  useEffect(() => {
    glassesRef.current!.addEventListener("click", (e) => {
      handleClick(e);
    });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="all-wrap">
      <div className="container-wrap">
        <div className="top-title">Drink Water</div>
        <div className="tip">Goal: 2 Liters</div>
        <div className="container">
          <div className="top-container" ref={topRef}>
            {((2000 - water) / 1000).toFixed(1)}L Remained
          </div>
          <div className="bottom-container" ref={bottomRef}>
            {(water / 2000) * 100}%
          </div>
        </div>
        <div className="bottom-select-wrap">
          <div className="bottom-tip">
            Select how many glasses of water that you have drank
          </div>
          <div className="select-glass" ref={glassesRef}>
            <div className="select-glass-item" data-id="1">
              250ml
            </div>
            <div className="select-glass-item" data-id="2">
              250ml
            </div>
            <div className="select-glass-item" data-id="3">
              250ml
            </div>
            <div className="select-glass-item" data-id="4">
              250ml
            </div>
            <div className="select-glass-item" data-id="5">
              250ml
            </div>
            <div className="select-glass-item" data-id="6">
              250ml
            </div>
            <div className="select-glass-item" data-id="7">
              250ml
            </div>
            <div className="select-glass-item" data-id="8">
              250ml
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
