import { useState } from "react";
import "./index.scss";
import Switch from "./Switch";

const datas = [{ text: "Good" }, { text: "Cheap" }, { text: "Fast" }];
export default function GoodCheapFast() {
  // 已高亮的开关列表
  const [list, setList] = useState<string[]>([]);
  const updateList = (text: string, isActive: boolean) => {
    // 最多显示两个高亮开关
    if (isActive) {
      if (list.length >= 2) {
        // 删除 list 中的第一个元素
        list.shift();
        const newList = list;
        newList.push(text);
        setList([...newList]);
      } else {
        setList([...list, text]);
      }
    } else {
      // 删除 list 中该元素
      const newList = list;
      newList.splice(newList.indexOf(text), 1);
      setList([...newList]);
    }
  };
  return (
    <div className="all-wrap">
      <h2>How do you want your project to be?</h2>
      <div className="content-wrap">
        {datas.map((item) => (
          <Switch
            key={item.text}
            list={list}
            text={item.text}
            updateList={updateList}
          />
        ))}
      </div>
    </div>
  );
}
