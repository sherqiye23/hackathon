import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function Header() {
    return (
        <header className="border-b border-border">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">CreditFlow</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost">Sign In</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}