import { FavoriteGame } from "@/components/favoriteGame";
import { Metadata } from "next";
import Image from "next/image";
import { FaShare } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Meu perfil"
}

export default function Profile(){
    return(
        <main className="fit-container py-10">
            <section className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">

                <div className="flex flex-col sm:flex-row gap-5 items-center w-10/12">
                    <div className="relative w-full max-w-40 h-40 rounded-full">
                        <Image
                            src={'/user.png'}
                            alt="Icon de usuário"
                            fill
                            className="rounded-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                            quality={100}

                        />
                    </div>
                    <h2 className="text-2xl font-bold">Rafael Melo</h2>
                </div>

                <div className="flex gap-3 justify-end">
                    <button className="w-fit  bg-orange-600 h-fit text-stone-100 p-2 rounded-lg font-semibold">
                        Configurações
                    </button>

                    <button className="w-fit  bg-orange-600 h-fit text-stone-100 p-3 rounded-lg">
                        <FaShare />
                    </button>
                </div>
            </section>

            <section className="grid grid-col sm:grid-flow-row sm:grid-cols-3 gap-5 mt-10">
                <FavoriteGame/>
                <FavoriteGame />
                <FavoriteGame />
            </section>
        </main>
    )
}