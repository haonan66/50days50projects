import type { Testimonial } from '..'
import './index.scss'
import ProgressStep from '../ProgressStep'

type PropsType = {
  testimonial: Testimonial
}

export default function Switcher(props: PropsType) {
  const { testimonial } = props;
  return (
    <div className='wrap'>
      <h1>”</h1>
      <div className="main-wrap">
        {/* 进度条 */}
        <ProgressStep />
        <p>{testimonial.quote}</p>
        <div className="bottom-wrap">
          <img src={testimonial.avatar} alt="avatar" />
          <div className="right-info">
            <p>{testimonial.name}</p>
            <p>{testimonial.company}</p>
          </div>
        </div>
      </div>
      <h1>“</h1>
    </div>
  )
}
