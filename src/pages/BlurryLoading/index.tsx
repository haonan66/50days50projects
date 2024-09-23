import { useEffect, useReducer, useRef, useState } from 'react'
import './index.scss'


export default function BlurryLoading() {
    // const reducer = (state: {blur: number, n: number, opacity: number}, action: any) => {
    //     const {blur, n, opacity} = state
    //     switch(action.type) {
    //         case 'change':
    //             return {
    //                 blur: blur - 0.1,
    //                 n: n - 1,
    //                 opacity: opacity - 0.01
    //             }
    //         default: 
    //             return state
    //     }
    // }

//   const [state, dispatch] = useReducer(reducer, {
//     blur: 10,
//     n: 100,
//     opacity: 1
//   })
  const [blur, setBlur] = useState(10)
  const [n, setN] = useState(100)
  const [opacity, setOpacity] = useState(1)
  const bgRef = useRef<HTMLDivElement>(null)
  const cutdownRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<any>()
  useEffect(() => {
    // 定时器
    timerRef.current = setInterval(() => {
        setBlur((prevBlur) => {  
            const newBlur = prevBlur - 0.1;  
            if (newBlur < 0) {  
              bgRef.current!.style.filter = `blur(0px)`;  
              clearInterval(timerRef.current);  
              return 0; // 确保 blur 不会变成负数  
            }  
            bgRef.current!.style.filter = `blur(${newBlur}px)`;  
            return newBlur;  
          });  
      
          setN((prevN) => {  
            const newN = prevN - 1;  
            if (newN < 0) {  
              clearInterval(timerRef.current);  
              return 0; // 确保 n 不会变成负数  
            }  
            return newN;  
          });  
      
          setOpacity((prevOpacity) => {  
            const newOpacity = prevOpacity - 0.01;  
            if (newOpacity < 0) {  
              cutdownRef.current!.style.opacity = '0';  
              clearInterval(timerRef.current);  
              return 0; // 确保 opacity 不会变成负数  
            }  
            cutdownRef.current!.style.opacity = `${newOpacity}`;  
            return newOpacity;  
          });  
    }, 100)
    return () => {
        clearInterval(timerRef.current)
    }
  }, [])

  return (
    <>
        <div className='bg' ref={bgRef}></div>
        <div className='cutdown' ref={cutdownRef}>{n}%</div>
    </>
  )
}
