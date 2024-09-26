import "./index.scss";

export default function ToastNotification() {
  return (
    <div className="all-wrap">
      <button onClick={() => window.onShow("error", "成功！！")}>
        Show Notification
      </button>
    </div>
  );
}
