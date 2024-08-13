'use client'

import { useState } from "react"
import { LuPlus, LuX } from "react-icons/lu"

export function FavoriteGame() {
    const [input, setInput] = useState("")
    const [showInput, setShowInput] = useState(false);
    const [gameName, setGameName] = useState("")

    const handleClose = () =>{
        setShowInput(!showInput)

        if (input !== "") {
            setGameName(input)
        }

        setInput("")
    }
    

    return(
        <div className="rounded-lg bg-zinc-300 dark:bg-stone-700 text-primary h-48 p-4 flex flex-col justify-between">
            {showInput ? (
                <div className="flex items-center gap-2">
                    <input 
                        type="text" 
                        className="bg-transparent w-full focus:outline-none border-b border-b-stone-900/80 dark:border-b-stone-200" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <LuX className="hover:scale-125 text-xl cursor-pointer duration-300 transition-transform" onClick={handleClose} />
                </div>
            ):
                <LuPlus 
                    onClick={handleClose}
                    className="self-start text-xl hover:scale-125 cursor-pointer duration-300 transition-transform"
                />
            }

            {gameName !== "" ?
                (
                    <div>
                        <p className="font-semibold text-xl">Jogo favorito:</p>
                        <span>{gameName}</span>
                    </div>
                )
                :
                <p className="font-semibold text-xl">Adicionar jogo</p>
            }
        </div>
    )
}