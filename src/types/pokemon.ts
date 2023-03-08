export type AbilityType = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  };
  export type PokemonTypeType = {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
  export type DetailedPokemonType = {
    id: number;
    name: string;
    abilities: AbilityType[];
    types: PokemonTypeType[];
    sprites?: {
      other: {
        ["official-artwork"]: {
          front_default: string;
        };
      };
    };
  };
  
  export type PokemonType = {
    id: number;
    name: string;
    image: string;
    abilities: string[];
    types: string[];
  };
  
  export type PokemonListResultType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: [{ name: string; url: string }];
  };