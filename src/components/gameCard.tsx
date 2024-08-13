import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface Card{
    title:string,
    image_url:string,
    url:string
}

export function GameCard({title,image_url,url}:Card){
    return(
        <Link href={url} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-stone-300 p-2 rounded-lg">
            <div className="w-full h-56 max-h-56 relative">
                <Image
                    src={image_url}
                    alt={`Imagem do jogo ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="rounded-lg"
                />
            </div>
            <div className="flex items-center justify-between gap-2 mt-2">
                <p className="truncate font-semibold ">{title}</p>
                <FaAngleRight />
            </div>
        </Link>
    )
}