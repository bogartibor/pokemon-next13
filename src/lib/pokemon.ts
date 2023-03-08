import { PAGE_SIZE } from "@/constants/page";
import { DetailedPokemonType, PokemonListResultType, PokemonType } from "@/types/pokemon";

export async function getPokemons(page = 0, pageSize = PAGE_SIZE) {
    const pokemonList = [];
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${
        page * pageSize
      }`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    for (const element of data.results) {
      const { url } = element;
      const resDetail = await fetch(url, 
        { next: { revalidate: 60 } }
      );
      const detailedPokemon = (await resDetail.json()) as DetailedPokemonType;
      const abilities = detailedPokemon?.abilities?.map(
        (ability) => ability?.ability?.name
      );
      const types = detailedPokemon.types?.map((type) => type.type.name);
      pokemonList.push({
        id: detailedPokemon.id,
        name: detailedPokemon.name,
        image: detailedPokemon.sprites?.other["official-artwork"].front_default,
        abilities,
        types,
      });
    }
  
    return pokemonList as PokemonType[];
  }

  export async function getDetailedPokemon(name: string) {
    const resDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return (await resDetail.json()) as DetailedPokemonType;
  }

  export async function getPokemonList(page = 0, pageSize = PAGE_SIZE){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${
        page * pageSize
      }`);
    return (await res.json()) as PokemonListResultType;
  }
