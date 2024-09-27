import { useRef, useState } from "react";
import axios from "axios";
import "./index.scss";
import UserCard from "./UserCard";

export default function GithubProfiles() {
  const usernameRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState(null);
  const [isFirst, setIsFirst] = useState(true);

  const getGithubUser = async () => {
    const username = usernameRef.current!.value;
    try {
      const res = await axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => res.data);
      setUser(res);
    } catch (e) {
      setUser(null);
    }
    // 清除 value 值
    usernameRef.current!.value = "";
    setIsFirst(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 发起请求获取 githubUser 信息
      getGithubUser();
    }
  };

  return (
    <div className="all-wrap">
      <div className="input-wrap">
        <input
          type="text"
          placeholder="Search a github user"
          ref={usernameRef}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="profile-wrap">
        <UserCard user={user} isFirst={isFirst} />
      </div>
    </div>
  );
}
