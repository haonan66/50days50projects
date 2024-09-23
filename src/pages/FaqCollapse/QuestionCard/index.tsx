import React, { useRef, useState } from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

type PropsType = {
  question: string;
  answer: string;
};
export default function QuestionCard(props: PropsType) {
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const { question, answer } = props;
  const questionRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setIsShowAnswer(!isShowAnswer);
    // 更新高度
    questionRef.current!.style.height = !isShowAnswer ? "100px" : "50px";
    // 更新背景
    questionRef.current!.style.backgroundColor = !isShowAnswer
      ? "#fff"
      : "transparent";
      questionRef.current!.style.backgroundImage = !isShowAnswer
      ? "url('')"
      : "linear-gradient(to right, #aaa, #aaa)";
  };
  return (
    <div className="question-wrapper" ref={questionRef}>
      <div className="question">
        <h3>{question}</h3>
        <div className="icon" onClick={() => handleClick()}>
          {isShowAnswer ? (
            <SvgIcon name="close" color="black" size="30" />
          ) : (
            <SvgIcon name="arrow-down" color="black" size="20" />
          )}
        </div>
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
}
