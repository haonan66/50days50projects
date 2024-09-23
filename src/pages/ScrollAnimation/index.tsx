import { useEffect, useRef } from "react";
import _ from "lodash";
import Content from "./Content";
import "./index.scss";

export default function ScrollAnimation() {
  const N = 10;
  const allRef = useRef<HTMLDivElement>(null);

  const throttleScroll = useRef<EventListener>(
    _.throttle(() => {
      const childrens = allRef.current?.children;
      const triggerBottom = (window.innerHeight / 5) * 4;
      for (let i = 1; i < childrens!.length; i++) {
        // 如果 document 对象没有 style 属性，原因是类型检查，因为你设置的 ref 为 HTMLDivElement 类型，所以这里需要断言为 HTMLElement 类型
        // 只有 HTMLElement 类型才有 style 属性
        const item = childrens![i] as HTMLElement;
        // 处理 item
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          item.style.transform = `translateX(0px)`;
        } else {
          item.style.transform = `translateX(${i % 2 ? "-9999px" : "9999px"})`;
        }
      }
    }, 100)
  ).current;

  useEffect(() => {
    // 页面加载完
    const childrens = allRef.current?.children;
    const triggerBottom = (window.innerHeight / 5) * 4;
    for (let i = 1; i < childrens!.length; i++) {
      // 如果 document 对象没有 style 属性，原因是类型检查，因为你设置的 ref 为 HTMLDivElement 类型，所以这里需要断言为 HTMLElement 类型
      // 只有 HTMLElement 类型才有 style 属性
      const item = childrens![i] as HTMLElement;
      // 处理 item
      const boxTop = item.getBoundingClientRect().top;
      // 滚动到触发点
      if (boxTop < triggerBottom) {
        item.style.transform = `translateX(0px)`;
      } else {
        item.style.transform = `translateX(${i % 2 ? "-9999px" : "9999px"})`;
      }
    }
    // 监听页面滚动事件
    window.addEventListener("scroll", throttleScroll);
    return () => {
      // 解绑页面滚动监听事件
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return (
    <>
      <div className="all-wrapper" ref={allRef}>
        <h1>Scroll to see the animation</h1>
        {Array.from({ length: N }).map((_, i) => (
          <div className="all-content-wrapper" key={i}>
            <Content />
          </div>
        ))}
      </div>
    </>
  );
}
