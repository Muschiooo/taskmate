import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 text-center md:flex md:justify-between md:items-center">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TaskMate. Tutti i diritti riservati.
        </span>
                <nav className="mt-4 md:mt-0">
                    <ul className="flex justify-center gap-6">
                        <li>
                            <Link href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                                Contatti
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
