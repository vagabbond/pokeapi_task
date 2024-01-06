import { useState, useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { MyTeam } from "./components/MyTeam/MyTeam";

interface Pokemon {
 name: string;
 url: string;
}
export const App = () => {
 const [userData, setUserData] = useState({
  firstName: "",
  lastName: "",
 });

 const [team, setTeam] = useState<Pokemon[]>([]);
 const addToTeam = (pokemon: Pokemon) => {
  setTeam((prev) => [...prev, pokemon]);
 };
 const removeFromTeam = (pokemon: Pokemon) => {
  setTeam((prev) => prev.filter((poke) => poke.name !== pokemon.name));
 };
 const onSubmit = (data: any) => {
  setUserData(data);
 };

 return (
  <div className="px-4">
   <header className="flex justify-between ">
    <h1>Pokemon Battle Tower</h1>
    <button
     type="button"
     className="h-10 w-10 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:text-blue-500 focus:outline-none focus:text-blue-500 "
     disabled={!userData.firstName && !userData.lastName}
    >
     <UserCircleIcon />
    </button>
   </header>

   {!userData.firstName && !userData.lastName ? (
    <LoginForm onSubmit={onSubmit} />
   ) : (
    <>
     <Pokemons team={team} addToTeam={addToTeam} />
     <MyTeam team={team} removeFromTeam={removeFromTeam} />
    </>
   )}
  </div>
 );
};
