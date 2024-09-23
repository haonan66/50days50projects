import { useEffect, useRef } from "react"
import SvgIcon from "@/components/SvgIcon"
import './index.scss'

type PropsType = {
    isExpanding: boolean,
}

export default function Nav(props: PropsType) {

  const { isExpanding } = props
  const navRef = useRef<HTMLUListElement>(null)
  
  useEffect(() => {
    if (isExpanding) {              
        navRef.current!.style.transform = `translateX(0px)`;
    } else {
        navRef.current!.style.transform = `translateX(-200px)`;
    }
  }, [isExpanding])
  
  return (
    <>
        <ul className="nav-wrapper" ref={navRef}>
           <li>
            <SvgIcon name='home' size="30px" />
            <span>&nbsp;&nbsp;Home</span>
           </li>
           <li>
            <SvgIcon name='user' size="30px" />
            <span>&nbsp;&nbsp;About</span>
           </li>
           <li>
            <SvgIcon name='email-fill' size="30px" />
            <span>&nbsp;&nbsp;Concat</span> 
           </li> 
        </ul>
    </>
  )
}
