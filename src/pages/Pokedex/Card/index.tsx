import type { Pokemon } from "..";
import "./index.scss";

type PropsType = {
  pokemon: Pokemon
}

export default function Card(props: PropsType) {

  const { pokemon } = props;
  return (
    <div className="card">
      <div className="top-avatar"></div>
      <p className="id">#{pokemon.id}</p>
      <p className="name">{pokemon.name}</p>
      <p className="type">Type: {pokemon.type}</p>
    </div>
  );
}
