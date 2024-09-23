import React, { useRef, useState } from "react";
import "./index.scss";

export default function DrawingApp() {
  const cavasRef = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const [num, setNum] = useState<number>(5);

  // 在 cavas 上用户鼠标拖拽时，绘制图形
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    // 当鼠标按下时，获取鼠标的坐标
    const { offsetX, offsetY } = e.nativeEvent;
    // 获取 cavas 元素
    const cavas = cavasRef.current;
    if (cavas) {
      // 获取 cavas 的上下文
      const ctx = cavas.getContext("2d");
      // 绘制线段
      if (ctx) {
        // 设置画笔
        ctx.strokeStyle = colorRef.current!.value;
        ctx.beginPath();
        ctx.lineWidth = num;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.moveTo(offsetX, offsetY);
        // 监听鼠标移动事件，绘制连续的线段
        cavas.onmousemove = (e) => {
          // 获取鼠标坐标
          const { offsetX, offsetY } = e;
          // 绘制线段
          ctx.lineTo(offsetX, offsetY);
          ctx.stroke();
        };
        // 监听鼠标松开事件，结束绘制
        cavas.onmouseup = () => {
          cavas.onmousemove = null;
          cavas.onmouseup = null;
        };
      }
    }
  };

  const handleFWDecrease = (type: string) => {
    if (type === "decrease") {
      if (num > 5) {
        setNum(num - 5);
      } else {
        setNum(5);
      }
    } else {
      if (num < 15) {
        setNum(num + 5);
      } else {
        setNum(15);
      }
    }
  };

  const handleClear = () => {
    // 清除 cavas 里面的内容
    const cavas = cavasRef.current!;
    // 获取 cavas 的上下文
    const ctx = cavas.getContext("2d");
    ctx!.clearRect(0, 0, cavas.width, cavas.height);
  };

  return (
    <div className="all-wrap">
      <div className="cavas-wrap">
        <canvas
          ref={cavasRef}
          id="canvas"
          width="700"
          height="600"
          onMouseDown={(e) => handleMouseDown(e)}
        ></canvas>
        <div className="tool-bar">
          <div className="left-tool">
            <button onClick={() => handleFWDecrease("decrease")}>-</button>
            <button>{num}</button>
            <button onClick={() => handleFWDecrease("increase")}>+</button>
            <input type="color" ref={colorRef} />
          </div>
          <div className="right-tool">
            <button onClick={handleClear}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
