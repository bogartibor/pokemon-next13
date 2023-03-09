import NextButton from "@/components/NextButton";
import PokemonList from "@/components/PokemonList";
import PreviousButton from "@/components/PreviousButton";
import { PAGE_SIZE } from "@/constants/page";
import { getPokemonList, getPokemons } from "@/lib/pokemon";

export default async function PokemonPage({
  params,
}: {
  params: { page: number };
}) {
  const { page } = params;
  const pokemonList = await getPokemons(page);
  const { count } = await getPokemonList(page);

  return (
    <>
      <PokemonList pokemons={pokemonList} />
      <div
        style={{
          margin: "10px 0",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        {page * PAGE_SIZE < count && <NextButton next={+page + 1} />}
        {page > 0 && <PreviousButton previous={page - 1} />}
      </div>
    </>
  );
}
