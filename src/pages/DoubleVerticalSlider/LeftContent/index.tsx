import "./index.scss";
import { useSelector } from "react-redux";
import type { IRootState, DoubleVerticalSliderType } from "@/types/UseSelector";
import { useEffect, useRef } from "react";

type PropsType = {
  index: number;
  isPrev: number;
  changeNext: (length: number) => void;
};
export default function LeftContent(props: PropsType) {
  const { index, isPrev, changeNext } = props;

  const { datas } = useSelector(
    (state: IRootState) => state.doubleVerticalSlider
  );

  const leftContentWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPrev !== 0) {
      // 让 content-wrap 向上移动一个视口高度，如果移动到最顶部，则回到底部
      (
        leftContentWrap.current! as HTMLDivElement
      ).style.transform = `translateY(${-(index < 0
        ? datas.length - 1
        : index)}00vh)`;
    }
  }, [isPrev]);

  const toNextImage = () => {
    // 将 content-wrap 向下移动一个视口高度，如果移动到最底部，则回到顶部
    (
      leftContentWrap.current! as HTMLDivElement
    ).style.transform = `translateY(${-(index + 1 >= datas.length
      ? 0
      : index + 1)}00vh)`;
    // 通知父组件更新 isNext 与 isPrev 的状态
    changeNext(datas.length);
  };
  return (
    <div className="left-all-wrap">
      <div className="content-container" ref={leftContentWrap}>
        {datas.map((item: DoubleVerticalSliderType) => (
          <div
            key={item.id}
            className="content-wrap"
            style={{
              backgroundColor: item.backgroundColor,
            }}
          >
            <h1>{item.leftTitle}</h1>
            <p>{item.leftDescription}</p>
          </div>
        ))}
      </div>

      <div className="next-wrap" onClick={toNextImage}>
        <button>↓</button>
      </div>
    </div>
  );
}
