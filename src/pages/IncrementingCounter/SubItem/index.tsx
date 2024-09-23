import { useEffect, useState } from "react";
import SvgIcon from "@/components/SvgIcon";
import "./index.scss";

type PropsType = {
  icon: string;
  number: number;
  text: string;
};

export default function index(props: PropsType) {
  const { icon, number, text } = props;

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let step = Math.floor(number / 2000);
    let timer = setInterval(() => {
      setCount((old) => {
        old = old + step * 10;
        if (old >= number) {
          clearInterval(timer);
        }
        return old;
      });
    }, 10);
    setTimeout(() => {
      setCount(number);
      clearInterval(timer);
    }, 2000);
    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <div className="content">
      <div className="icon">
        <SvgIcon name={icon} color="white" />
      </div>
      <div className="number">
        <span>{count}</span>
      </div>
      <div className="text">
        <span>{text}</span>
      </div>
    </div>
  );
}
