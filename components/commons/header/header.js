import Link from "next/link"
import { ListChecks, UserCircle, LogOut } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-indigo-500 hover:text-purple-600 transition-colors">
                    <ListChecks className="w-8 h-8 text-purple-600" />
                    <span className="text-2xl font-bold">TaskMate</span>
                </Link>
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-1">
                                <UserCircle className="w-5 h-5 text-blue-500" />
                                Profilo
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-600 hover:text-red-500 transition-colors flex items-center gap-1">
                                <LogOut className="w-5 h-5 text-red-500" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
