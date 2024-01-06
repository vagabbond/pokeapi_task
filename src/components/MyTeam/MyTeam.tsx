import React, { useState, FC } from "react";
import { Pokemon } from "../../types/Pokemons";

interface MyTeamProps {
 team: Pokemon[];
 removeFromTeam: (pokemon: Pokemon) => void;
}

export const MyTeam: FC<MyTeamProps> = ({ team, removeFromTeam }) => {
 return (
  <ul className="flex row-auto">
   {team &&
    team.map((pokemon: { name: string; url: string }) => {
     const { name, url } = pokemon;
     const pokeIndex = url.split("/")[url.split("/").length - 2];
     return (
      <li className="flex flex-col gap-4" key={name}>
       <button type="button" onClick={() => removeFromTeam(pokemon)}>
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
