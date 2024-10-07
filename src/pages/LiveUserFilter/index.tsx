import { useEffect, useState } from 'react';
import axios from 'axios'
import './index.scss'
import User from './User';

export type User = {
  id: string;
  picture: string;
  name: string;
  location: string;
}

let globalId = 10000001;

export default function LiveUserFilter() {

  const [userList, setUserList] = useState<User[]>([]);
  const [showList, setShowList] = useState<User[]>([]);

  const getUserList = async () => {
    const data = (await axios.get('https://randomuser.me/api?results=50')).data;
    // 处理 data.results 数据
    // @ts-ignore
    const users = data.results.map(item => {
      const { id, picture, name, location } = item;
      return {
        id: id.value ?? globalId++ + '',
        picture: picture.large,
        name: name.first + " " + name.last,
        location: location.city + "," + location.country
      }
    });
    setUserList(users);
    setShowList(users);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 搜索（不管大小写）
    const result = userList.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.location.toLowerCase().includes(value.toLowerCase())
    );
    setShowList(result);
  }

  useEffect(() => {
    getUserList();
  }, [])

  return (
    <div className='user-filter-wrap'>
      <div className="user-list-wrap">
        <div className="top-info-wrap">
          <h2>Live User Filter</h2>
          <p>Search by name and/or location</p>
          <input type="search" placeholder='search' onChange={e => handleSearch(e)} />
        </div>
        <div className="user-list">
          {
            showList.map(user => (
              <User key={user.id} user={user} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
