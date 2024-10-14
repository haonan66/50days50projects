import { useState } from 'react'
import './index.scss'
import Gaming from '../Gaming';

const datas = [
  {
    id: 1,
    name: 'Fly',
    img: 'http://pngimg.com/uploads/fly/fly_PNG3946.png'
  },
  {
    id: 2,
    name: 'Mosquito',
    img: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png'
  },
  {
    id: 3,
    name: 'Spider',
    img: 'http://pngimg.com/uploads/spider/spider_PNG12.png'
  },
  {
    id: 4,
    name: 'Roach',
    img: 'http://pngimg.com/uploads/roach/roach_PNG12163.png'
  }
]

export type Insect = {
  id: number,
  name: string,
  img: string
}

export default function SelectInsect() {

  const [gaming, setGaming] = useState<boolean>(false);
  // 默认昆虫
  const [insect, setInsect] = useState<Insect>({
    id: 1,
    name: 'Fly',
    img: 'http://pngimg.com/uploads/fly/fly_PNG3946.png'
  });

  const startGame = (e: React.MouseEvent) => {
    // 获取Insect
    const target = e.target as HTMLDivElement;
    if (target.dataset.id || target.parentElement?.dataset.id) {
      const id = +target.dataset.id! ? +target.dataset.id! : +target.parentElement?.dataset.id!;
      setInsect(datas[id - 1]);
      setGaming(true);
    }

  }
  return (
    <>
      {
        !gaming ? <div className='gaming-wrap animate__animated animate__rubberBand'>
          <h1>What is your "favorite" insect?</h1>
          <div className="select-wrap" onClick={(e) => startGame(e)}>
            {
              datas.map(item => (
                <div className="select" key={item.id} data-id={item.id}>
                  <p>{item.name}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))
            }
          </div>
        </div> :
          <Gaming insect={insect} />
      }

    </>

  )
}
