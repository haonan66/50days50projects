import './index.scss'
import type { User } from '..'

type PropsType = {
  user: User
}

export default function User(props: PropsType) {

  const { name, picture, location } = props.user

  return (
    <div className='user-wrap'>
      <div className="left-wrap">
        <img src={picture} />
      </div>
      <div className="right-wrap">
        <div className="name">{name}</div>
        <div className="location">{location}</div>
      </div>
    </div>
  )
}
