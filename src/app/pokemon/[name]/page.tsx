import { capitalizeFirstLetter } from "@/utils/stringManupulation";
import { getDetailedPokemon, getPokemonList } from "@/lib/pokemon";
import DetailedPokemon from "@/components/DetailedPokemon";
import Link from "next/link";
import { PAGE_SIZE } from "@/constants/page";

export async function generateStaticParams() {
  const data = await getPokemonList();
  return data?.results?.map(({ name }) => ({
    name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const { name } = await getDetailedPokemon(params.name);
  return { title: capitalizeFirstLetter(name) };
}

const PokemonPage = async ({ params }: any) => {
  const { id, name, abilities, types, sprites } = await getDetailedPokemon(
    params.name
  );
  const pageOrigin = Math.floor((+id - 1) / PAGE_SIZE);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DetailedPokemon
        id={id}
        name={name}
        types={types}
        abilities={abilities}
        sprites={sprites}
      />
      <Link href={`/${pageOrigin}`}>
        <button style={{ margin: "15px 0" }}>Back</button>
      </Link>
    </div>
  );
};

export default PokemonPage;
