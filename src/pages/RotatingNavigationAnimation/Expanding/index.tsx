import { useRef, useState } from "react"
import SvgIcon from "@/components/SvgIcon"
import './index.scss'

type PropsType = {
    newsRef: React.RefObject<HTMLDivElement>,
    getIsExpanding: (value: boolean) => void
}

export default function Expading(props: PropsType) {

    const { newsRef, getIsExpanding } = props
    const [isExpanding, setIsExpanding] = useState<boolean>(false)
    const expandRef = useRef<HTMLDivElement>(null)
    // 点击展开/关闭按钮进行相关操作
  const rotate = () => {
    if (!isExpanding) {
        expandRef.current!.style.transform = `rotate(180deg)`
        newsRef.current!.style.transform = `rotate(-20deg)`
    } else {
        expandRef.current!.style.transform = `rotate(-90deg)`
        newsRef.current!.style.transform = `rotate(0deg)`
    }
    setIsExpanding(!isExpanding)
    getIsExpanding(!isExpanding)
  }

  return (
    <>
        <div className="expanding-wrapper" ref={expandRef}>
            <div className="closing-card" onClick={rotate}>
                <SvgIcon name="close" size="30px"  />
            </div>
            <div className="expanding-card" onClick={rotate}>
                <SvgIcon name="cascader" size="30px" color="#fff" />
            </div>
        </div>
    </>
  )
}
