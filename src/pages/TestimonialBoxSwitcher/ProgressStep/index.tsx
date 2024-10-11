import { useContext, useEffect, useRef } from 'react';
import { MsgContext } from '..';
import './index.scss'

export default function ProgressStep() {

  const stepRef = useRef<HTMLDivElement>(null);
  const stepWrapRef = useRef<HTMLDivElement>(null);
  // 默认动画时长：5s
  const duration = 5;

  // 通过 useContext 钩子函数使用数据
  const { changeNext, current } = useContext(MsgContext);
  let animationId = useRef(0);


  const startIncrease = () => {
    const stepNode = stepRef.current!;
    const stepWrapNode = stepWrapRef.current!;
    const stepWrapLength = stepWrapNode.offsetWidth;
    const stepWrap = stepWrapLength / duration;
    stepNode.style.width = `${0}px`;
    if (stepNode.offsetWidth < stepWrapLength) {
      stepNode.style.display = 'block';
      stepNode.style.width = `${stepWrap + stepNode.offsetWidth}px`;
    } else {
      stepNode.style.display = 'none';
      stepNode.style.width = `${0}px`;
      changeNext();
    }
    animationId.current = requestAnimationFrame(startIncrease);
  }

  useEffect(() => {
    // 调用动画
    startIncrease();
    return () => {
      cancelAnimationFrame(animationId.current);
    }
  }, [current]);

  return (
    <div className='step-wrap' ref={stepWrapRef}>
      <div className="step" ref={stepRef}></div>
    </div>
  )
}
