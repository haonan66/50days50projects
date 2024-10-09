import { useCallback, useEffect, useRef, useState } from 'react'
import './index.scss'

export default function Slider() {

  const [stage, setStage] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);


  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [left, setLeft] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // 开始拖拽事件
  const startDrag = (e: React.MouseEvent) => {
    // 鼠标按下时记录鼠标位置和圆型位置
    setInitialMouseX(e.clientX);
    setInitialX(left);
    setIsDragging(true);
  }

  // 拖拽中事件
  const dragging = (e: MouseEvent) => {
    // 只有在拖拽中才执行
    if (isDragging) {
      // 鼠标移动时计算鼠标位置和圆型位置的差值，并移动圆型
      const mouseX = e.clientX;
      setDeltaX(mouseX - initialMouseX);
      let l = initialX + deltaX;
      // 更新 left 值
      setLeft(() => {
        if (l >= 280) {
          return 280;
        } else if (l <= 0) {
          return 0;
        } else {
          return l;
        }
      })
      // 更新元素的位置及stage
      change();
    }
  }

  // 停止拖拽事件
  const stopDrag = () => {
    setIsDragging(false);
    window.removeEventListener('mouseup', stopDrag);
    window.removeEventListener('mousemove', dragging);
  }

  // 点击进度条某一位置让圆形按钮移动到该位置
  const changePoisition = (e: React.MouseEvent) => {
    console.log(121323)
    const slider = sliderRef.current! as HTMLDivElement;
    console.log(e.clientX);
    console.log(slider.offsetLeft);
    let mouseX = e.clientX - slider.offsetLeft;
    if (mouseX > 280) {
      mouseX = 280;
    } else if (mouseX < 0) {
      mouseX = 0;
    }
    setLeft(mouseX);
    // 更新元素的位置及stage
    change(mouseX);
  }

  // 监听 left 改变
  const change = useCallback((mouseX?: number) => {
    const circle = circleRef.current! as HTMLDivElement;
    const tip = tipRef.current! as HTMLDivElement;
    setStage(Math.round((mouseX ? mouseX : left) / 280 * 100));
    circle.style.transform = `translateX(${mouseX ? mouseX : left}px)`;
    tip.style.transform = `translateX(${mouseX ? mouseX : left}px)`;
  }, [left])

  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('mousemove', dragging);

  useEffect(() => {
    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('mousemove', dragging);
    }
  }, []);

  return (
    <div className='slider-wrap' ref={sliderRef} onClick={(e) => changePoisition(e)}>
      <div className="circle" ref={circleRef} onMouseDown={(e) => startDrag(e)} ></div>
      <div className="tip" ref={tipRef}>{stage}</div>
    </div >
  )
}