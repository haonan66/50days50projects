import { createRoot } from "react-dom/client";
// 本地SVG图标
import "virtual:svg-icons-register";
// 导入 store
import store from "./store";
// 导入store提供组件Provider
import { Provider } from "react-redux";
import App from "./App.tsx";
import "reset-css";
import "animate.css";
// 引入全局组件 Toast
import "./pages/ToastNotification/Toast/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
