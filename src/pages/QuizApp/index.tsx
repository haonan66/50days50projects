import { useMemo, useState } from 'react'
import './index.scss'
import QuestionCard from './QuestionCard'
import Result from './Result'

// 准备数据
const questions = [
  {
    title: 'React 是什么？',
    answers: ['视图库', '前端框架', 'JSX 语法', '🐖'],
    correct: 1
  },
  {
    title: 'Vue 是什么？',
    answers: ['视图库', '前端框架', 'JSX 语法', '🐏'],
    correct: 1
  },
  {
    title: 'Svelte 是什么？',
    answers: ['视图库', '前端框架', 'JSX 语法', '🐎'],
    correct: 1
  },
  {
    title: 'Angular 是什么？',
    answers: ['视图库', '前端框架', 'JSX 语法', '🐕'],
    correct: 1
  }
]


export type QuizData = {
  title: string,
  answers: string[],
  correct: number
}

export default function QuizApp() {
  // 答对题目的数量
  const [correctQuestionNum, setCorrectQuestionNum] = useState<number>(0);
  // 当前是第几个题目
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  // 题目列表
  // const [quiz, setQuiz] = useState<QuizData>(questions[0]);

  const handleAnswer = (answer: boolean) => {
    // 判断是否答对了
    if (answer) {
      setCorrectQuestionNum(correctQuestionNum + 1);
    }
    // 跳到下一题
    setCurrentQuestion(currentQuestion + 1);
  }

  const quiz = useMemo(() => questions[currentQuestion], [currentQuestion]);

  const handleReload = () => {
    setCurrentQuestion(0);
    setCorrectQuestionNum(0);
  }

  return (
    <div className='quiz-wrap'>
      <div className="question-wrap">
        {
          currentQuestion === questions.length ?
            <Result correctQuestionNum={correctQuestionNum} allQuestionNum={questions.length} reload={handleReload} /> :
            <QuestionCard quiz={quiz} handleAnswer={handleAnswer} />
        }
      </div>
    </div>
  )
}
