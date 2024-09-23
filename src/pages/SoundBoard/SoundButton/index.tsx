import "./index.scss";
import _ from "lodash";

type PropsType = {
  name: string;
  audio: HTMLAudioElement;
  pauseAudio: () => void;
};
export default function SoundButton(props: PropsType) {
  const { name, audio, pauseAudio } = props;
  const play = () => {
    pauseAudio();
    audio.play();
  };

  return <button onClick={() => play()}>{name}</button>;
}
