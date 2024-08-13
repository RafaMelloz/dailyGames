import Link from "next/link";

export function Header(){
    return(
        <header className="h-20 w-full bg-stone-300">
            <nav className="fit-container h-full flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">
                        Daily<span className="text-orange-600">Games</span>
                    </h1>
                </Link>

                <ul className="flex gap-6 items-center">
                    <li>
                        <Link href="/" className="font-semibold text-lg">Jogos</Link>
                    </li>

                    <li>
                        <Link href="/perfil" className="font-semibold text-lg">Perfil</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    )
}