import { useRef } from 'react';
import './index.scss'

interface PropsType {
  start: () => void;
}

export default function InitShow(props: PropsType) {
  const { start } = props;
  const showRef = useRef<HTMLDivElement>(null);

  return (
    <div className='init-show' ref={showRef}>
      <h1>Catch The Insect</h1>
      <button onClick={start}>Play Game</button>
    </div>
  )
}
