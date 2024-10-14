import './index.scss'
import type { Insect } from '../SelectInsct'
import { useRef, useState } from 'react';
import Header from './Header';
import { nanoid } from 'nanoid';

interface PropsType {
  insect: Insect
}

type insectData = {
  id: string,
  img: string
}

export default function Gaming(props: PropsType) {
  const { insect } = props;

  // 累计得分 
  const [score, setScore] = useState<number>(0);
  // mainRef
  const mainRef = useRef<HTMLDivElement>(null);
  const [insectList, setInsectList] = useState<insectData[]>([{
    id: nanoid(),
    img: insect.img
  }]);

  const eraseInsect = (e: React.MouseEvent) => {
    if ((e.target as HTMLDivElement).tagName === 'IMG') {
      // 获取要删除的昆虫 id
      const id = (e.target as HTMLDivElement).dataset.id!;
      // 删除该 id 对应的昆虫
      let newInsectList = insectList.filter(item => item.id !== id);
      if (newInsectList.length === 0) {
        // 随机生成若干个昆虫
        const random = Math.ceil(Math.random() * 20);
        newInsectList = Array.from({ length: random }).map(_ => {
          return {
            id: nanoid(),
            img: insect.img
          }
        })
      }
      setInsectList(newInsectList);
      setScore(score + 1);
      // 移除该 img
      (e.target as HTMLDivElement).style.opacity = '0';
    }
  };

  return (
    <div className='main-wrap'>
      <Header score={score} />
      <div className="main" ref={mainRef} onClick={(e) => eraseInsect(e)}>
        {
          insectList.map(item => (
            <img
              style={{ left: `${Math.random() * 80}%`, top: `${Math.random() * 80}%` }}
              key={item.id}
              data-id={item.id}
              src={insect.img}
              alt={insect.name}
            />
          ))
        }
      </div>
    </div>
  )
}
