import { useRef } from "react";
import "./index.scss";

const Content = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="content-wrapper" ref={contentRef}>
        Content
      </div>
    </>
  );
};
export default Content;
