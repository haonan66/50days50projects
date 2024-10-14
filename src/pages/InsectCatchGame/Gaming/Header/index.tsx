import { useEffect, useMemo, useState } from 'react'

interface PropsType {
  score: number
}

export default function Header(props: PropsType) {
  const { score } = props;
  // 累计时间（以 s 为单位）
  const [time, setTime] = useState<number>(0);
  // 计时器
  let timer: number;
  const showTime = useMemo(() => {
    // 显示 xx:xx
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes === 0 ? '00' : minutes < 10 ? `0${minutes}` : minutes
      }: ${seconds < 10 ? '0' : ''}${seconds}`;
  }, [time]);
  const countTime = () => {
    setTime(time => time + 1);
  }

  useEffect(() => {
    timer = +setInterval(countTime, 1000);
    return () => clearInterval(timer as number);
  }, []);
  return (
    <div className="header">
      <div className="left">
        <h2>Time: {showTime}</h2>
      </div>
      <div className="right">
        <h2>Score: {score}</h2>
      </div>
    </div>
  )
}

