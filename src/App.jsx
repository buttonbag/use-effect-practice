import { useEffect, useState } from "react";
import { getPokemonList } from "./data";


// const DATA = [
//   {
//     name: "name",
//     age: "age",
//     location: "location",
//   },
//   {
//     name: "name",
//     age: "age",
//     location: "location",
//   },
//   {
//     name: "name",
//     age: "age",
//     location: "location",
//   },
//   {
//     name: "name",
//     age: "age",
//     location: "location",
//   },
//   {
//     name: "name",
//     age: "age",
//     location: "location",
//   },
//   {
//     name: "name",
//     age: "age",
//     location: "location",
//   },
// ]

export default function App() {
  const [list, setList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState();

  useEffect(()=>{
    const syncList = async () => {
      const data = await getPokemonList();
      setList(data);
    }
    syncList();
  }, []);

  function PokemonDetails() {
    return (


      <div className="pokemon-details">
        <h1>Pokemon Details</h1>
        <h2>{currentPokemon.name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.url.slice(33, -1)}.png`} />
        <button onClick={()=>{setCurrentPokemon()}}>&lt; back</button>
      </div>


    )
  }

  function List() {
    return (
      <div className="pokemon-list">

      <h1>Pokemon List</h1>
      <ul>
      {list.map((item)=>(
        <li key={item.url.slice(33, -1)}>
          <a onClick={()=>setCurrentPokemon(item)}>
          {/* <a onClick={()=>console.log(item.url)}> */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.slice(33, -1)}.png`} />
          {item.name}</a>
        </li>
      ))}
      </ul>
      
      </div>
    )
  }

  return (
    <>
    {!currentPokemon ? 
    <List /> :
    <PokemonDetails /> 
    }
    </>
  )
}

// try to get next 20
