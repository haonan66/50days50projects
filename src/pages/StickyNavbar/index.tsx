import "./index.scss";
import HeaderBar from "./HeaderBar";
import Main from "./Main";

export default function StickyNavbar() {
  return (
    <div className="all-wrap">
      <HeaderBar />
      <Main />
    </div>
  );
}
