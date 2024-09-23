import SvgIcon from '@/components/SvgIcon'
import './index.scss'
import { useRef, useState } from 'react'

export default function HiddenSearchWidget() {
 
  const inputRef = useRef<HTMLInputElement>(null)
  const [isExpanding, setIsExpanding] = useState<boolean>(true)
  const search = () => {
    console.log(111)
    setIsExpanding(!isExpanding)
    if (isExpanding) {
        inputRef.current!.focus()
        inputRef.current!.style.width = '200px'
        inputRef.current!.style.paddingLeft = '10px'
    } else {
        inputRef.current!.style.width = '0px'
        inputRef.current!.style.paddingLeft = '0px'
    }
  } 

  return (
    <>
        <div className='all-wrapper'>
            <form action="#" className="search-wrapper">
                <input type="text" placeholder="Search..." ref={inputRef} />
                <button onClick={() => search()}>
                    <SvgIcon name='search' size='30px' color='#000' />
                </button>
            </form>
        </div>
    </>
  )
}
