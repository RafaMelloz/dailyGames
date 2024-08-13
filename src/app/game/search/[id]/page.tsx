import { GameCard } from "@/components/gameCard";
import { Search } from "@/components/search";
import { GameProps } from "@/utils/types/game";

interface Params{
    params: {
        id: string
    }
}

async function getData(id:string){
    try {
        const decode = decodeURI(id)

        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decode}`);
        return res.json();
    } catch (error) {
        return null
    }
}

export default async function ResultSearch({ params } : Params ){
    const games : GameProps[] = await getData(params.id)

    return(
        <main className="fit-container">
            <Search/>
            
            {!games ? <h2 className="font-semibold mb-5 text-xl text-center">Nada encontrado</h2> : <h2 className="font-semibold mb-5 text-xl">Veja oque encontramos na nossa base:</h2>}

            <section className="flex flex-wrap justify-between items-center gap-5">
                {games && games.map(game =>(
                    <GameCard title={game.title} image_url={game.image_url} url={`/game/${game.id}`} key={game.id}/>
                ))}
            </section>
        </main>
    )
}