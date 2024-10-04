import "./index.scss";
import Card from "./Card";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export type Pokemon = {
  id: number;
  name: string;
  type: string;
}

export default function Pokedex() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // 创建一个请求的任务队列
  const urls = Array.from({ length: 150 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);

  // 定义并发数量
  const batchSize = 10;

  // 定义一个异步函数来处理请求队列
  const processRequestsWithConcurrency = async (urls: string[]): Promise<void> => {
    const results: any[] = [];

    for (let i = 0; i < urls.length; i += batchSize) {
      const batchUrls = urls.slice(i, i + batchSize);
      // 使用 axios.all 并发处理一批请求
      const batchResponses = await axios.all(batchUrls.map(url => axios.get(url)));
      // 收集每个请求的结果
      batchResponses.forEach(response => {
        results.push(response.data);
      })
      const pokemonList = results.map(item => {
        const { id, name, types } = item;
        return { id, name, type: types[0].type.name };
      });
      setPokemons(pokemonList);
    }
  }

  // 通过 useCallback 缓存该函数
  const getPokemonList = useCallback(async () => {
    await processRequestsWithConcurrency(urls);
  }, []);

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="pokedex-wrap">
      <h1>Pokedex</h1>
      <div className="card-wrap">
        {
          pokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
}
