import { useRef, useState } from "react";
import "./index.scss";

export default function DoubleClickHeart() {
  const [likeNum, setLikeNum] = useState<number>(0);

  const likeRef = useRef<HTMLDivElement>(null);

  const handleDoubleClick = (e: React.MouseEvent) => {
    const like = likeRef.current!;
    e.stopPropagation();
    e.preventDefault();
    setLikeNum(likeNum + 1);
    // 在双击的位置创建一个心形（代表点赞）并让其不断放大，在1s后让其消失
    // 获取用户双击的位置
    const x = e.clientX - like.offsetLeft - 25;
    const y = e.clientY - like.offsetTop - 25;
    // 创建一个元素
    const likeElement = document.createElement("div");
    likeElement.innerText = "♥";
    likeElement.classList.add("like");
    // 改变元素状态
    likeElement.style.left = `${x}px`;
    likeElement.style.top = `${y}px`;
    // 将该元素添加到 body 上
    like.appendChild(likeElement);

    // 1s 后销毁
    setTimeout(() => {
      likeElement.remove();
    }, 1000);
  };

  return (
    <div className="all-wrap">
      <h2>Double click on the image to ❤️ it</h2>
      <p>You liked it {likeNum} times</p>
      <div
        className="img-wrap"
        ref={likeRef}
        onDoubleClick={(e) => handleDoubleClick(e)}
      ></div>
    </div>
  );
}
