import React, { useRef, useState } from 'react';
import './index.scss'

export default function PasswordStrengthBackground() {

  const backgroundRef = useRef<HTMLDivElement>(null);
  const [strength, setStrength] = useState(0);
  let blur = 20;

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const length = password.length;
    const background = backgroundRef.current;
    setStrength((prev) => {
      // 代表用户输入了字符
      if (prev < length) {
        blur -= length * 2;
        background!.style.filter = `blur(${blur}px)`;
        return length;
      } else {
        // 代表用户删除了字符
        if (length === 0) {
          blur = 20;
          background!.style.filter = `blur(${blur}px)`;
          return 0;
        } else {
          blur -= length * 2;
          background!.style.filter = `blur(${blur}px)`;
          return prev - 1;
        }
      }
    });
  }

  return (
    <div className="background-wrap">
      <div className="background" ref={backgroundRef}></div>
      <div className="login-form">
        <form action="#">
          <h1>Image Password Strength</h1>
          <p>Change the password to see the effect</p>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder='Enter Email' />
          <label htmlFor="password">Password:</label>
          <input id='password' type="password" placeholder="Enter Password" onChange={(e) => changePassword(e)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
