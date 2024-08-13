'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export function Search(){
    const [search, setSearch] = useState<string>("");
    const router = useRouter()

    const handleSearch = (e:React.FormEvent) => {
        e.preventDefault()

        if (search === '') {
            return;
        }

        router.push(`/game/search/${search}`)
    }

    return(
        <form onSubmit={handleSearch} className="w-full my-10">

            <label htmlFor="search" className="flex justify-between items-center rounded-lg bg-stone-300 w-full p-2 border hover:border-orange-600 transition-colors duration-300">
                <input
                    className="bg-transparent focus:outline-none w-full placeholder:text-black/60"
                    id="search"
                    type="text"
                    placeholder="Procurando algum jogo?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    autoComplete="off"
                />

                <button type="submit" className="text-orange-600">
                    <LuSearch />
                </button>
            </label>

        </form>
    )
}