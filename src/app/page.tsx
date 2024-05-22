"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import PrettyHeader from "../components/PrettyHeader";

export default function Home() {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    generateRandomNumber();

    return () => {
      console.log("clean up homepage");
    };
  }, []);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1001);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then(function (response) {
        const response_data = response.data;
        const pokemon_name = response_data.name;

        setPokemon({
          ...pokemon,
          id: randomNum,
          name: pokemon_name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <Image
          src="/assets/logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Image
          alt="pokemon"
          src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png?raw=true`}
          width={300}
          height={300}
        />
        {/* <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            alt="pokemon"
            src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pkmnId}.png?raw=true`}
            width={300}
            height={300}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <p className="text-default-500">asdf</p>
        </CardFooter>
      </Card> */}
        <h1>{pokemon.name}</h1>
        <Button color="primary" onPress={() => generateRandomNumber()}>
          Re-Roll
        </Button>
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`;
          }}
        >
          Learn More on Bulbapedia
        </Button>
        {/* <PrettyHeader text={pokemon.name} /> */}
      </main>
    </div>
  );
}
