import Card from "./Card";
import "./index.scss";

export default function SplitLandingPage() {
  const image1 =
    "https://50projects50days.com/projects/split-landing-page/ps.jpg";
  const image2 =
    "https://50projects50days.com/projects/split-landing-page/xbox.jpg";

  return (
    <>
      <div className="split-wrapper">
        <div className="split-left">
          <Card bg={image1} scale={true}></Card>
        </div>
        <div className="split-right">
          <Card bg={image2} scale={false}></Card>
        </div>
      </div>
    </>
  );
}
