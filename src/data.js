const DATA = "https://pokeapi.co/api/v2";
const POKEMON = '/pokemon'

export async function getPokemonList() {
  try {
    
    const response = await fetch(DATA+POKEMON);
    const result = await response.json();
    return result.results;

  } catch (e) {
    console.error(e);
    return [];
  }
}
