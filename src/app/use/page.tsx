"use client" // precisa desse cara pra transformar a página em client side, mas n mostra os dados para o exterior da aplicação

import Link from "next/link";
import { useEffect, useState } from "react";

interface IData {
    name: string;
    id: string
}

const Use = () => {
    const [characters, setCharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();
            setCharacters(data.results);
        }
        load();
    }, [])

    return (
        <>
            {characters.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <Link href={`/character/${item.id}`}>Me clique {item.id}</Link>
                    </div>
                )
            })}
        </>
    )

}

export default Use;
