import { useRef, useState } from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

export default function PasswordGenerator() {
  // 密码长度
  const [length, setLength] = useState<number>(1);
  // 是否包含大写字母
  const [upper, setUpper] = useState<boolean>(true);
  // 是否包含小写字母
  const [lower, setLower] = useState<boolean>(true);
  // 是否包含数字
  const [numbers, setNumbers] = useState<boolean>(true);
  // 是否包含特殊符号
  const [symbols, setSymbols] = useState<boolean>(true);
  // 生成的密码
  const [password, setPassword] = useState<string>("");
  const numberRef = useRef<HTMLInputElement>(null);

  // 双向绑定数值长度
  const handleChange = () => {
    // 获取 numberRef 的值
    const num = numberRef.current!.value;
    // 将 num 赋值给 length
    setLength(+num);
  };

  // 生成随机密码
  const generatePassword = () => {
    const password = generate(length, upper, lower, numbers, symbols);
    setPassword(password);
  };
  const generate = (
    length: number,
    upper: boolean,
    lower: boolean,
    numbers: boolean,
    symbols: boolean
  ) => {
    // 根据参数传递过来的规则生成随机密码
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+~`-=[]";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // 复制功能
  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  return (
    <div className="all-wrap">
      <div className="password-generator-wrap">
        <h2>Password Generator</h2>
        <div className="input-wrap">
          <input type="text" disabled value={password} />
          <button onClick={handleCopy}>
            <SvgIcon name="copy" color="#fff" size="30" />
          </button>
        </div>
        <div className="length-wrap">
          <p>Password Length</p>
          <input
            ref={numberRef}
            type="number"
            min={1}
            max={32}
            value={length}
            onChange={handleChange}
          />
        </div>
        <div className="upper-wrap">
          <p>Include uppercase letters</p>
          <input
            type="checkbox"
            checked={upper}
            onChange={() => {
              setUpper(!upper);
            }}
          />
        </div>
        <div className="lower-wrap">
          <p>Include lowercase letters</p>
          <input
            type="checkbox"
            checked={lower}
            onChange={() => setLower(!lower)}
          />
        </div>
        <div className="numbers-wrap">
          <p>Include numbers</p>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>
        <div className="symbols-wrap">
          <p>Include symbols</p>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <div className="button-wrap" onClick={generatePassword}>
          Generate Password
        </div>
      </div>
    </div>
  );
}
