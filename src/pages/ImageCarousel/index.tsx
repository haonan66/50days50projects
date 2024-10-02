import { useEffect, useRef, useState } from "react";
import "./index.scss";

const images = [
  "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
];

export default function ImageCarousel() {
  const timer = useRef<number>();
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handlePrev = () => {
    clearInterval(timer.current);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    timer.current = +setInterval(handleInterval, 2000);
  };
  const handleNext = () => {
    clearInterval(timer.current);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    timer.current = +setInterval(handleInterval, 2000);
  };

  const handleInterval = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    imageRef.current!.style.transform = `translateX(${-currentIndex * 450}px)`;
  }, [currentIndex]);

  useEffect(() => {
    // 开启定时器
    timer.current = +setInterval(handleInterval, 2000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="carousel-wrap">
      <div className="carousel-inner">
        <div className="carousel-item" ref={imageRef}>
          {images.map((item, index) => {
            return <img key={index} src={item} />;
          })}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-control-prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
