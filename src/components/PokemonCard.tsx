"use client";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Slider } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/stringManupulation";
import { PokemonType } from "@/types/pokemon";

const PokemonCard = (pokemon: PokemonType) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea style={{ flexDirection: "column" }}>
          <Image src={pokemon.image} width={150} height={150} alt="" />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              style={{ textAlign: "center" }}
            >
              {capitalizeFirstLetter(pokemon.name)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PokemonCard;
