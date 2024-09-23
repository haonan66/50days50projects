import React from "react";
import "./index.scss";
import File from "./File";

export default function DragNDrop() {
  return (
    <div className="all-wrap">
      <div className="file-wrap">
        {Array.from({ length: 5 }).map((_) => (
          <File />
        ))}
      </div>
    </div>
  );
}
