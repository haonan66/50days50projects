import { useEffect, useRef } from "react";
import "./index.scss";

type PropType = {
  bg: string;
  scale: boolean;
};

export default function Card(props: PropType) {
  const { bg, scale } = props;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scale) {
      cardRef.current?.style.setProperty("--scale", "1.1");
    } else {
      cardRef.current?.style.setProperty("--scale", "1");
    }
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="card"
        style={{ background: `url(${bg}) no-repeat` }}
      >
        <div className="button">
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
}
