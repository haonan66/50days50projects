import { useRef } from "react";
import "./index.scss";

type LabelType = "email" | "password";
export default function FormWave() {
  const emailRef = useRef<HTMLLabelElement>(null);
  const passwordRef = useRef<HTMLLabelElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (label: LabelType) => {
    const labelRef = label === "email" ? emailRef.current : passwordRef.current;
    labelRef!.innerHTML = labelRef!.innerText
      .split("")
      .map(
        (item, idx) =>
          `<span style="transition-delay:${
            idx * 50
          }ms; transform: translateY(-10px)">${item}</span>`
      )
      .join("");
  };

  const handleBlur = (label: LabelType) => {
    const labelRef = label === "email" ? emailRef.current : passwordRef.current;
    const inputRef =
      label === "email" ? emailInputRef.current : passwordInputRef.current;

    if (inputRef?.value.trim() === "") {
      labelRef!.innerHTML = labelRef!.innerText
        .split("")
        .map(
          (item, idx) =>
            `<span style="transition-delay:${
              idx * 50
            }ms; transform: translateY(10px)">${item}</span>`
        )
        .join("");
    }
  };

  return (
    <div>
      <div className="form-wave-wrapper">
        <form className="form-wrapper" action="#">
          <h1>Please Login</h1>
          <div className="email-wrapper">
            <label htmlFor="email" ref={emailRef}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailInputRef}
              required
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
            />
          </div>
          <div className="password-wrapper">
            <label htmlFor="password" ref={passwordRef}>
              Password
            </label>
            <input
              type="password"
              name="email"
              id="email"
              ref={passwordInputRef}
              required
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
            />
          </div>
          <button type="submit">Login</button>
          <div className="bottom-wrapper">
            Don't have an account?
            <a href="#">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}
