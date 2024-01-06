import React, { useEffect, useState, FC } from "react";
import { Pokemon } from "../../types/Pokemons";
import axios from "axios";

interface PokemonsProps {
 team: Pokemon[];
 addToTeam: (pokemon: Pokemon) => void;
}
export const Pokemons: FC<PokemonsProps> = ({ team, addToTeam }) => {
 const [pokemonData, setPokemonData] = useState<any>([]);
 const [loading, setLoading] = useState(true);
 const [search, setSearch] = useState("");
 useEffect(() => {
  const fetchData = async () => {
   try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    setPokemonData(res.data.results);
    setLoading(false);
   } catch (error) {
    console.log(error);
    setLoading(false);
   }
  };
  fetchData();
 }, []);
 return (
  <ul className="flex row-auto">
   {pokemonData &&
    pokemonData.map((pokemon: { name: string; url: string }) => {
     const { name, url } = pokemon;
     const pokeIndex = url.split("/")[url.split("/").length - 2];
     return (
      <li className="flex flex-col gap-4" key={name}>
       <button
        type="button"
        onClick={() => addToTeam(pokemon)}
        disabled={team.length >= 4}
        className=" disabled:opacity-50 disabled:cursor-not-allowed"
       >
        <img
         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`}
        />
        <p>{name}</p>
       </button>
      </li>
     );
    })}
  </ul>
 );
};
