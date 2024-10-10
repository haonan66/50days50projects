import './index.scss'
import type { QuizData } from '..'
import { nanoid } from 'nanoid'
import { useRef } from 'react'

type PropsType = {
  quiz: QuizData,
  handleAnswer: (isCorrect: boolean) => void
}

export default function QuestionCard(props: PropsType) {
  const { quiz, handleAnswer } = props;
  const cardRef = useRef<HTMLDivElement>(null);
  const handleSubmit = () => {
    const answers = cardRef.current!.querySelectorAll('input');
    // 首先判断四个单选按钮中是否有一个被选中，如果没有表示用户没有选择，提示用户
    let isChecked = false;
    answers.forEach((item, index) => {
      if (item.checked && index === quiz.correct) {
        // 回答正确
        handleAnswer(true);
        item.checked = false;
        isChecked = true;
      } else if (item.checked && index !== quiz.correct) {
        // 回答错误
        handleAnswer(false);
        item.checked = false;
        isChecked = true;
      }
    })
    if (!isChecked) {
      alert('请选择答案');
      return;
    }
  }
  return (
    <div className='card-wrap' ref={cardRef}>
      <h1>{quiz.title}</h1>
      <div className='answers'>
        {quiz.answers.map((answer, index) => {
          const nid = nanoid();
          return (
            <div>
              <input type='radio' id={`answer-${nid}`} name='answer' value={index} className='answer' key={index} />
              <label htmlFor={`answer-${nid}`}>{answer}</label>
            </div>
          )
        })}
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
