import { useState } from 'react'
import './index.scss'
import Gaming from './SelectInsct';
import InitShow from './InitShow';

export default function InsectCatchGame() {
  const [isStart, setIsStart] = useState<boolean>(false);

  // 开始游戏
  const start = () => {
    setIsStart(true);
  }

  return (
    <div className='game-insect-wrap'>
      {
        !isStart ? <InitShow start={start} /> : <Gaming />
      }
    </div>
  )
}
