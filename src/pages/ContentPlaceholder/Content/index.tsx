import "./index.scss";

type PropsType = {
  img: string;
  title: string;
  description: string;
  avatar: string;
  name: string;
  date: string;
};

export default function Content(props: PropsType) {
  const { img, title, description, avatar, name, date } = props;

  return (
    <div className="content">
      <div className="top-img-wrap">
        <img src={img} alt="" />
      </div>
      <div className="main-text-wrap">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="bottom-info-wrap">
        <div className="avatar-wrap">
          <img src={avatar} alt="" />
        </div>
        <div className="info-wrap">
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
