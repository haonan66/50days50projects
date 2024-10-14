# 50 projects 50 days（React + TS）

本项目是 `50projects50days` 的 `react` 版，项目均使用最新 `react18` + `tsx` 语法实现。

> 原项目链接地址：[50projects50days](https://50projects50days.com/)

## 项目启动

```bash
# 克隆代码
git clone https://github.com/haonan66/50days50projects.git

# 切换目录
cd icodeths-project

# 安装 pnpm
npm install pnpm -g

# 安装依赖
pnpm install

# 启动运行
pnpm run dev
```

## 项目切换

项目默认展示的是第 `50` 个 `project` ，如果想要切换则须更改 `App.tsx` 的文件内容。示例（以切换到 `day30` 的 `AutoTextEffect` 项目为例）：

原 `App.tsx` 文件：

```ts
import InsectCatchGame from "./pages/InsectCatchGame";
export default function App() {
  return (
    <>
      <InsectCatchGame />
    </>
  );
}

```

修改后的 `App.tsx` 文件：

```ts
import AutoTextEffectfrom "./pages/AutoTextEffect";
export default function App() {
  return (
    <>
      <AutoTextEffect/>
    </>
  );
}
```
