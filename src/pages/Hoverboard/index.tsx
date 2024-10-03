import "./index.scss";

export default function Hoverboard() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // 获取鼠标移入的元素信息
    const cell = e.currentTarget;
    // 设置随机背景色
    let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    cell.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    // 加上发光
    // 怎么加发光
    cell.style.boxShadow =
      "0 0 10px 5px rgba(" + r + "," + g + "," + b + ",0.5)";
    // 当鼠标移出一秒过后，移除背景色
    cell.addEventListener("mouseleave", () => {
      cell.style.transition = "all .5s";
      setTimeout(() => {
        cell.style.backgroundColor = "#1D1D1D";
        cell.style.boxShadow = `none`;
      }, 1000);
    });
  };
  return (
    <div className="hoverboard-wrap">
      <div className="hoverboard-inner">
        {/* 20* 25 的一个矩阵 */}
        {Array.from({ length: 25 }).map((_, rowIndex) => (
          <div key={rowIndex} className={`hoverboard-row`}>
            {Array.from({ length: 20 }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`hoverboard-cell`}
                onMouseEnter={(e) => handleMouseEnter(e)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
