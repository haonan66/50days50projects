import "./index.scss";

export default function UserCard(props: any) {
  const { user, isFirst } = props;
  return (
    <>
      {isFirst ? (
        <div className="null"></div>
      ) : user === null ? (
        <div>暂无数据</div>
      ) : (
        <div className="user-card-wrap">
          <div className="left-wrap">
            <img src={user.avatar_url} alt="avatar" />
          </div>
          <div className="right-wrap">
            <div className="top-name">
              <h2>{user.name}</h2>
            </div>
            <div className="middle-info-wrap">
              <div className="null">null</div>
              <div className="info">
                <div>{user.followers} Followers</div>
                <div>{user.following} Following</div>
                <div>{user.public_repos} Repos</div>
              </div>
            </div>
            <div className="bottom-repo-wrap">
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
              <div className="repo-title">50days50projects</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
