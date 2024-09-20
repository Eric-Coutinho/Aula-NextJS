import Link from "next/link";
import { Metadata } from "next";
import React, { Suspense } from "react";

type IData = {
    results: {
        name: string;
        status: string;
        id: string;
    }[]
}

export const metadata: Metadata = {
    title: "Persongens Rick and Morty",
    description: "Aplicação teste de consumo de api server side usando nextjs",
}

const HookPage = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data: IData = await res.json();

  return (
    <>
      <h1>Server Side request</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {data?.results.map((item, index) => {
            return(
                <div key={index}>
                    <p>{item.name}</p>
                    <Link href={`/character/${item.id}`}>Me clique {item.id}</Link>
                </div>
            )
        })}
      </Suspense>
    </>
  );
};

export default HookPage;
