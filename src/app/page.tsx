import { GameCard } from "@/components/gameCard";
import { Search } from "@/components/search";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

async function getDailyGame(){
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next:{revalidate: 320} });
    return res.json();
  } catch (error) {
    throw new Error("Erro ao buscar jogo do dia");
    
  }
}

async function getGames() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 } });
    return res.json();
  } catch (error) {
    throw new Error("Erro ao buscar jogos");
  }
}



export default async function Home() {
  const dailyGame:GameProps = await getDailyGame();
  const games: GameProps[] = await getGames();


  return (
    <main className="fit-container py-10">

      <Link href={`/game/${dailyGame.id}`} className="">
        <div className="w-full max-h-96 h-96 relative">
          <div className="w-full h-full bg-black rounded-lg"/>
          <Image
            className="rounded-lg w-full max-h-96 object-cover opacity-50 hover:opacity-100  duration-300"
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

      <Search/>

      <h2 className="font-semibold text-2xl mb-4">Jogos para conhecer:</h2>
      <section className="flex flex-wrap justify-between items-center gap-5">
        {games.map(game => (
          <GameCard url={`/game/${game.id}`} title={game.title} image_url={game.image_url} key={game.id}/>
        ))}
      </section>
    </main>
  );
}
