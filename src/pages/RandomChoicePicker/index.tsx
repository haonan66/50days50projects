import React, { useRef, useState } from "react";
import "./index.scss";

export default function RandomChoicePicker() {
  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="content-wrap">
        <div className="container">
          <div className="title">
            Enter all of the choices divided by a comma (','). Press enter when
            you're done
          </div>
          <div className="content">
            <textarea
              name="textarea"
              ref={textareaRef}
              onChange={(e) => handleChange(e)}
              placeholder="Enter choices here..."
            ></textarea>
          </div>
          <div className="show-wrap">{text}</div>
        </div>
      </div>
    </div>
  );
}
