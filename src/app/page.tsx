"use client";
// import Image from "next/image";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Home() {
  const [pkmnId, setPkmnId] = useState(0);

  useEffect(() => {
    generateRandomNumber();
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=12")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1001);
    setPkmnId(randomNum);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <Image
        src="/assets/logo.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <Image
        alt="pokemon"
        src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pkmnId}.png?raw=true`}
        width={300}
        height={300}
      />
      <Button color="primary" onPress={() => generateRandomNumber()}>
        Re-Roll
      </Button>
    </main>
  );
}
