import { createRoot, Root } from "react-dom/client";
import "./index.scss";

// ts 声明扩充
declare global {
  interface Window {
    onShow: (
      type: "success" | "error" | "warning" | "primary",
      content: string
    ) => void;
  }
}

type PropsType = {
  type: "success" | "error" | "warning" | "primary";
  content: string;
};

export default function Toast(props: PropsType) {
  const { type, content } = props;
  return <div className={`toast-wrap ${type}`}>{content}</div>;
}

interface Item {
  messageContainer: HTMLElement;
  root: Root;
}

const queue: Item[] = [];

window.onShow = (
  type: "success" | "error" | "warning" | "primary",
  content: string
) => {
  const messageContainer = document.createElement("div");
  messageContainer.className = "toast-wrap";
  messageContainer.style.top = `${queue.length * 50}px`;
  document.body.appendChild(messageContainer);
  // 容器关联 Toast 组件
  // 把容器注册成根组件
  const root = createRoot(messageContainer);
  root.render(<Toast type={type} content={content} />);

  queue.push({
    messageContainer,
    root,
  });

  setTimeout(() => {
    const item = queue.find(
      (item) => item.messageContainer === messageContainer
    )!;
    item.root.unmount();
    document.body.removeChild(item.messageContainer);
    queue.splice(queue.indexOf(item), 1);
  }, 3000);
};
