import { GameCard } from "@/components/gameCard";
import { GameProps } from "@/utils/types/game";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

interface Params {
    params: {
        id: string
    }
}

export async function generateMetadata({params} : Params): Promise<Metadata>{
    try {
        const response: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`)
        .then((res)=> res.json())
        .catch(()=>{
            return {
                title: "DailyGames"
            }
        })

        return{
            title: response.title,
            description: `${response.description.slice(0, 100)}...`,
            openGraph:{
                title: response.title,
                images: [response.image_url]
            }
        }

    } catch (error) {
        return{
            title: "DailyGames"
        }
    }
}

async function getDailyGame() {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: 'no-cache' });
        return res.json();
    } catch (error) {
        throw new Error("Erro ao buscar jogo do dia");

    }
}

async function getData(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`);
        return res.json();
    } catch (error) {
        throw new Error("Erro ao buscar jogo");
    }
}


export default async function uniqueGame({ params }: Params) {
    const game : GameProps = await getData(params.id)
    const dailyGame : GameProps = await getDailyGame() 

    if (!game) {
        redirect("/")
    }

    return(
        <main className="pb-10">
            <div className="w-full h-96 relative rounded-lg">
                <Image
                    src={game.image_url}
                    alt={`banner ${game.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="brightness-50"
                    quality={100}
                />

                <Image
                    src={game.image_url}
                    alt={`banner ${game.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="rounded-lg object-contain backdrop-blur-lg"
                    priority
                    quality={100}
                />
            </div>

            <section className="fit-container text-primary">
                <h2 className="my-4 font-semibold text-3xl text-primary">{game.title}</h2>
                <p className="text-primary">{game.description}</p>

                <h3 className="my-4 font-semibold text-xl text-primary">Plataformas disponíveis:</h3>
                <ul className="flex gap-2 flex-wrap text-primary">
                    {game.platforms.map((platform, i) => (
                        <li key={i} className="bg-stone-300 dark:bg-stone-800 rounded-lg py-1.5 px-2">{platform}</li>
                    ))}
                </ul>

                <h3 className="my-4 font-semibold text-xl text-primary">Categorias:</h3>
                <ul className="flex gap-2 flex-wrap text-primary">
                    {game.categories.map((category, i) => (
                        <li key={i} className="bg-stone-300 dark:bg-stone-800 rounded-lg py-1.5 px-2">{category}</li>
                    ))}
                </ul>

                <h3 className="my-4 font-semibold text-xl text-primary">Lançamento: <span className="text-base font-normal">{game.release}</span></h3>
                <h3 className="my-6 font-semibold text-xl text-primary">Outros jogos que recomendamos:</h3>
                
                <Link href={`/game/${dailyGame.id}`} className="">
                    <div className="w-full max-h-72 h-72 relative">
                        <div className="w-full h-full bg-black rounded-lg" />
                        <Image
                            className="rounded-lg w-full max-h-96 object-cover opacity-50 hover:opacity-100 duration-300"
                            quality={100}
                            priority
                            src={dailyGame.image_url}
                            alt={dailyGame.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                        />

                        <p className="absolute flex items-center gap-1 text-2xl font-semibold z-30 text-white bottom-6 left-6">{dailyGame.title} <FaAngleRight /></p>
                    </div>
                </Link>
            </section>
        </main>
    )
}