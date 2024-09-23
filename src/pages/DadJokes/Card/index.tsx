import { useEffect, useState } from "react";
import "./index.scss";

export default function Card() {
  const BASEURL = "https://icanhazdadjoke.com/";

  const [joke, setJoke] = useState<string>("");
  const getRandomJoke = async () => {
    await fetch(BASEURL, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((res) => {
        res.json().then((data) => {
          setJoke(data.joke);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-header">
          <h4>Don't Laugh Challenge</h4>
        </div>
        <div className="card-content">{joke}</div>
        <div className="card-footer">
          <button onClick={() => getRandomJoke()}>Get Another Joke</button>
        </div>
      </div>
    </div>
  );
}
