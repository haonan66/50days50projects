import "./index.scss";
import { useSelector } from "react-redux";
import type { IRootState, DoubleVerticalSliderType } from "@/types/UseSelector";
import { useEffect, useRef } from "react";

type PropsType = {
  index: number;
  isNext: number;
  changePrev: (length: number) => void;
};
export default function RightContent(props: PropsType) {
  const { index, isNext, changePrev } = props;

  const { datas } = useSelector(
    (state: IRootState) => state.doubleVerticalSlider
  );
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isNext !== 0) {
      (
        rightContentRef.current! as HTMLDivElement
      ).style.transform = `translateY(${-(index >= datas.length
        ? 0
        : index)}00vh)`;
    }
  }, [isNext]);

  const toPrevImage = () => {
    // 将 content-wrap 向下移动一个视口高度，如果移动到最底部，则回到顶部
    (
      rightContentRef.current! as HTMLDivElement
    ).style.transform = `translateY(${-(index - 1 < 0
      ? datas.length - 1
      : index - 1)}00vh)`;
    // 通知父组件更新 prev 状态
    changePrev(datas.length);
  };
  return (
    <div className="right-content-wrap">
      <div className="right-container" ref={rightContentRef}>
        {datas.map((item: DoubleVerticalSliderType) => (
          <div
            className="content-wrap"
            key={item.id}
            style={{
              backgroundImage: `url(${item.rightImage})`,
            }}
          ></div>
        ))}
      </div>
      <div className="prev-wrap" onClick={toPrevImage}>
        <button>↑</button>
      </div>
    </div>
  );
}
