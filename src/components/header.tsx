import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import ThemeSwitch from "./themeSwitch";

export function Header(){
    return(
        <header className="h-20 w-full bg-stone-300 dark:bg-stone-800">
            <nav className="fit-container h-full flex items-center justify-between">
                <div className="flex gap-16 items-center">
                    <Link href="/">
                        <h1 className="font-bold text-3xl text-primary">
                            Daily<span className="text-orange-600">Games</span>
                        </h1>
                    </Link>

                    <ul className="flex gap-6 items-center text-primary">
                        <li>
                            <Link href="/" className="font-semibold text-lg">Jogos</Link>
                        </li>

                        <li>
                            <Link href="/perfil" className="font-semibold text-lg">Perfil</Link>
                        </li>
                    </ul>
                </div>
                <ThemeSwitch/>
            </nav>
        </header>
    )
}