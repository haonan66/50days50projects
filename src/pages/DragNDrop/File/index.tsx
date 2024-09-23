import React from "react";
import "./index.scss";

export default function File() {
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // 拖拽进入某个元素时，将该元素的边框改为白色的虚线，背景颜色改为黑色
    e.currentTarget.style.border = "2px dashed #fff";
    e.currentTarget.style.backgroundColor = "#000";
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px solid #000";
    e.currentTarget.style.backgroundColor = "#fff";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px dashed #fff";
    e.currentTarget.style.backgroundColor = "#000";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.style.border = "2px solid #000";
    e.currentTarget.style.backgroundColor = "#fff";
    // 当元素被放下时，将放下的区域的cursor设置为 pointer
    e.currentTarget.style.cursor = "pointer";
  };

  return (
    <div
      className="file"
      draggable
      onDrag={(e) => handleDrag(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <input type="file" onClick={(e) => e.preventDefault()} />
    </div>
  );
}
