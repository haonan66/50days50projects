import { useMemo, useState, createContext } from 'react';
import './index.scss'
import Switcher from './Switcher'

// 准备数据
const datas = [
  {
    quote: "I had my concerns that due to a tight deadline this project can't be done.But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline.And when I asked for some revisions he made them in MINUTES.I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    name: 'Jonathan Nunfiez',
    company: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    quote: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    name: 'June Cha',
    company: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg'
  },
  {
    quote: "This guy is a designer and front-end developer. He creates user-friendly interfaces that are easy to navigate and understand. His attention to detail is impeccable, and his designs are beautiful. I highly recommend him for any web development project!",
    name: 'Lawrence Diamond',
    company: 'Graphic Designer',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    quote: "I had the pleasure of working with this guy on a project and I couldn't be happier with the results. He is a talented developer who takes his work seriously and always delivers on time. His attention to detail is unmatched, and his code is clean and well-commented. I would definitely work with him again!",
    name: 'Sophia Johnson',
    company: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    quote: "I had the pleasure of working with this guy on a project and I couldn't be happier with the results. He is a talented developer who takes his work seriously and always delivers on time. His attention to detail is unmatched, and his code is clean and well-commented. I would definitely work with him again!",
    name: 'David Brown',
    company: 'Marketing Manager',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    quote: "I had the pleasure of working with this guy on a project and I couldn't be happier with the results. He is a talented developer who takes his work seriously and always delivers on time. His attention to detail is unmatched, and his code is clean and well-commented. I would definitely work with him again!",
    name: 'Emma Green',
    company: 'Designer',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg'
  },
]

export type Testimonial = {
  quote: string,
  name: string,
  company: string,
  avatar: string
}

// 使用 createContext 方法创建一个上下文对象
export const MsgContext = createContext<{ changeNext: () => void, current: number }>({
  changeNext: () => { }, // 提供一个空函数作为默认值
  current: 0
});

export default function TestimonialBoxSwitcher() {
  // 使用 context 进行祖孙数据传递
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = useMemo(() => datas[currentIndex], [currentIndex]);

  // 切换下一张
  const changeNext = () => {
    setCurrentIndex((currentIndex + 1) % datas.length);
  }

  return (
    <div className='box-wrap'>
      <MsgContext.Provider value={{ changeNext, current: currentIndex }}>
        <div className="switcher-wrap">
          <Switcher testimonial={currentTestimonial} />
        </div>
      </MsgContext.Provider>
    </div>
  )
}
