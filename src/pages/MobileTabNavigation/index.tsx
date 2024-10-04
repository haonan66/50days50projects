import { useMemo, useRef, useState } from "react";
import SvgIcon from "@/components/SvgIcon";
import './index.scss';

const datas = [
  {
    id: 1,
    icon: "Home",
    tagName: "Home",
    active: true,
    img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  },
  {
    id: 2,
    icon: "Work",
    tagName: "Work",
    active: false,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    icon: "Blog",
    tagName: "Blog",
    active: false,
    img: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  },
  {
    id: 4,
    icon: "AboutUs",
    tagName: "About Us",
    active: false,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
];

export type Tab = {
  id: number;
  icon: string;
  tagName: string;
  active: boolean;
  img: string;
};

export default function MobileTabNavigation() {
  const [tabs, setTabs] = useState<Tab[]>(datas);
  const imgRef = useRef<HTMLImageElement>(null);

  // 改变激活的 tab 
  const changeActive = (id: number) => {
    const newTabs = tabs.map((tab) => {
      if (tab.id === id) {
        return { ...tab, active: true }
      } else {
        return { ...tab, active: false }
      }
    })
    setTabs(newTabs);
    // 怎么让图片每切换一下就加如下的动画
    imgRef.current!.classList.remove('animate__pulse');
    // 延迟一帧再添加，否则会立即添加，导致动画效果无效（★）
    setTimeout(() => {
      imgRef.current!.classList.add('animate__pulse');
    }, 0);
  }

  const activeImg = useMemo(() => tabs.find(tab => tab.active)?.img, [tabs]);

  return (
    <div className="all-screen-wrap">
      <div className="screen-wrap">
        <div className="content-wrap">
          <img ref={imgRef} className="animate__animated" src={activeImg} />
        </div>
        <div className="tab-wrap">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={tab.active ? "tab active" : "tab"}
              onClick={() => changeActive(tab.id)}
            >
              <SvgIcon name={tab.icon} color={tab.active ? '#8E44AD' : '#777'} size="20px" />
              <p>{tab.tagName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
