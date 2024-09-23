import React, { useState } from "react";
import SubItem from "./SubItem";
import "./index.scss";

type DataType = {
  icon: string;
  number: number;
  text: string;
};

export default function IncrementingCounter() {
  const [data, setData] = useState<DataType[]>([
    {
      icon: "twitter",
      number: 12000,
      text: "Twitter Followers",
    },
    {
      icon: "youtube",
      number: 5000,
      text: "Youtube Subscribers",
    },
    {
      icon: "facebook",
      number: 20000,
      text: "Facebook Likes",
    },
  ]);

  return (
    <div className="all-wrap">
      <div className="content-wrap">
        {data.map((item, index) => {
          return <SubItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
