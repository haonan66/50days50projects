import { useEffect, useState } from 'react'
import './index.css'

export default function ProgressSteps() {

  const [dataList, setDataList] = useState([
    {id: '1', value: 1, isActive: true},
    {id: '2', value: 2, isActive: false},
    {id: '3', value: 3, isActive: false},
    {id: '4', value: 4, isActive: false},
  ])

  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false)
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)
  const [curr, setCurr] = useState<number>(1)

  const getActiveCount: () => number = () => 
    dataList.reduce(
      (pre: number, cur) => {
        return cur.isActive ? pre + 1 : pre
      }, 0
    )
  

  useEffect(() => {
    if (dataList[0].isActive && getActiveCount() === 1) {
      setIsPrevDisabled(true)
    } else {
      setIsPrevDisabled(false)
    }

    if (dataList[dataList.length - 1].isActive && getActiveCount() === dataList.length) {
      setIsNextDisabled(true)
    } else {
      setIsNextDisabled(false) 
    }

  }, [dataList])

  const prev = () => {
    let temp = [...dataList]
    if (curr - 1 > 0) {
      temp[curr - 1].isActive = false
      setCurr(curr - 1)
      setDataList(temp)
    }
  }

  const next = () => {
    let temp = [...dataList]
    if (curr <= dataList.length - 1) {
      temp[curr].isActive = true
      setCurr(curr + 1)
      setDataList(temp)
    }
  }

  return (
    <>
        <div className='all-wrapper'>
          <div className='step-wrapper'>
            {
              dataList.map(item => <div className={item.isActive ? 'active' : ''} key={item.id} >{item.value}</div> )
            }
            
          </div>
          <div className='button-wrapper'>
            <button onClick={() => prev()} disabled={isPrevDisabled} >Prev</button>
            <button onClick={() => next()} disabled={isNextDisabled} >Next</button>
          </div>
        </div>
    </>
  )
}
