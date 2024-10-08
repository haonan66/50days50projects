import { useRef, useState } from 'react'
import './index.scss'

export default function FeedbackUiDesign() {

  const [satisfiedDegree, setSatisfiedDegree] = useState<number>(0);
  const btnRef = useRef<HTMLDivElement>(null);
  let [isSend, setIsSend] = useState<boolean>(false);
  // 修改状态
  const sendReview = () => {
    setIsSend(true);
  }

  const changeDegree = (degree: number) => {
    setSatisfiedDegree(degree);
    if (btnRef.current) {
      const btns = btnRef.current.children;
      for (let i = 0; i < btns.length; i++) {
        const btn = btns[i] as HTMLButtonElement;
        if (i === degree) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    }
  }
  return (
    <>

      <div className='design-wrap'>
        <div className="satisfied-wrap">
          {
            isSend ?
              (

                <div className='send-wrap'>
                  <div className="send-content">
                    <p>❤</p>
                    <p>Thank you for your feedback!</p>
                    <p>Your satisfaction level: {satisfiedDegree}</p>
                  </div>
                </div>

              ) :
              (
                <div>
                  <h2>How satisfied are you with our
                    customer support performance?</h2>
                  <div className="satisfied-btn-wrap" ref={btnRef}>
                    <button className="unhappy-btn active" onClick={() => changeDegree(0)}>
                      <p>😒</p>
                      <p>Unhappy</p>
                    </button>
                    <button className="neutral-btn" onClick={() => changeDegree(1)}>
                      <p>😐</p>
                      <p>Neutral</p>
                    </button>
                    <button className="satisfied-btn" onClick={() => changeDegree(2)}>
                      <p>😊</p>
                      <p>Satisfied</p>
                    </button>
                  </div>
                  <button className='review-btn' onClick={sendReview}>Send Review</button>
                </div>
              )
          }
        </div>
      </div>
    </>
  )
}
