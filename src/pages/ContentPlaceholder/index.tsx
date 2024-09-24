import React from "react";
import Content from "./Content";
import "./index.scss";

const data = {
  img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  title: "Lorem ipsum dolor sit amet asfasfasfasfas",
  description:
    "Lorem ipsum dolo r fasfsafasfsfasfasfadsfds sit amet consectetur adipisicing elit. Velit numquam, pariatur quam consectetur quidem voluptatem.",
  avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  name: "John Doe",
  date: "Oct 08, 2020",
};
export default function ContentPlaceholder() {
  return (
    <div className="all-wrap">
      <div className="content-wrap">
        <Content {...data} />
      </div>
    </div>
  );
}
