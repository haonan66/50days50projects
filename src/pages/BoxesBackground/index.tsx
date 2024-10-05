import { useEffect, useRef, useState } from 'react'
import './index.scss'

export default function BoxesBackground() {

  // 是否点击了 Magic 按钮
  const [isMagic, setIsMagic] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // isMagic 为 false 表示 16 个小方块分隔开，为 true 表示 16 个小方块拼接到一块
    const childrens = boxRef.current!.children;
    if (isMagic) {
      for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
          (childrens[(i - 1) * 4 + j - 1] as HTMLDivElement).style.margin = '0';
          (childrens[(i - 1) * 4 + j - 1] as HTMLDivElement).style.transform = 'rotate(360deg)';
        }
      }
    } else {
      for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
          (childrens[(i - 1) * 4 + j - 1] as HTMLDivElement).style.margin = '5px';
          (childrens[(i - 1) * 4 + j - 1] as HTMLDivElement).style.transform = 'rotate(0)';
          (childrens[(i - 1) * 4 + j - 1] as HTMLDivElement).style.backgroundPosition = `-${(j - 1) * 125}px -${(i - 1) * 125}px`;
        }
      }
    }
  }, [isMagic])


  return (
    <div className='box-background-wrap'>
      <div className="fixed-button">
        <button onClick={() => setIsMagic(!isMagic)}>Magic 👩🏿</button>
      </div>
      <div className="main-box-wrap" ref={boxRef}>
        {
          Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className='box'></div>
          ))
        }
      </div>
    </div>
  )
}
