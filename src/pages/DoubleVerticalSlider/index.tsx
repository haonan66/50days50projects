import { useState } from "react";
import "./index.scss";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function DoubleVerticalSlider() {
  const [isNext, setIsNext] = useState<number>(0);
  const [isPrev, setIsPrev] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const changePrev = (length: number) => {
    // 状态更新
    setIsPrev(isPrev + 1);
    // 更新 index
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const changeNext = (length: number) => {
    // 状态更新
    setIsNext(isNext + 1);
    // 更新 index
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  return (
    <div className="all-wrap">
      <LeftContent index={index} isPrev={isPrev} changeNext={changeNext} />
      <RightContent index={index} isNext={isNext} changePrev={changePrev} />
    </div>
  );
}
