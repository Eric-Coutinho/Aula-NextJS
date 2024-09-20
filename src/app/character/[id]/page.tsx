import Image from "next/image";
import React from "react";

interface ICharacter {
  params: {
    id: string;
  };
}

interface IData {
  id: string;
  name: string;
  status: string;
  image: string;
}

interface IDataStaticIndex {
  results: IData[];
}

const Character = async ({ params: { id } }: ICharacter) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data: IData = await res.json();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.id}
        {data.name}
        <Image
          src={data.image}
          alt={`Imagem do personagem ${data.name}`}
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default Character;

export async function generate({ params: { id } }: ICharacter) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data: IDataStaticIndex = await res.json();
  return <>{data.results.map((item) => item.id.toString())}</>;
}
