import './index.scss'

type PropsType = {
  correctQuestionNum: number,
  allQuestionNum: number
  reload: () => void
}

export default function Result(props: PropsType) {
  const { correctQuestionNum, allQuestionNum, reload } = props;
  const handleReload = () => {
    // 通知父组件重置状态
    reload();
  }
  return (
    <div className='result-wrap'>
      <h1>You answered {correctQuestionNum}/{allQuestionNum} questions correctly
      </h1>
      <button onClick={handleReload}>Reload</button>
    </div>
  )
}
