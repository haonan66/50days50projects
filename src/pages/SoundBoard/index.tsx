import "./index.scss";
import SoundButton from "./SoundButton";

export default function SoundBoard() {
  const soundList = [
    {
      name: "applause",
      audio: new Audio(
        "https://50projects50days.com/projects/sound-board/sounds/applause.mp3"
      ),
    },
    {
      name: "boo",
      audio: new Audio(
        "https://50projects50days.com/projects/sound-board/sounds/boo.mp3"
      ),
    },
    {
      name: "gasp",
      audio: new Audio(
        "https://50projects50days.com/projects/sound-board/sounds/gasp.mp3"
      ),
    },
    {
      name: "tada",
      audio: new Audio(
        "https://50projects50days.com/projects/sound-board/sounds/tada.mp3"
      ),
    },
    {
      name: "victory",
      audio: new Audio(
        "https://50projects50days.com/projects/sound-board/sounds/victory.mp3"
      ),
    },
    {
      name: "wrong",
      audio: new Audio(
        "https://50projects50days.com/projects/sound-board/sounds/wrong.mp3"
      ),
    },
  ];

  const pauseAudio = () => {
    soundList.forEach((sound) => {
      sound.audio.pause();
    });
  };

  return (
    <>
      <div className="container">
        <div className="sound-wrapper">
          {soundList.map((item) => (
            <div className="sound-button">
              <SoundButton {...item} pauseAudio={pauseAudio} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
